---
title: "TypeScript for Vue Developers"
description: "The new service can hold paid: true and paymentFailed: true at once. Both are valid booleans. Neither explains what the interface should show. A larger domain needs a model with fewer contradictory states."
flow: ["Unknown input", "Runtime check", "Typed domain state"]
week: 10
date: "2027-04-26"
phase: "Vue 3 + TypeScript"
question: "Which impossible state does this JavaScript object allow?"
buildOutcome: "A typed consultation state model"
teaches: ["typescript"]
teachers: ["guochen-wang"]
slides: "/decks/week-10/"
related: ["sessions/week-10", "assessments/assignment-3", "lectures/week-09"]
---

## The question

> Which impossible state does this JavaScript object allow?

## Why this week exists

Use literal unions to describe mutually exclusive statuses, interfaces for records and optional properties only when absence is meaningful. Practice annotations, arrays, aliases, function parameters, return values and inference. Narrow a union before reading member-specific fields. Generics preserve a relationship between inputs and outputs; a constraint says what a generic function actually needs. any turns checking off, and an assertion does not validate external data. Accept network input as unknown until a runtime boundary checks it.

## Core concepts

- Annotations, inference, arrays and object types
- Union / literal types and narrowing
- Function types, optional parameters and void
- Interfaces, optional fields and inheritance
- Generic functions, interfaces, aliases and constraints
- unknown, any and type assertions

## Read the boundary

```ts
type Payment =
  | { status: 'pending' }
  | { status: 'paid'; receiptId: string }
  | { status: 'failed'; reason: string }

function message(payment: Payment): string {
  if (payment.status === 'paid')
    return payment.receiptId
  return payment.status
}
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A typed consultation state model

1. Translate a JavaScript consultation record into interfaces and literal unions. Mark which fields are optional and justify each one.
2. Write a generic result type and a constrained lookup helper. Replace an any value with unknown and narrow it.
3. Prepare the capstone model and configure ESLint with the Vue / TypeScript tooling. Keep Assignment 2 JavaScript; submit its architecture evidence after this studio.

## Try to break it

Try constructing a paid payment without a receipt. The compiler should reject it. Then load malformed JSON: explain why the same type cannot protect that boundary on its own.

## Architecture and migration lens

Keep the week 9 request architecture; add an explicit domain contract. Types are a new way to expose assumptions, not a reason to rebuild every component.

## Where this leads

Assignment 3 opens. Model first; typed component boundaries follow in week 11.

[Open the practical studio](/sessions/week-10/) · [Read the assessment brief](/assessments/assignment-3/)

## Reading

[Official documentation for this week](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-10/)
