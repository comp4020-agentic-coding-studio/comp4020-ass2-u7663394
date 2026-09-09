---
title: "A behaviour-preserving Vue 3 migration"
description: "What must stay the same when the implementation changes?"
week: 8
date: "2027-04-16"
teachers: ["guochen-wang"]
spec: ["Run the same filter, save and cancel steps in both implementations. A shorter component is not a successful migration if cancel now saves the draft.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-08"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-08/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Write a three-behaviour contract for the week 5 SearchField and reader list. Save a working Vue 2 reference.
2. Rebuild that slice in Vue 3 JavaScript. Keep the API fixture and article IDs unchanged.
3. Review the migration ledger: unchanged behaviour, changed API, removed dependency. Explain one reason to keep Options API in an incremental migration.

## Review with another developer

Run the same filter, save and cancel steps in both implementations. A shorter component is not a successful migration if cancel now saves the draft.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Compare Vue 2 data/computed/methods with refs/computed/functions. Replace value/input with modelValue/update:modelValue for default component v-model. Replace .sync with a named v-model; retire the instance event bus.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 2](/assessments/assignment-2/), not a separate mark.
