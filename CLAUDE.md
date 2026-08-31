# COMP4020 — Slop University course site (A2)

This repo builds **one course website for Slop University**, as a student in the
course would see it. There is no separate curriculum document, so every decision
about the course lands in the site.

The stack is Astro, but **there is no stack choice to make here** and that is a
change from every previous week. The Slop identity, the four content
collections, the build pipeline and the generated API arrived fixed; `README.md`
draws the line and is the reference for the platform. What's mine is the course
itself: the pages, the components, the navigation, the visual treatment and
every word.

The **deployed site is what gets marked** — not this repo, and not "it works on
my machine". Markers read it the way a prospective student would, for about ten
minutes, in Chrome at 1920×1080 and 390×844. Both viewports count in full.

A2's brief and spec are published on the course website. Read both before
planning or building. Two lines from them govern everything below:

- **Twelve dated teaching weeks that agree with each other.** A1 was one page
  with one interaction; this is twenty-odd pages that have to hold together.
- **Twelve weeks that repeat one another, or a site that reads as the starter
  with the nouns swapped, fails "response to the brief" even with CI fully
  green.** No check in this repo can see that. It is the thing to protect.

## How to work in here

- Keep the dev server running (`pnpm dev`). It serves under the base path, so
  the address is `http://localhost:4321/comp4020-ass2-u7663394/` and the bare
  root correctly 404s. If 4321 is taken by a dev server left running in another
  course repo, Astro silently picks the next free port — **read the port out of
  its startup line** rather than assuming. Checking the wrong port once already
  produced a "broken base path" that did not exist.
- Before you push, run `pnpm check`. It is typecheck plus the build plus the
  spec suite, and the build is where most of the sensors actually live (see
  below). CI adds only the secret scan, the evidence check, the template-tooling
  tests and the deploy.
- To see what a page actually looks like rather than what you assume it looks
  like, open it in a browser — the `agent-browser` CLI, documented on
  [the course site](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/backpressure/#agent-browser-the-rendered-page-as-ground-truth),
  works well. The rendered page is the truth; your mental model of it isn't.
  **This repo has no `check:render`,** which is a real loss carried from C4/C5
  and the reason the browser habit matters more here, not less. See "The
  rendered page is the sensor" below.
- When a check fails, read its output before changing anything. Each check names
  what it measures, and the failure message is the instruction: it tells you the
  file, the line, or the contract. Treat a red check as authoritative — the page
  is wrong until the check is green, not until you decide it should be.
- Commit when the checks pass. Never commit a red state.

  **One deliberate exception, at the top of the assignment: the tests written
  for A2's published spec.** They are committed red, before the course exists,
  because that is what they are for — the contract arrives first and the work is
  turning each one green. The red-to-green commits are the process evidence
  `PROCESS.md` cites. The exception is narrow and it expires: it covers
  `spec/assignment-2.test.ts` on the day it is written, and nothing else, ever.

## The checks (your sensors)

**This roster is different from every previous week's, and carrying the old one
forward would have been false in six places.** There is no `oxlint`, no
`stylelint`, no `check:render`, no `check:play`, no `pnpm shots`, and no
separate `linkinator` step to reproduce. `pnpm check` is exactly
`astro check && pnpm build && vitest run spec`.

The important structural change: **`pnpm build` is itself most of the sensor
suite.** Verified on the first run of this repo — one `pnpm build` reported:

- **accessibility** — axe over every rendered page (`Checked 16 pages — no
  accessibility violations`). **The old harness said "nothing here measures
  accessibility, wiring it is your work." That is no longer true**, and it is
  the single biggest sensor upgrade this platform hands over. A page that fails
  axe fails the build.
- **base-path links** — `Checked 16 pages — all internal links respect base`.
- **broken links** — a crawl of the built HTML.
- **dangling content refs** — a `related:` entry that doesn't resolve fails the
  build. This is the point: a dead link between two weeks is caught before it
  ships.
- **deck compilation** — `Checked 1 deck(s) — no structural violations`.
- **the course API** — `Generated course API: 9 nodes, 5 edges, 10 files`.
  Never hand-edit generated JSON.

Then, outside the build:

- **typecheck** — `astro check` runs first, so a type error stops the roster
  before the build starts. The zod schemas in `src/content.config.ts` and
  `src/course-config.ts` are strict, and that strictness is a sensor: a typo in
  a frontmatter key is a build failure, not a silently ignored line.
- **spec** — `spec/data-integrity.test.ts` ships, and asserts the one
  cross-page fact the build cannot: dated material stays inside the teaching
  period. My own spec tests run alongside it (any `spec/*.test.ts`). **These
  tests assert what the site actually built**, which is why `pnpm test` builds
  first; there is only ever the one ordering.
- **evidence** (`pnpm check:evidence`) — the submission gate, and it has two
  clauses this repo has that no previous repo did:
  - every tracked `STARTER_CONTENT` fragment must be replaced and its marker
    removed. **There are 13 of them across 12 files** — the two assessments,
    two lectures, two people, two sessions, the course record, the deck, the
    policies page, and two in `src/pages/index.astro` (hero artwork, and the
    authored page).
  - the four starter images must be replaced or removed: `card.png`,
    `hero-home.avif`, and both people portraits. "The template artwork is a
    placeholder like the rest, and `pnpm check:evidence` will not pass it."
  - `PROCESS.md`'s citations must resolve to real commits. The template ships
    two fake SHAs (`a1b2c3d`, `e4f5a6b`) that fail until replaced.
- **secrets** — `.githooks/pre-commit` (installed by `pnpm install`) blocks any
  commit containing something shaped like an API key. By the time CI sees a key
  it is already pushed, so the hook is the sensor that matters.

**No reflection this time**, and this is worth stating because four previous
weeks trained the opposite habit. `check:evidence` prints it outright:
`✓ reflections/: none needed — an assignment's written account is PROCESS.md`.
The week 7 retro crit presents the breakthrough from that same file.

CI runs the roster on every push **once the repo is public**. While private, both
jobs stay skipped and `pnpm check` is the only feedback loop. A green deploy is
not evidence that anything else passed — read the `check` job, not the URL.

### What this roster still cannot see

The gap is bigger here than in any previous week, and naming it is the point of
this section.

Nothing above can tell whether the twelve weeks are **one idea** or twelve
content-shaped chunks. Nothing can tell whether the prose has a voice or reads
as AI slop. Nothing can tell whether a stranger would want to take this course.
Those are 35% of the mark ("response to the brief") and no test will ever reach
them.

**The agent will produce plausible content-shaped chunks all day.** That is
precisely its failure mode here, and it is a different failure mode from every
previous week: in C4 and C5 a wrong artefact was visibly wrong, and here a wrong
artefact is twelve pages of competent prose that don't add up to a course. The
defence is not a check. It is reading the weeks in a row, out of order, and
asking what the through-line is.

What *can* be mechanised is coherence of **fact**, not of idea — and that is
what my own `spec/*.test.ts` is for. See "Course data has to be honest" below.

## The platform is fixed

Replacing "The stack is swappable", which is false in this repo and would have
invited exactly the wrong move.

Fixed, and not to be changed: the Slop identity (`astro-theme-slop` branding and
palette wired into `src/site-config.ts` and `astro.config.ts`), the four content
collections and their keys, the build pipeline, and the generated API.

**Adding is always allowed**, and this is the important half: a collection of my
own, a page outside the collections, a component the theme doesn't have. A new
collection is declared in `src/content.config.ts`, listed in `graphCollections`
in `src/site-config.ts` if it should carry `related:` edges and appear in the
API, and given its pages under `src/pages/`.

### The collection key is the whole address

`sessions/getting-started` is *simultaneously* the file
`src/content/sessions/getting-started.md`, the page `/sessions/getting-started/`,
the JSON at `/api/sessions/getting-started.json`, and the ref other pages use to
link to it. Those four agree by construction, **so renaming one means renaming
all of them.** Expect this to bite during any restructure of the weeks.

### Facts live in one place

`src/course-config.ts` is the single source for the course record — code, title,
description, tags, level, session, dates. The home page, navigation and
`/api/index.json` all read it. **Do not restate those facts in page copy**; a
fact stated twice is a fact that will disagree with itself by week nine. This is
the same rule as "two numbers describing one object in two languages are one
number" from C5, and here the language boundary is config versus prose.

Its schema is a `strictObject` with a `superRefine`, so it enforces things worth
knowing before fighting it:

- the code must match `SLOP[1|2|3|4|6|8]\d{3}`, and **`level` must equal the
  code's first digit** — changing one without the other is a build failure with
  a message that says so.
- the description is 80–300 characters. Not a suggestion; a parse error.
- one to three tags.
- `startDate` must not be after `endDate`.

**The last three digits are 797** and were allocated to this repo — no other
course in the cohort has them, and they stay. The first digit is the level and
is mine to choose on the ANU scheme (1–4 UG, 6 or 8 PG). It does not affect the
mark. Everything else in that object is placeholder: the year is 2027, the
session `Semester 1`, and the dates `2027-02-22` to `2027-05-28`.

**Change the record's dates alongside the placeholder sessions, lectures and
assessments that use them**, because `spec/data-integrity.test.ts` checks
exactly that relationship and will go red the moment they disagree.

### Two orthogonal flags

`published: false` removes an entry from the production build entirely — no
page, no listing, no graph edge — while leaving it visible in `pnpm dev`. So
staged content is invisible to a marker but visible to me, which is useful and
also a trap: **a week that is finished but still unpublished is a week that
doesn't exist.** `draft: true` is the other axis: the page is visible and marked
as not yet final.

Before shipping, check nothing load-bearing is still `published: false`. Nothing
in the roster will tell you.

### Naming teaching sessions

The collection key, refs and URL stay `sessions` — the programs and courses page
reads those names. What students *see* is `sessionLabels` in
`src/site-config.ts`: Labs, Studios, Workshops, Crits, or something the course
invents. That label is a cheap, high-leverage piece of course voice; the default
is not a decision.

### Frontmatter passes through

The schemas validate the keys they declare and pass through the ones they don't:
an invented key survives validation and lands in that node's `meta` object in
the generated API. Reserved names: `title`, `description`, `tags`, `related`,
`links`, `spec`, `published`.

## Course data has to be honest

Restored from A1, where it was written about an explainer's figures and then cut
in C4 as page-specific. **It is not page-specific; it is the strongest form of
the rule yet**, because A2's spec fixes two data facts outright: *assessment
that adds up to 100%*, and *twelve dated teaching weeks*.

The original earned it against a corporate site that printed `9.3 million
merchants` with no date — the number was from Q3 2022, and fixing that was the
point of the redesign. Here the equivalent is a course that says one thing on
the assessment page and another on week nine.

- **Assessment must total 100%, and that is a test, not a promise.** It is a
  cross-page arithmetic fact: the build validates each assessment's schema but
  cannot add them up. This is the clearest mechanically-checkable line in A2's
  spec — assert it in `spec/`, over the *built* output, so it holds however the
  assessments are authored.
- **Every dated thing sits inside the teaching period, and the weeks are
  contiguous.** `data-integrity.test.ts` ships the first half. Twelve weeks
  with a gap at week seven, or two weeks sharing a date, is the kind of error
  that survives every other check and that a marker hitting "a few non-adjacent
  weeks" will land on directly.
- **A number that appears in prose and in frontmatter is one number.** A weight
  written into a paragraph will drift from the weight in the schema. Prefer
  rendering it from the data; where it must be restated, make the duplication
  say so.
- **Never animate the value of a figure.** A count-up left `396` on screen where
  the source said `687`, and `3.03` for `5.27`, whenever `requestAnimationFrame`
  stopped early. Showing a false number for a second — or leaving one there — is
  not a trade worth making. Motion goes on containers, never on digits. Watch
  for this: a ticking number is a stock flourish, so it is exactly the thing
  that gets suggested.

## Your process is part of the mark

**45% of it** — the largest criterion, and deliberately so. The deployed site is
20%. How I got there is read directly: the commit history, this file, and the
decisions visible across them.

The band that matters: *corroboration is the floor of that band rather than the
top of it.* Citing a commit for each claim is the entry price. **What lifts a
`PROCESS.md` into the HD is why a call beat the obvious one, and how I knew the
result was right before accepting it.**

- **Commit as you go.** Small, frequent commits are the record of how the work
  came together, and that record is read, not just the final state. A trail that
  grew alongside the content is the strongest evidence; a single dump the night
  before is the weakest. On a twenty-page site the temptation is a handful of
  enormous content commits — resist it, because a 2,000-line commit says nothing
  about how the course was decided.
- **`PROCESS.md` is 400–600 words and is one narrative**, not a run of fixes
  with a commit hash apiece. The brief is specific about the shape: *how
  directing this particular course changed what I asked the agent for and what I
  accepted back.* Cite commits as you go — an uncited claim isn't evidence, and
  `check:evidence` fails a `PROCESS.md` with no citations. Link text is the SHA
  or `sha...sha` range; the target is the commit or compare URL.
- **There is no reflection file.** The week 7 retro presents the breakthrough
  from `PROCESS.md`.
- **This file is process evidence.** The harness built to direct the agent is
  itself read as part of how I worked. The gap between the starter's `CLAUDE.md`
  — which arrived with *no rules in it, on purpose* — and this file is the
  evidence. Keep it honest and current.

No name, student number or identity file. We know whose repo it is.

## This file is yours

The starter shipped a `CLAUDE.md` containing nothing but a note saying it was
mine to write, because nothing about the platform is pre-recorded in it. This
version is carried forward from C5 and merged, deliberately:

- the durable rules were kept, and the four weeks that earned them are named;
- the roster, the stack section, the URL rule, the card and the reflection rule
  were **rewritten**, because the platform underneath them changed and a rule
  that is false is worse than a rule that is missing;
- the C5 game material was compressed into one dormant section rather than
  deleted, because the brief allows interactive widgets;
- the A1 data-honesty rule was **restored**, because A2 needs it more than A1
  did.

As I learn what this site needs — a convention to hold the agent to, a sensor
that keeps catching me out, a fact about the platform the agent keeps getting
wrong — it goes here.

---

The rules below are not style preferences. Each is here because something went
wrong, and the note says what. They were earned in C1, C2, A1, C4 and C5.

## The rendered page is the sensor, not the source

`pnpm check` proves the HTML is well-formed and now, via axe, that it is
accessible. It still has **no layout engine** — Vitest runs against JSDOM, which
has none — so it cannot see a page that overflows a phone, a nav that wraps into
three lines, or a table that runs off the side at 390px.

**This repo has no `check:render`**, and that is the sharpest tool lost coming
out of C5. Twenty pages at two viewports is a lot of surface with no automated
eye on it. Either open the pages in a browser before committing anything visual,
or port a render check — the C5 script discovered its own page list from
`dist/`, which is exactly the property that makes it worth porting to a site
whose page count keeps growing.

What sensor-building has cost so far, which is worth remembering when reading or
writing any check:

- **A sensor that derives its threshold from the thing it measures cannot
  fail.** `check:render` first compared overflow against `window.innerWidth`,
  which widens along with an overflowing grid track, and so reported zero
  overflow on a page 46px too wide. Note the boundary: deriving the *page list*
  from `dist/` is fine, because that's an inventory. Deriving the *threshold*
  from the measurement is not.
- **Falsify a new check before trusting it.** Every sensor that ever worked was
  run against a deliberately planted fault. A check that has never been seen to
  go red is a decoration. Don't ask whether it *can* fail in principle; watch
  it. **When a falsification comes back green, the first suspect is the check,
  not the fault.**
- **When a spec line is a conjunction, count the clauses and count the
  assertions.** C5's `check:play` was named after "a wrong move is possible,
  *and* play ends somewhere" and asserted only the second half; an unlosable
  game sailed through 7/7. A check named after an "and" that tests one side is a
  lie, and it is hard to see because the comment above it reads correctly.
  **A2's spec is full of conjunctions** — "deployed and live *at both marking
  viewports*", "twelve dated teaching weeks" (twelve, dated, and teaching
  weeks), "at least one lecture carries a real deck, *linked from its page*".
  Count them when writing `spec/assignment-2.test.ts`.
- **Check identity, not liveness.** `astro preview` is a daemon: it survives
  `subprocess.kill()`, and a second one prints "already running" and exits 0. A
  whole day's runs measured a server started ten hours earlier. A server
  answering is not evidence it is answering with your build — compare the bytes
  against `dist/`.
- **If a sensor disagrees with a change you just made, rebuild before you
  investigate.** `node scripts/foo.mjs` does not build; the `pnpm` script is
  where the build is. Half an afternoon went into diagnosing a fault that had
  already been fixed, against a stale `dist/` — and because the fault had been
  real once, every reading was consistent and plausible.
- **If a sensor says the page is broken, reproduce it by hand before changing
  the page.** Two of C4's twenty checks were red the first time and both times
  the bug was in the *test*. Both would have led to "fixing" correct code.
- **If a measurement disagrees with a screenshot, trust the measurement and
  check the screenshot's method.** A naive
  `chrome --headless --screenshot --window-size=390,844` cropped a desktop-width
  render and looked exactly like a broken mobile layout. Half an hour went into
  a bug that did not exist.
- **A falsification that stays green tells you something too.** Deleting the
  `resume()` call from C4's gesture handler did not go red, because Chrome
  auto-starts an autoplay-blocked `AudioContext` on the first gesture anyway. So
  the probe could not catch a missing `resume()`, and the line stayed in for
  Safari and iOS where it is load-bearing. **Write the hole down rather than
  deleting the line that fills it.**

## Loops that will not settle

All the same mistake as the overflow threshold above, one level out: **a
quantity derived from a thing must not also determine that thing.**

- **A layout must not depend on a figure measured from the layout.** A readout
  showing a value measured off the render, in a region the render is then fitted
  around, closes the circle and the page reflows forever. With a
  `ResizeObserver` in the loop this hung a whole check run rather than merely
  looking wrong. Text that a measurement writes into **reserves its height**,
  and the resize handler returns early unless something actually moved.
- **A geometric heuristic has to be about the quantity you need, not a proxy for
  it.** Overlays clip one edge of a drawing's safe box each, and the first
  version chose the edge the overlay sat *nearest*. A full-width bar along the
  bottom of a phone is flush with the left edge too, so it cut the left off the
  whole frame. Choosing by the *area* the cut costs is correct, because area is
  what the drawing needs.

## If I build an interactive widget

Dormant on a content site, and kept because the brief explicitly allows
"components (including any interactive widgets you create)". These were earned
on a piano and a game; what survives is the part that isn't about either.

- **Build the control as a real element** — `button`, `input`, `select`,
  `details` — rather than a `div` with a click handler. The artefact HD band is
  "holds up under use it wasn't designed for: the keyboard, a resize
  mid-interaction, a slow connection", and a `div` fails on the marker's first
  Tab press. axe now catches a good deal of this at build time, which it did not
  before.
- **The control the visitor acts on carries `data-core-interaction`; the region
  that changes carries `data-core-output`.** A convention, not a paragraph, so a
  test can hold the central line without knowing what the idea is — which is
  what lets the idea change without the tests needing to.
- **Handle a pointer with `pointerdown` and never also listen for `click`.** A
  *focused* button activates natively, so Space or Enter fires `click` on top of
  whatever the page already did: one press becomes two actions. It only happens
  after the control has been focused, which is why it survives a casual test.
  Measured in C5 with a `click` handler planted: with `preventDefault`, one
  action per press; without it, **three**. `preventDefault()` in a global key
  handler is load-bearing for correctness, not just for stopping the page
  scrolling.
- **Assert it by counting actions, not by watching for change** — "the state
  changed" is true of a doubled input too.
- **Synthetic events don't activate native controls.** An in-page
  `dispatchEvent(new KeyboardEvent("keydown", …))` has `isTrusted: false`, so the
  browser performs no default action. Use CDP's `Input.dispatchKeyEvent`, which
  is trusted.
- **Scale a drawing in units of the thing it belongs to.** Something fixed at
  30px is a fat stripe on a phone and a thread on a desktop.
- **Give a canvas its box from something that is not the canvas.** A `<canvas>`
  is a *replaced* element: with `height: 100%` inside a flex-sized parent the
  percentage does not resolve, so its layout height falls back to its `height`
  **attribute** — which the drawing code sets from the height it just measured.
  Nothing errors and no check goes red; it simply settles at the wrong size. Use
  `position: absolute; inset` against a `position: relative` parent.
- **A canvas is opaque to every DOM sensor**, and so is widget state. If a
  sensor suite can't see the main artefact, it isn't measuring the artefact —
  expose a probe on `window` and read it.
- **Never ease the timeline twice.** Easing a journey and then easing each step
  inside it compounds into a curve nobody chose. One layer owns the easing.
- **Watch the transition, don't just check the ends.** Every still frame of a
  broken transition looks like a plausible drawing.

## Never make content visibility depend on JavaScript

If content is hidden by default and revealed by script, the reveal is a race and
the failure is invisible. `IntersectionObserver` only reports a *change* in
intersection, so an element that crosses the viewport between two deliveries — a
flick-scroll, an End keypress, a jump to an anchor — is never reported and stays
at `opacity: 0` permanently, with no error anywhere. Measured: 4 of 19 elements
revealed at a 40ms scroll step, 19 of 19 at 120ms. A scroll handler lost the
same race.

Reveals go in CSS (`animation-timeline: view()`). If one ever needs to move back
into JavaScript, the hidden state must be gated behind something JavaScript has
already set, and the text must still be in the served HTML — assert that in
`spec/`.

**This matters more on a content site than it did on a game.** A game's rules
obviously depend on JavaScript; that's the brief. Here, *every word is the
deliverable*, and a marker reading for ten minutes on a slow connection who hits
a week whose body never faded in reads it as an empty page. Course content must
be in the served HTML, full stop.

## URLs and the base path

The site deploys to `https://<owner>.github.io/<repo>/`, so every internal URL
carries a `/comp4020-ass2-u7663394/` prefix.

**Nothing to configure**, and this is a change from previous weeks where the
base was set by hand. `astro.config.ts` derives it at config time from
`GITHUB_REPOSITORY` (in CI) or the `origin` remote (locally), via
`scripts/pages-base.ts`. Do not hardcode it; do not "fix" it.

**`trailingSlash: "always"`, so pages build as directories and every route URL
ends in a slash.** This too is a change: C5 ran `build.format: "file"`, and the
rule there was "author internal links relative". That rule does not transfer.
Here, markdown links and the theme's components are rewritten for the base
automatically. The config comment explains why the setting exists: otherwise
each click costs a 301 on GitHub Pages.

What still breaks: **a hand-written root-absolute link (`href="/sessions/"`) in
an `.astro` file** skips Astro's base handling, works on localhost, and 404s on
the live site. The build's link checker catches it (`all internal links respect
base`), which is the sensor the old harness had to reproduce by hand with
`linkinator` — it is now free and it runs every build.

The old rule's *phrasing* lesson survives, and it is the durable half: stated as
"no root-absolute URLs at all" it went red on Astro's own emitted stylesheet,
which already carries the base and is correct. **A check that argues with the
framework's correct output is a check that gets worked around instead of read.**
When a sensor goes red on something that is fine, the bug is usually in how the
rule is phrased — but fix the phrasing, never the threshold.

A deck is not a content-collection entry, so it has **no `related:` edges**.
Link it from its lecture page with a markdown link (`[Slides](/decks/week-01/)`),
which the build rewrites for the base path. A2's spec requires exactly this:
*at least one lecture carries a real deck, linked from its page.*

## The link-preview card

The image a shared link shows comes from `socialImage:` in `src/site-config.ts`,
pointing at a `/src/assets/...` path, with `socialImageAlt:` describing it. Both
are placeholders and both are tracked by `check:evidence`. The picture is
1200×630. A page with artwork of its own overrides the site-wide card with its
own `socialImage:` frontmatter key.

The theme turns whichever applies into `og:image` and **re-encodes it to JPEG**,
because scrapers still don't decode the formats the site serves to browsers.
Verified in the build log: `card.BIvH_RGg_1OFSzJ.jpeg`.

The C4 lesson still applies and is why this section survives: the card URL must
be absolute, because a relative one resolves against the page that names it — so
it is correct on the home page and wrong on the first page one directory down.
**Nothing in CI checks it.** The link check only crawls `href`s; a broken
`og:image` fails silently, on someone else's timeline, in an unfurl you never
see. The theme handles this now, so the rule here is narrower: don't
hand-override `socialImage:` with a relative path.

## Two things the toolchain will keep telling you

- **TypeScript drops `const` narrowing inside hoisted `function` declarations.**
  Thirty-one `'ctx' is possibly 'null'` errors came from guarding a handle at
  the top of a module and reading it inside `function paint()`. Arrow consts
  declared after the guard keep the narrowing. Don't reach for `!` — the guard
  is real, the compiler just can't see the ordering. Expect this with every
  nullable handle grabbed once and used in a loop.
- **Conform to the tool rather than loosening it.** `stylelint-config-standard`
  rejected BEM `block__element` names; the obvious move was to relax
  `selector-class-pattern`, and the rule was in the config for a reason that my
  naming preference is not. Renaming cost one command. **There is no linter in
  this repo**, but the rule transfers directly to the strict zod schemas: when
  `course-config.ts` rejects a 320-character description, shorten the
  description — do not widen the schema. Change a rule when it is *wrong about
  this codebase*, not when it is inconvenient.

## Layout rules that bit

- `repeat(auto-fit, minmax(26rem, 1fr))` **cannot shrink below 26rem**, so it
  overflowed a 390px phone. Always
  `repeat(auto-fit, minmax(min(<size>, 100%), 1fr))`. **Expect this on every
  grid on this site** — a twelve-week listing, an assessment grid, a people
  grid are all exactly this shape, and the components shipped in
  `src/components/` are all `*Grid.astro`.
- A `position: fixed` header takes no flow height, so the first section slides
  under it. Give the offset back in one place, in a single custom property
  (`--header-h`) rather than repeating it — two copies drift.
- **Format dates with an explicit `en-AU` locale.** A bare
  `toLocaleDateString()` renders differently on my machine and on the runner.
  **This is load-bearing here in a way it never was before**: this site is
  twelve dated weeks plus assessment due dates, so a locale bug is not a cosmetic
  slip, it is the site disagreeing with itself. `src/lib/dates.ts` exists;
  format through it.
- Site-wide styling goes in `src/layouts/PageLayout.astro` — a
  `<style is:global>` block or a stylesheet it imports — on top of the brand
  tokens. Restate as little of the brand as possible: a colour restated is how
  two things start to disagree. The deck theme (`src/decks/theme.css`) derives
  from the same tokens, so a deck already matches the site.

## Images and assets: served from this repo, never hotlinked

Downscale into `src/assets/` and serve from here. A third-party CDN can block by
referrer or simply move, and an asset that 404s on the deployed URL counts as
broken even though it loaded locally. Assert no `<img>` has an `http(s)` src.

Note what the platform now does for me: the theme optimises images at build time
(`imageFormat: "avif"`), so a large source image is fine — the build emitted
`hero-home` at 302kB down to 20kB. Hand-optimising before importing is wasted
work and loses the responsive variants.
