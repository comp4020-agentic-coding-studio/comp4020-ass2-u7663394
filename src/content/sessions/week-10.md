---
title: "A typed consultation state model"
description: "Which impossible state does this JavaScript object allow?"
week: 10
date: "2027-04-30"
teachers: ["mara-chen"]
spec: ["Try constructing a paid payment without a receipt. The compiler should reject it. Then load malformed JSON: explain why the same type cannot protect that boundary on its own.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-10"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-10/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Translate a JavaScript consultation record into interfaces and literal unions. Mark which fields are optional and justify each one.
2. Write a generic result type and a constrained lookup helper. Replace an any value with unknown and narrow it.
3. Prepare the capstone model and configure ESLint with the Vue / TypeScript tooling. Keep Assignment 2 JavaScript; submit its architecture evidence after this studio.

## Review with another developer

Try constructing a paid payment without a receipt. The compiler should reject it. Then load malformed JSON: explain why the same type cannot protect that boundary on its own.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Keep the week 9 request architecture; add an explicit domain contract. Types are a new way to expose assumptions, not a reason to rebuild every component.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 3](/assessments/assignment-3/), not a separate mark.
