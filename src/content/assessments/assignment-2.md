---
title: "Assignment 2: Vue 3 Admin Dashboard"
description: "Move from a reader to its editorial desk, with one place for identity, request policy and reusable management behaviour."
week: 10
release: "2027-04-12"
due: "2027-05-02T23:59:00+10:00"
weight: 35
requires: ["vue3", "composition-api", "vite", "pinia", "router4", "element-plus", "sass", "axios", "request-architecture"]
stack: ["Vue 3 JavaScript", "Vite", "Vue Router 4", "Pinia", "Element Plus", "Axios", "Sass"]
marking: {"mode": "weighted", "criteria": [{"name": "Core functionality", "weight": 35}, {"name": "Pinia and application state", "weight": 20}, {"name": "Router and request architecture", "weight": 20}, {"name": "Admin UX and component design", "weight": 15}, {"name": "Code quality", "weight": 10}]}
deliverables: ["Deployed frontend URL", "Source repository and lockfile", "README with setup, fixtures and commands", "Evidence of the acceptance journey", "Attribution and assistance record"]
spec: ["Filter to a last page, delete its final article, then expire the session during two requests. The page index must recover, stale identity must disappear and the app must present a coherent route back to login.", "All required flows work at 390×844 and 1920×1080, including keyboard use.", "The repository rebuilds from its lockfile and documents the local fixture setup.", "Assistance and reused code are attributed, and the author can explain the submitted architecture."]
related: ["lectures/week-09"]
---

## The brief

> The reader now has editors. Build the management side of the same interview publication, then show where the Vue 2 architecture has changed and where its behaviour contract has survived.

## Editorial operations

List, create, edit and delete article channels. List articles with filters and pagination; create, edit and delete articles. Confirm destructive actions, preserve an unsaved draft after a failed request and distinguish an empty filter result from an error.

## Account operations

Implement registration, login, token-based route protection and persisted user state through Pinia. Support profile editing, avatar selection with a preview, and a fixture-backed password reset flow. Logout must clear persisted identity.

## Shared request policy

Use one configured Axios instance with request and response interceptors, token injection and shared error handling. Handle an expired session consistently across routes. Use Element Plus for management controls and Sass for the interface. A client-side guard is not server authorisation.

## The migration contract

Submit JavaScript. TypeScript is introduced while this assignment is being completed, but is neither required nor rewarded here. Compare one reader behaviour across Vue 2 and Vue 3, and explain a concrete improvement in ownership or error handling.

## What you submit

Submit the deployed URL and repository URL through the course submission record described in [Policies](/policies/). Tag the submitted source `submission-a2` and include a lockfile. Your README must give installation, development, build and verification commands, the fixture accounts, and a short acceptance walkthrough. Include screenshots at both review sizes and an attribution / assistance record.

Include an ownership diagram showing views, Pinia, router and request wrapper. Name a responsibility that moved from Vuex to Pinia and one value deliberately kept out of a global store.

## How quality is judged

A passing implementation makes the named journeys possible. A strong implementation also recovers from cancellation, delay and failure without contradictory state. The highest band makes the ownership and tradeoffs easy for another developer to inspect and change; more screens do not compensate for a broken core journey. Each criterion below is assessed against that distinction.

## Before you hand over

Filter to a last page, delete its final article, then expire the session during two requests. The page index must recover, stale identity must disappear and the app must present a coherent route back to login.

Use the [fixture contract and tool versions](/resources/) and read the [course policies](/policies/) for individual work, assistance, extensions and feedback. No backend implementation is assessed.
