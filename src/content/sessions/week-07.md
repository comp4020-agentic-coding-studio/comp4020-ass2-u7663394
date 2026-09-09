---
title: "One identity and collection store"
description: "What should happen everywhere when the reader logs out?"
week: 7
date: "2027-04-09"
teachers: ["guochen-wang"]
spec: ["Log in as one fixture user, save an article, log out, then log in as a different user. The second user must not inherit the first collection.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-07"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-07/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Move identity and collections into separate Vuex modules. Keep temporary input drafts inside components.
2. Trace one save action from button to request to mutation to both affected views. Capture the trace in DevTools.
3. Run the full reader acceptance journey and hand over the repository with a setup guide and one known limitation.

## Review with another developer

Log in as one fixture user, save an article, log out, then log in as a different user. The second user must not inherit the first collection.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Record what Vuex buys: one mutation path and observable shared state. In week 9 compare that responsibility with Pinia, not just the number of lines.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
