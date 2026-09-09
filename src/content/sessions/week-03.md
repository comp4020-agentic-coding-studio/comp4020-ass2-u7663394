---
title: "A searchable article feed with honest states"
description: "Should this value be stored, computed or watched?"
week: 3
date: "2027-03-12"
teachers: ["guochen-wang"]
spec: ["Delete an article while a filter is active. Both list and count must update. Throttle a request, change the query twice and explain which response should win.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-03"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-03/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Load a local JSON article fixture with fetch and show loading, empty, failure and successful results separately.
2. Derive filtered articles and their count; use a watcher only for an actual side effect. Add a request sequence ID to ignore stale results.
3. Draw the lifecycle timeline. Focus the search field after mounting and remove any timers when leaving the page.

## Review with another developer

Delete an article while a filter is active. Both list and count must update. Throttle a request, change the query twice and explain which response should win.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Derived state reduces the number of facts that can disagree. That becomes more valuable when a store is shared across routes.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
