---
title: "Production Vue"
description: "The happy path works. A double click creates two consultations, a slow response overwrites a newer screen, and a hidden action can still be called directly. The handover is where those assumptions become visible."
flow: ["State transition", "Adverse scenario", "Evidence for the next maintainer"]
week: 12
date: "2027-05-10"
phase: "Vue 3 + TypeScript"
question: "Could another developer safely change this tomorrow?"
buildOutcome: "A consultation service handover"
teaches: ["vitest", "happy-dom", "mock-api", "rbac", "svg-sprites"]
teachers: ["guochen-wang"]
slides: "/decks/week-12/"
related: ["sessions/week-12", "assessments/assignment-3", "lectures/week-11"]
---

## The question

> Could another developer safely change this tomorrow?

## Why this week exists

Use Vitest for pure state transitions and Vue Test Utils with happy-dom for component behaviour. A DOM simulator cannot prove layout or real browser focus behaviour: keep a browser walkthrough. Build deterministic mock scenarios for slow, empty, unauthorised and failed responses. Permission-based UI describes available actions; server authorisation is a separate boundary, simulated explicitly here. Model consultation-room messages and order progress as state transitions. An SVG sprite improves reusable icons only if controls retain accessible names. ECharts is an optional investigation with a text equivalent, not a substitute for tested core behaviour.

## Core concepts

- Vitest unit tests and component tests
- happy-dom and Vue Test Utils
- Deterministic mock APIs and seeded data
- RBAC, permission UI and authorisation boundaries
- Consultation messages, notifications and order states
- SVG sprites; optional ECharts
- Request, router, store, types and handover review

## Read the boundary

```ts
import { expect, test } from 'vitest'

test('a completed consultation cannot reopen', () => {
  const state = { status: 'completed' }
  expect(() => transition(state, 'start'))
    .toThrow('Invalid transition')
})
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A consultation service handover

1. Write a pure consultation transition function, then test one allowed and one forbidden transition. Mount a form to test validation and duplicate-submit protection.
2. Add named mock scenarios for 401, empty doctor lists, delayed messages and failed payment. All payments are simulated and all health content is fictional.
3. Exchange repositories. A partner follows the README from a clean checkout, changes one rule, runs the tests and reports the first undocumented assumption.

## Try to break it

Submit twice while a request is pending, then force failure and retry. Confirm one consultation record, an honest status and no phantom receipt. Change a permission in the fixture and retry the forbidden action.

## Architecture and migration lens

The semester began with a saved flag and ends with state transitions someone else can verify. The common skill is choosing where truth lives and testing the boundary that changes it.

## Where this leads

Teaching is complete. Use the remaining capstone time to fix the handover findings and submit the typed service by the published deadline.

[Open the practical studio](/sessions/week-12/) · [Read the assessment brief](/assessments/assignment-3/)

## Reading

[Official documentation for this week](https://vitest.dev/guide/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-12/)
