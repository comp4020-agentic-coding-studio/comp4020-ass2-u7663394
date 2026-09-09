import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

type Node = { id: string; type: string; title: string; meta: Record<string, unknown> };
const api = JSON.parse(readFileSync('dist/api/index.json', 'utf8')) as {
  course: { code: string; startDate: string; endDate: string }; nodes: Node[];
};
const lectures = api.nodes.filter(n => n.type === 'lectures').sort((a,b)=>Number(a.meta.week)-Number(b.meta.week));
const studios = api.nodes.filter(n => n.type === 'sessions');
const assessments = api.nodes.filter(n => n.type === 'assessments').sort((a,b)=>a.id.localeCompare(b.id));
const html = (id: string) => readFileSync(resolve('dist',id.replace(/^\//, ''),'index.html'),'utf8');
const day = (s: unknown) => new Date(String(s).slice(0,10)+'T00:00:00Z').getTime();
const list = (value: unknown): string[] => Array.isArray(value) ? value.map(String) : [];
// Independent expected curriculum: do not derive this contract from the data being checked.
const expectedTeaching: Record<string,number> = {
  vue2:1, forms:2, 'derived-state':3, components:4, 'component-interfaces':5, less:5,
  router3:6, axios:6, vant2:6, authentication:6, vuex:7,
  vue3:8, 'composition-api':8, vite:8, pinia:9, router4:9, 'element-plus':9,
  sass:9, 'request-architecture':9, typescript:10, 'typed-vue':11, vueuse:11,
  vant4:11, eslint:11, vitest:12, 'happy-dom':12, 'mock-api':12, rbac:12, 'svg-sprites':12,
};
const requiredByAssessment = [
  ['vue2','forms','derived-state','components','component-interfaces','less','router3','axios','vant2','authentication','vuex'],
  ['vue3','composition-api','vite','pinia','router4','element-plus','sass','axios','request-architecture'],
  ['typescript','typed-vue','vue3','vite','pinia','router4','axios','request-architecture','vueuse','vant4','eslint','vitest','happy-dom','mock-api','rbac','svg-sprites'],
];

describe('the promised semester', () => {
  it('has twelve consecutive Monday lectures and corresponding Friday studios', () => {
    expect(lectures).toHaveLength(12); expect(studios).toHaveLength(12);
    lectures.forEach((lecture,index) => {
      expect(lecture.meta.week).toBe(index+1);
      expect(day(lecture.meta.date)).toBe(day(api.course.startDate)+index*7*86400000);
      const studio = studios.filter(s=>s.meta.week===index+1);
      expect(studio).toHaveLength(1);
      expect(day(studio[0].meta.date)).toBe(day(lecture.meta.date)+4*86400000);
    });
  });
  it('preserves the legacy, migration and typed phases', () => {
    expect(api.course.code).toBe('SLOP2797');
    expect(lectures.map(l=>l.meta.phase)).toEqual([...Array(7).fill('Vue 2'),...Array(2).fill('Vue 3'),...Array(3).fill('Vue 3 + TypeScript')]);
    for (const [technology,week] of Object.entries(expectedTeaching)) {
      expect(list(lectures[week-1].meta.teaches),`${technology} must be taught in week ${week}`).toContain(technology);
    }
  });
  it('publishes distinct questions and builds, with actual teaching and deck links', () => {
    for (const key of ['question','buildOutcome']) {
      const values=lectures.map(l=>String(l.meta[key]??''));
      expect(values.every(v=>v.length>15)).toBe(true);
      expect(new Set(values).size).toBe(12);
    }
    for (const l of lectures) {
      const page=html(l.id);
      expect(page).toContain('Why this week exists');
      expect(page).toContain('Try to break it');
      expect(page).toContain('Architecture and migration lens');
      const slides=String(l.meta.slides);
      expect(page,`${l.id} must link its own deck`).toMatch(new RegExp(`href="[^"]*${slides}"`));
      expect((html(slides).match(/<section\b/g)??[]).length).toBeGreaterThanOrEqual(7);
    }
  });
});

describe('assessment readiness', () => {
  it('keeps three complete briefs, releases and the 30 / 35 / 35 contract', () => {
    expect(assessments.map(a=>a.id)).toEqual(['assessments/assignment-1','assessments/assignment-2','assessments/assignment-3']);
    expect(assessments.map(a=>a.meta.weight)).toEqual([30,35,35]);
    const releaseWeeks=[3,8,10];
    assessments.forEach((a,i)=>{
      expect(day(a.meta.release)).toBe(day(lectures[releaseWeeks[i]-1].meta.date));
      expect(day(a.meta.release)).toBeLessThan(day(a.meta.due));
      expect(day(a.meta.due)).toBeLessThanOrEqual(day(api.course.endDate));
      expect(list(a.meta.requires).sort()).toEqual([...requiredByAssessment[i]].sort());
      expect(list(a.meta.deliverables).length).toBeGreaterThanOrEqual(5);
      expect(html(a.id)).toContain('What you submit');
    });
  });
  it('teaches every required tool, including its studio, before the deadline', () => {
    for (const a of assessments) for (const tool of list(a.meta.requires)) {
      const teaching=lectures.filter(l=>list(l.meta.teaches).includes(tool));
      expect(teaching.length,`${a.id}: no teaching for ${tool}`).toBeGreaterThan(0);
      const first=teaching[0];
      expect(day(first.meta.date),`${a.id}: ${tool} lecture occurs too late`).toBeLessThan(day(a.meta.due));
      const studio=studios.find(s=>s.meta.week===first.meta.week)!;
      expect(day(studio.meta.date),`${a.id}: ${tool} studio occurs too late`).toBeLessThan(day(a.meta.due));
    }
    expect(list(assessments[1].meta.requires)).not.toContain('typescript');
    expect(day(assessments[2].meta.due)).toBeGreaterThan(day(studios.find(s=>s.meta.week===12)!.meta.date));
  });
});

function pages(dir:string):string[] {
  return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?pages(resolve(dir,e.name)):e.name.endsWith('.html')?[resolve(dir,e.name)]:[]);
}
it('serves local images and absolute social preview URLs',()=>{
  for(const path of pages('dist')) {
    const page=readFileSync(path,'utf8');
    expect(page.match(/<img\b[^>]*\bsrc="https?:[^\"]*"/g)??[],path).toEqual([]);
    for(const match of page.matchAll(/<meta\s+property="og:image"\s+content="([^"]+)"/g)) expect(match[1]).toMatch(/^https:\/\//);
  }
});
