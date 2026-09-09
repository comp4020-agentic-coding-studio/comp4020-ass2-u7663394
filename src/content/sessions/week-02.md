---
title: "An editable interview shortlist"
description: "Why did editing one article change the wrong row?"
week: 2
date: "2027-03-05"
teachers: ["guochen-wang"]
spec: ["Start editing the second row, filter out the first, then save. The same article ID must change. Repeat using only Tab, Space and Enter.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-02"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-02/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Create three interview entries with stable IDs and a topic select. Add a checkbox shortlist.
2. Implement edit, cancel and submit. Cancel must restore the previously saved value without altering another row.
3. Deliberately use the index as a key, reproduce the editing fault, then restore stable IDs and write down the difference.

## Review with another developer

Start editing the second row, filter out the first, then save. The same article ID must change. Repeat using only Tab, Space and Enter.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Stable identity survives a framework upgrade. A green screen with the wrong record underneath is still a failed migration.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
