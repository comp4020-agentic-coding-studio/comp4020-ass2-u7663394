// A2's published spec, turned into backpressure. These assert the *contract*
// --- what the site must do --- against the built output, never the source, so
// they survive a change of approach to how the course is authored.
//
// They start red on purpose: the course doesn't exist yet, and turning each one
// green is the work.
//
// The spec lines these answer:
//   - "one niche course at Slop University, under a SLOPxxxx code that keeps
//      the three digits your repo arrived with, running across twelve dated
//      teaching weeks"
//   - "at least one lecture carries a real deck, linked from its page"
//   - "assessment that adds up to 100%"
//
// The lines they deliberately do NOT answer, because no test can: whether the
// course is niche, whether the twelve weeks carry one idea, whether the prose
// has a voice. Those are settled by a person reading for ten minutes.

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
    level: number;
    title: string;
    startDate: string;
    endDate: string;
    tags: string[];
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

const nodesOfType = (type: string): ApiNode[] => api.nodes.filter((node) => node.type === type);
const dateOnly = (value: unknown): string => String(value).slice(0, 10);

/** The three digits this repo was provisioned with. No other course in the
 *  cohort has them, so they are the one part of the code that is not a choice. */
const ALLOCATED_DIGITS = "797";
const TEACHING_WEEKS = 12;

describe("the course record", () => {
  it("keeps the three digits this repo was allocated", () => {
    expect(api.course.code).toMatch(/^SLOP[123468]\d{3}$/);
    expect(
      api.course.code.slice(-3),
      `the code's last three digits are allocated to this repo and must stay ${ALLOCATED_DIGITS}`,
    ).toBe(ALLOCATED_DIGITS);
  });

  it("declares a level that matches the code's first digit", () => {
    // course-config.ts enforces this at parse time; asserting it here means the
    // contract survives someone reaching past the schema.
    expect(api.course.level).toBe(Number(api.course.code.at(4)));
  });

  it("is the course's own record, not the starter's", () => {
    expect(api.course.title).not.toBe("Course Title Goes Here");
    expect(api.course.tags).not.toContain("replace me");
    expect(api.course.tags.length).toBeGreaterThan(0);
  });
});

describe("twelve dated teaching weeks", () => {
  // This course carries its teaching weeks as `lectures`, one per week; the
  // practical strand lives in `sessions`. A test has to pick one, and this is
  // the pick. If that ever changes, change it here in one place.
  const weeks = nodesOfType("lectures");

  it(`runs across ${TEACHING_WEEKS} teaching weeks`, () => {
    expect(weeks).toHaveLength(TEACHING_WEEKS);
  });

  it("numbers the weeks 1 to 12 with none missing and none repeated", () => {
    const numbers = weeks.map((week) => week.meta?.week);
    expect([...numbers].sort((a, b) => Number(a) - Number(b))).toEqual(
      Array.from({ length: TEACHING_WEEKS }, (_, index) => index + 1),
    );
  });

  it("gives every week a date inside the teaching period", () => {
    for (const week of weeks) {
      const date = dateOnly(week.meta?.date);
      expect(date, `${week.id} has no date`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(date >= api.course.startDate, `${week.id} falls before teaching starts`).toBe(true);
      expect(date <= api.course.endDate, `${week.id} falls after teaching ends`).toBe(true);
    }
  });

  it("never runs two teaching weeks on the same date", () => {
    // Twelve weeks sharing a date is the kind of error that survives every
    // other check and that a marker hitting non-adjacent weeks lands on.
    const dates = weeks.map((week) => dateOnly(week.meta?.date));
    expect(new Set(dates).size).toBe(dates.length);
  });

  it("advances the date with the week number", () => {
    const ordered = [...weeks].sort((a, b) => Number(a.meta?.week) - Number(b.meta?.week));
    const dates = ordered.map((week) => dateOnly(week.meta?.date));
    expect([...dates].sort()).toEqual(dates);
  });
});

describe("a real deck, linked from its lecture page", () => {
  // A conjunction, so it gets two assertions rather than one. A deck that
  // builds but is linked from nowhere satisfies half the line; so does a
  // lecture page linking at a deck that isn't there.
  const withSlides = nodesOfType("lectures").filter((lecture) => lecture.meta?.slides);

  it("has at least one lecture pointing at a deck", () => {
    expect(withSlides.length).toBeGreaterThan(0);
  });

  it("builds every deck a lecture points at", () => {
    for (const lecture of withSlides) {
      const slug = String(lecture.meta?.slides).replace(/^.*\/decks\//, "").replace(/\/$/, "");
      const built = resolve("dist/decks", slug, "index.html");
      expect(existsSync(built), `${lecture.id} links a deck that isn't built: ${slug}`).toBe(true);
    }
  });

  it("carries a deck with real slides in it, not a stub", () => {
    // Can't test whether a deck is *good*. Can test that it isn't one slide
    // of placeholder --- the cheapest proxy for "a real deck".
    const slugs = withSlides.map((lecture) =>
      String(lecture.meta?.slides).replace(/^.*\/decks\//, "").replace(/\/$/, ""),
    );
    const slideCounts = slugs
      .map((slug) => resolve("dist/decks", slug, "index.html"))
      .filter((path) => existsSync(path))
      .map((path) => readFileSync(path, "utf8").match(/<section/g)?.length ?? 0);
    expect(Math.max(0, ...slideCounts)).toBeGreaterThanOrEqual(5);
  });
});

describe("assessment", () => {
  const assessments = nodesOfType("assessments");

  it("adds up to 100%", () => {
    // Each assessment's own schema is validated by the build; nothing in the
    // build adds them up across pages, which is exactly why this is here.
    const total = assessments.reduce((sum, item) => sum + Number(item.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("gives every assessment a weight and a due date", () => {
    expect(assessments.length).toBeGreaterThan(0);
    for (const item of assessments) {
      expect(Number(item.meta?.weight), `${item.id} has no weight`).toBeGreaterThan(0);
      expect(dateOnly(item.meta?.due), `${item.id} has no due date`).toMatch(
        /^\d{4}-\d{2}-\d{2}$/,
      );
    }
  });

  it("keeps any marking model it declares internally consistent", () => {
    for (const item of assessments) {
      const marking = item.meta?.marking as
        | { mode?: string; criteria?: { weight: number }[] }
        | undefined;
      if (marking?.mode !== "weighted" || !marking.criteria) continue;
      const total = marking.criteria.reduce((sum, criterion) => sum + criterion.weight, 0);
      expect(total, `${item.id}'s criteria don't total 100`).toBe(100);
    }
  });
});

describe("the weeks agree with each other", () => {
  // Beyond the letter of the spec, and the closest mechanical proxy for the
  // criterion the spec leaves to a person: "twenty-odd pages that have to
  // agree with each other". A dangling ref already fails the build; what the
  // build cannot see is a page connected to nothing at all.
  it("leaves no teaching week stranded without a single connection", () => {
    const connected = new Set<string>();
    for (const node of api.nodes) {
      for (const ref of node.related ?? []) {
        connected.add(ref.includes("/") ? ref : `${node.type}/${ref}`);
        connected.add(node.id);
      }
    }
    const stranded = nodesOfType("lectures")
      .filter((week) => !connected.has(week.id))
      .map((week) => week.id);
    expect(stranded, "these weeks connect to nothing else in the course").toEqual([]);
  });
});
