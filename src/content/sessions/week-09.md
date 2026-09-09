---
title: "An editorial dashboard with one request boundary"
description: "Where does an expired session get handled once?"
week: 9
date: "2027-04-23"
teachers: ["guochen-wang"]
spec: ["Expire the fixture session while two lists load. Check that the app clears stale identity and offers a coherent recovery path. Delete the last item on a paginated page and check the resulting page index.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-09"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-09/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Build channel CRUD and article list, filter, pagination and edit screens with Element Plus. Use Sass for a shared spacing rule.
2. Add the account store, request wrapper, token injection, shared error handling and Router 4 guards. Trace one 401 from response to UI.
3. Implement profile, avatar preview and password reset as fixture-backed flows. Exercise empty lists, cancellation and failed saves before adding polish.

## Review with another developer

Expire the fixture session while two lists load. Check that the app clears stale identity and offers a coherent recovery path. Delete the last item on a paginated page and check the resulting page index.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Vuex mutations disappear from the Pinia API; ownership does not. Explain which module responsibility became which store, and why a form draft stayed local.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 2](/assessments/assignment-2/), not a separate mark.
