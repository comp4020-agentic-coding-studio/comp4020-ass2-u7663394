---
title: "A consultation service handover"
description: "Could another developer safely change this tomorrow?"
week: 12
date: "2027-05-14"
teachers: ["guochen-wang"]
spec: ["Submit twice while a request is pending, then force failure and retry. Confirm one consultation record, an honest status and no phantom receipt. Change a permission in the fixture and retry the forbidden action.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-12"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-12/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Write a pure consultation transition function, then test one allowed and one forbidden transition. Mount a form to test validation and duplicate-submit protection.
2. Add named mock scenarios for 401, empty doctor lists, delayed messages and failed payment. All payments are simulated and all health content is fictional.
3. Exchange repositories. A partner follows the README from a clean checkout, changes one rule, runs the tests and reports the first undocumented assumption.

## Review with another developer

Submit twice while a request is pending, then force failure and retry. Confirm one consultation record, an honest status and no phantom receipt. Change a permission in the fixture and retry the forbidden action.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

The semester began with a saved flag and ends with state transitions someone else can verify. The common skill is choosing where truth lives and testing the boundary that changes it.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 3](/assessments/assignment-3/), not a separate mark.
