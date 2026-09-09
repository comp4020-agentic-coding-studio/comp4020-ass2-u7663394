---
title: "A reactive interview profile"
description: "Who changes the interface when the state changes?"
week: 1
date: "2027-02-26"
teachers: ["guochen-wang"]
spec: ["Click Save, then change saved in DevTools. Both routes must produce the same label. If they disagree, find the DOM write that bypasses state.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-01"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-01/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Sketch two states of an interview profile: saved and unsaved. Name the smallest data model that distinguishes them.
2. Build the profile with a labelled button, a bound image alt and a conditional status message. No manual DOM text updates.
3. Compare v-if and v-show by inspecting the removed or hidden element. Record when retaining local input state matters.

## Review with another developer

Click Save, then change saved in DevTools. Both routes must produce the same label. If they disagree, find the DOM write that bypasses state.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Keep the observable behaviour; replace the mechanism. This is the same bargain you will make during the Vue 3 migration.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
