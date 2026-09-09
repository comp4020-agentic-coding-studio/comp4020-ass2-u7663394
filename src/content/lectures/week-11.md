---
title: "Vue 3 with TypeScript"
description: "The department selector emits a display label while the request layer expects an ID. JavaScript accepts the handoff; the next screen loses its selection. Type the seam where two components disagree."
flow: ["Typed form event", "Consultation store", "Validated request boundary"]
week: 11
date: "2027-05-03"
phase: "Vue 3 + TypeScript"
question: "Can the component contract reject an invalid consultation?"
buildOutcome: "A typed consultation form workflow"
teaches: ["typed-vue", "vueuse", "vant4", "eslint"]
teachers: ["mara-chen"]
slides: "/decks/week-11/"
related: ["sessions/week-11", "assessments/assignment-3", "lectures/week-10"]
---

## The question

> Can the component contract reject an invalid consultation?

## Why this week exists

Use script setup with lang="ts", typed props and typed emits. Let inference do useful work, and annotate domain boundaries such as nullable records and event payloads. A template ref may be null before mounting or after conditional removal; guard it. Use optional chaining only where absence is expected. Type Axios responses, then remember that its generic is a compile-time promise rather than runtime validation. Keep reusable interfaces near the domain; reserve .d.ts declarations for ambient or module typing. Introduce VueUse for a bounded behaviour rather than importing a collection of unexplained helpers.

## Core concepts

- Typed ref, reactive and computed
- Typed handlers, props and emits
- Nullable template refs and optional chaining
- Typed Pinia stores and Axios responses
- Shared interfaces and .d.ts declarations
- VueUse and Vant for Vue 3
- ESLint configuration and type-aware review

## Read the boundary

```ts
import { ref } from 'vue'

interface ConsultationDraft {
  departmentId: string
  description: string
}
const emit = defineEmits<{
  submit: [draft: ConsultationDraft]
}>()
const description = ref('')
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A typed consultation form workflow

1. Build department selection, illness description and doctor selection with typed props and emits. Use only invented patient data.
2. Put the consultation draft in a typed Pinia store and model the request / response boundary. Add Vant auto-import configuration and a small VueUse enhancement.
3. Review every assertion, any and optional field. Remove shortcuts that conceal a missing domain decision, then run typecheck and ESLint.

## Try to break it

Change the emit payload from departmentId to departmentName. Type checking must catch the caller mismatch. Unmount the input before focusing it; the null guard must prevent a crash.

## Architecture and migration lens

Vue 2 prop validators checked broad runtime shapes. Typed props now check callers at development time. Neither replaces validation of user input or untrusted responses.

## Where this leads

Week 12 tests the workflow under delay, failure and a new maintainer’s questions.

[Open the practical studio](/sessions/week-11/) · [Read the assessment brief](/assessments/assignment-3/)

## Reading

[Official documentation for this week](https://vuejs.org/guide/typescript/composition-api.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-11/)
