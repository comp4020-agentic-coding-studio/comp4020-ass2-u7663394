---
title: "A typed consultation form workflow"
description: "Can the component contract reject an invalid consultation?"
week: 11
date: "2027-05-07"
teachers: ["mara-chen"]
spec: ["Change the emit payload from departmentId to departmentName. Type checking must catch the caller mismatch. Unmount the input before focusing it; the null guard must prevent a crash.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-11"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-11/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Build department selection, illness description and doctor selection with typed props and emits. Use only invented patient data.
2. Put the consultation draft in a typed Pinia store and model the request / response boundary. Add Vant auto-import configuration and a small VueUse enhancement.
3. Review every assertion, any and optional field. Remove shortcuts that conceal a missing domain decision, then run typecheck and ESLint.

## Review with another developer

Change the emit payload from departmentId to departmentName. Type checking must catch the caller mismatch. Unmount the input before focusing it; the null guard must prevent a crash.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Vue 2 prop validators checked broad runtime shapes. Typed props now check callers at development time. Neither replaces validation of user input or untrusted responses.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 3](/assessments/assignment-3/), not a separate mark.
