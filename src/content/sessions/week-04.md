---
title: "A componentised article reader"
description: "Which component is allowed to change this article?"
week: 4
date: "2027-03-19"
teachers: ["mara-chen"]
spec: ["Render the same card twice. Editing one local draft must not change the other. Make the parent log every committed change; no update may bypass that log.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-04"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-04/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Draw a tree with ReaderPage, SearchField, ArticleList and ArticleCard. Mark each state owner before extracting files.
2. Move the week 3 feed into SFCs. Declare prop contracts and emit article IDs from child actions.
3. Ask a partner to reuse ArticleCard without reading its implementation. Fix any dependency they had to discover by accident.

## Review with another developer

Render the same card twice. Editing one local draft must not change the other. Make the parent log every committed change; no update may bypass that log.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

A useful component boundary is an ownership boundary. Vue 3 changes declaration syntax, but props down and intent up still explain the application.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
