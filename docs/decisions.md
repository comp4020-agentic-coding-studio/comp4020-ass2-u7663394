# Development evidence — 9 September 2026

This is a factual working record, not the student’s final personal narrative.

## Sources inspected

- [Assignment 2 brief and spec](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/assessments/assignment-2/): one niche course, twelve dated weeks, linked real deck, assessment total, deployed public Pages site, own checks and process evidence.
- [Assessment handbook](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/): 45% process / 20% artefact / 35% response; Chrome at 1920×1080 and 390×844; PROCESS.md is the student's own 400–600 word account. Deadline: noon 21 September 2026.
- Entire IDEA.md, README.md, existing harness, schemas, layouts, components, deck integration, evidence script, spec and CI.
- [Calling Bullshit syllabus](https://callingbullshit.org/syllabus.html): a recurring judgement connects distinct weekly subjects.
- [How to Make Almost Anything](https://fab.cba.mit.edu/classes/863.25/): weekly making supports cumulative capability. These inform an approach; neither syllabus is copied.

## Baseline observed

`pnpm check` built the starter, then reported 4 failed / 12 passed assertions: placeholder course record, insufficient week count/numbering, and insufficient deck length. The existing deck suite did not inspect lecture HTML for its link despite its name. First sandbox run could not bind Astro's font server; running with local socket permission resolved this environment failure.

## Decisions taken

The refined title is already proposed in IDEA.md §15. The course focuses on inherited frontend maintenance and migration. Reading, editorial management and consultation are three increasingly demanding state-ownership problems, rather than unrelated portfolio exercises.

The starter dates are a fictional SlopU semester, not the COMP4020 calendar. Retain 22 February–28 May 2027. Twelve consecutive teaching Mondays end 10 May; Friday studios end 14 May, leaving two weeks to finish the capstone. A1 is due 11 April, A2 on 2 May, A3 on 28 May. Releases occur in weeks 3, 8 and 10.

Vue 2 is end-of-life according to its official documentation. Preserve the user's legacy-first curriculum while identifying its maintenance context. Less, Sass, Vant setup and ESLint also need teaching coverage if required in assessment.

A green metadata test cannot prove that a page teaches well. Manual review must inspect actual explanations, non-adjacent weeks and the three assessment briefs. No claim of manual verification is made yet.

## Falsification of the new curriculum checks

Mutations were applied only to built output, one at a time, and restored after each run. Each caused the suite to fail:

- Move Pinia teaching after dashboard deadline → failed as intended.
- Remove a required tool to evade readiness → failed as intended.
- Duplicate weekly build identity → failed as intended.
- Change assessment total → failed as intended.
- Break phase progression → failed as intended.
- Remove actual lecture deck links → failed as intended.

The first new test run exposed a test-path bug: resolving a root-relative deck path discarded `dist`. The helper was corrected to remove the leading slash; no content or threshold was loosened.

## A template sensor coupled to replaceable content

The optional template-tooling run failed four tests after the mandated removal of starter images. Those tests copied their fixtures from published `src/` paths. The original bytes now live under `scripts/fixtures/starter-images/`, and the tests read those immutable fixtures. The production evidence checker and its hashes are unchanged; the tests still prove that each original image is rejected.

The first homepage browser review found a dark caption on the dark architecture diagram. The theme's figure-caption colour overrode inheritance. An explicit inherited colour fixed that scoped contrast issue.
