---
title: "A reusable reader UI kit"
description: "Can a second caller use this component without opening its source?"
week: 5
date: "2027-03-26"
teachers: ["guochen-wang"]
spec: ["Open the modal with the keyboard, close with Escape, and check that focus returns to the trigger. Change the loading flag while a request is pending; the status must remain perceivable.", "Bring a runnable build and a short note identifying the owner of the state you changed."]
related: ["lectures/week-05"]
---

## Before the studio

Read [this week’s lecture](/lectures/week-05/) and inspect its code excerpt. Bring the previous build and a working browser console. For week 1, bring a small HTML page and confirm Node and your package manager run.

## At the bench

Allow two hours: 15 minutes to reproduce the problem, 65 minutes to build, 25 minutes to exchange and challenge the result, and 15 minutes to record the handover.

1. Build SearchField and a slot-based panel with useful fallback content. Demonstrate each with two different callers.
2. Implement a focus-managed modal and a v-loading directive that updates aria-busy; keep a visible status in the component.
3. Use one Less spacing variable, inspect the compiled CSS and document the value / input contract. Compare .sync with an explicit update event.

## Review with another developer

Open the modal with the keyboard, close with Escape, and check that focus returns to the trigger. Change the loading flag while a request is pending; the status must remain perceivable.

Ask your reviewer to describe the owner and path of one state change before explaining your design. If they infer the wrong owner, change the interface or its documentation.

## Take forward

Legacy-only: .sync and instance event-bus APIs do not carry unchanged into Vue 3. Enduring: explicit events, slots and state ownership. Make a migration ledger with those two columns.

Keep the working build, the reproduction steps and the smallest change that fixed the failure. This studio is formative; it contributes evidence and practice for [Assignment 1](/assessments/assignment-1/), not a separate mark.
