---
title: "Assignment 1: Vue 2 Mobile Content App"
description: "Make an inherited interview article reader dependable across routes, requests and shared account state."
week: 7
release: "2027-03-08"
due: "2027-04-11T23:59:00+10:00"
weight: 30
requires: ["vue2", "forms", "derived-state", "components", "component-interfaces", "less", "router3", "axios", "vant2", "authentication", "vuex"]
stack: ["Vue 2", "Vue Router 3", "Vuex 3", "Vant 2", "Axios", "Less"]
marking: {"mode": "weighted", "criteria": [{"name": "Core functionality", "weight": 40}, {"name": "Vue component structure", "weight": 20}, {"name": "Routing and application state", "weight": 15}, {"name": "Mobile UX", "weight": 15}, {"name": "Code quality and documentation", "weight": 10}]}
deliverables: ["Deployed frontend URL", "Source repository and lockfile", "README with setup, fixtures and commands", "Evidence of the acceptance journey", "Attribution and assistance record"]
spec: ["Open an article URL directly; save it; switch routes; log out; sign in as a different fixture account. Then fail the next feed request and retry. No stale collection, duplicate row or false success should remain.", "All required flows work at 390×844 and 1920×1080, including keyboard use.", "The repository rebuilds from its lockfile and documents the local fixture setup.", "Assistance and reused code are attributed, and the author can explain the submitted architecture."]
related: ["lectures/week-07"]
---

## The brief

> A reader has five minutes before an interview. They need to find an experience article, save it, and return to it later. Build the mobile reader that makes those steps predictable even when a request fails.

## Account boundary

Implement registration, login, a simulated token, protected account routes and logout. Keep account identity in Vuex. Logging out must clear user-specific state. Use fixture accounts; no real credentials.

## Article experience

Provide recommended and latest feeds, article detail routes, likes and collections. Infinite scrolling must stop at the end, avoid duplicate IDs and offer retry on failure. The personal area lists liked and collected articles and shows the user profile.

## Mobile interface

Use Vant 2 controls and Less. Start from a 375px mobile design baseline, then adapt with relative units and fluid widths; 375px is not a fixed canvas. Verify 390×844 and 1920×1080. A keyboard user must reach, activate and understand every control.

## What you submit

Submit the deployed URL and repository URL through the course submission record described in [Policies](/policies/). Tag the submitted source `submission-a1` and include a lockfile. Your README must give installation, development, build and verification commands, the fixture accounts, and a short acceptance walkthrough. Include screenshots at both review sizes and an attribution / assistance record.

Explain why one state value stayed local and another moved into Vuex. Include a trace from one user event through action, request, mutation and rendered result.

## How quality is judged

A passing implementation makes the named journeys possible. A strong implementation also recovers from cancellation, delay and failure without contradictory state. The highest band makes the ownership and tradeoffs easy for another developer to inspect and change; more screens do not compensate for a broken core journey. Each criterion below is assessed against that distinction.

## Before you hand over

Open an article URL directly; save it; switch routes; log out; sign in as a different fixture account. Then fail the next feed request and retry. No stale collection, duplicate row or false success should remain.

Use the [fixture contract and tool versions](/resources/) and read the [course policies](/policies/) for individual work, assistance, extensions and feedback. No backend implementation is assessed.
