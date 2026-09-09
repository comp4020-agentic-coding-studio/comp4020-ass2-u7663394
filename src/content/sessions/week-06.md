---
title: "A routed mobile article browser"
description: "Can a reader open this article directly, then recover from a failed request?"
week: 6
date: "2027-04-02"
teachers: ["guochen-wang"]
spec: ["Paste an article URL into a fresh tab. Try a missing ID, an expired simulated token and a failed next-page request. Retrying must not duplicate articles.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-06"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-06/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Configure Router 3 and build feed, article, account and not-found views. Use the shared fixture contract on the resources page.
2. Wrap Axios, model a fake login token and protect account routes. Add paginated loading with deduplication by article ID.
3. Integrate Vant 2 List with a loading flag reset in finally. Start with a 375px design and check 390px and desktop; use flexible widths and rem units rather than fixed pixel scaling.

## Review with another developer

Paste an article URL into a fresh tab. Try a missing ID, an expired simulated token and a failed next-page request. Retrying must not duplicate articles.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

The request boundary should survive the migration. Components ask for an article; they should not each know where headers and tokens live.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
