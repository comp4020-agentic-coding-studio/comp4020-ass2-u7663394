# What the course checks protect

`pnpm check` runs Astro type checking, the production build and every test here.
The tests read `dist/`; `pnpm exec vitest run spec` alone does not rebuild it.

- `data-integrity.test.ts` is the supplied teaching-period contract.
- `assignment-2.test.ts` is the original red specification: allocated code,
  twelve dated lectures, a real deck and assessment totals.
- `curriculum.test.ts` protects this course's exact phase order, Monday/Friday
  rhythm, distinct questions and builds, actual lecture-to-deck links, complete
  assessment contracts, and teaching before each deadline. Its independent tool
  inventory prevents deletion of a requirement from manufacturing a pass.
- `fixtures.test.ts` exercises the downloadable request adapter: isolated
  results, empty success, transport failure, expired session and unknown route.

The new curriculum suite was falsified with one-at-a-time mutations of the
built output. Date, phase, weight, missing-tool, duplicated-build and removed-link
faults all failed, and the original built files were restored. The detailed
record is in [development notes](../docs/decisions.md).

These checks cannot judge whether the prose is compelling or a teaching example
actually helps. Distinct metadata is only an identity check. Read weeks 2, 6,
9 and 12, the migration comparison and all assessment briefs as a prospective
student. Browser review also covers navigation, search, keyboard use, every
slide and the two marking viewports. The presentation's scaled layout can be
wrong even when the document itself has no overflow.

The optional `pnpm test:template` tests the starter's own tooling. Its original
image bytes are immutable fixtures under `scripts/fixtures/starter-images/`;
they are never served on the course website.
