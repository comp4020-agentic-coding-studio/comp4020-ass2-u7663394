---
title: "Assignment 3: Typed Consultation App"
description: "Transfer the architecture to a fictional patient consultation service and leave evidence that another developer can safely change it."
week: 12
release: "2027-04-26"
due: "2027-05-28T23:59:00+10:00"
weight: 35
requires: ["typescript", "typed-vue", "vue3", "vite", "pinia", "router4", "axios", "request-architecture", "vueuse", "vant4", "eslint", "vitest", "happy-dom", "mock-api", "rbac", "svg-sprites"]
stack: ["Vue 3 + TypeScript", "Vite", "Pinia", "Vue Router 4", "Vant 4", "Axios", "VueUse", "Vitest + happy-dom", "ESLint"]
marking: {"mode": "weighted", "criteria": [{"name": "Core consultation workflow", "weight": 30}, {"name": "TypeScript quality", "weight": 20}, {"name": "Vue application architecture", "weight": 20}, {"name": "State and data handling", "weight": 10}, {"name": "Testing", "weight": 10}, {"name": "Mobile UX and accessibility", "weight": 10}]}
deliverables: ["Deployed frontend URL", "Source repository and lockfile", "README with setup, fixtures and commands", "Evidence of the acceptance journey", "Attribution and assistance record"]
spec: ["Submit twice during a delayed consultation request, fail a payment, deny a permission and return to a completed consultation. Demonstrate that each action leaves one valid, explainable state.", "All required flows work at 390×844 and 1920×1080, including keyboard use.", "The repository rebuilds from its lockfile and documents the local fixture setup.", "Assistance and reused code are attributed, and the author can explain the submitted architecture."]
related: ["lectures/week-12"]
---

## The brief

> A new team inherits your frontend patterns for a consultation service. A contradictory state now matters more than a misplaced article. Build the patient-side simulation and make its assumptions visible to the next maintainer.

## Consultation journey

Implement patient login, route guards and persisted user state. The fast-consultation journey includes department selection, illness description, doctor selection and consultation creation. Provide doctor list and detail views. Use invented people and non-clinical placeholder copy; this is an interface exercise, not medical advice.

## Room, profile and content

Show message and action components, consultation status and evaluation. Provide patient profiles, consultation records and details, fictional health-article entries and notifications. Simulated delayed messages are sufficient; no WebSocket server is required.

## Orders and payment

Implement medicine selection, simulated payment, payment result, order details and logistics states. No real payment gateway, transaction, prescription or patient data. Failed payment must not create a success receipt; a completed consultation must not silently return to an active state.

## Architecture that can be checked

Use a typed Axios wrapper with token injection, business-code handling and a 401 recovery path. Type props, emits, Pinia state and responses; validate external fixture data at the boundary. Configure Vant auto import, a named SVG icon sprite and a small justified VueUse use. Support deterministic mock scenarios and a permission-based interface. Do not hide missing models behind any or unchecked assertions.

## Evidence under failure

Use Vitest with happy-dom for unit and component behaviour tests. Include one allowed and one forbidden state transition, failed-request recovery and duplicate-submit prevention. Run type checking and ESLint. Add a real-browser keyboard and responsive review because happy-dom has no layout engine. ECharts is optional enrichment and adds no feature-count credit.

## What you submit

Submit the deployed URL and repository URL through the course submission record described in [Policies](/policies/). Tag the submitted source `submission-a3` and include a lockfile. Your README must give installation, development, build and verification commands, the fixture accounts, and a short acceptance walkthrough. Include screenshots at both review sizes and an attribution / assistance record.

Provide the state model, fixture scenario list, test commands and a handover note documenting a change another developer tried. Explain what the types catch, what runtime validation catches and what still requires a person in a browser.

## How quality is judged

A passing implementation makes the named journeys possible. A strong implementation also recovers from cancellation, delay and failure without contradictory state. The highest band makes the ownership and tradeoffs easy for another developer to inspect and change; more screens do not compensate for a broken core journey. Each criterion below is assessed against that distinction.

## Before you hand over

Submit twice during a delayed consultation request, fail a payment, deny a permission and return to a completed consultation. Demonstrate that each action leaves one valid, explainable state.

Use the [fixture contract and tool versions](/resources/) and read the [course policies](/policies/) for individual work, assistance, extensions and feedback. No backend implementation is assessed.
