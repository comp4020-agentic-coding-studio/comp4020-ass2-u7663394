import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { expect, it } from 'vitest';

const { createFixtureRequest } = await import(pathToFileURL(resolve('dist/fixtures/request-fixture.js')).href);
const data = JSON.parse(readFileSync('dist/fixtures/course-data.json','utf8'));
it('downloads independent article results without mutating the shared fixture', async()=>{
  const request = createFixtureRequest(data,{delay:0});
  const first = await request('articles');
  first.data.items[0].title='Changed locally';
  const second = await request('articles');
  expect(second.data.items[0].title).toBe(data.articles[0].title);
  expect(second.data.items.length).toBeGreaterThan(0);
});
it('distinguishes empty success from transport failure', async()=>{
  expect(await createFixtureRequest(data,{delay:0,scenario:'empty'})('articles')).toEqual({code:'OK',data:{items:[],nextPage:null}});
  await expect(createFixtureRequest(data,{delay:0,scenario:'failure'})('articles')).rejects.toMatchObject({status:503});
});
it('simulates expired sessions and unknown collections explicitly', async()=>{
  await expect(createFixtureRequest(data,{delay:0,scenario:'unauthorised'})('articles')).rejects.toMatchObject({status:401});
  await expect(createFixtureRequest(data,{delay:0})('missing')).rejects.toMatchObject({status:404});
});
it('keeps all article channel references resolvable',()=>{
  for(const article of data.articles) expect(data.channels.map((c:{id:string})=>c.id)).toContain(article.channelId);
});
