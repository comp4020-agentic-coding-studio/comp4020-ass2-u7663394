---
title: "Moving to Vue 3"
description: "A rewrite can remove old bugs and quietly introduce new ones. The team wants Composition API; readers still want their saved articles. Make an acceptance contract before comparing syntax."
week: 8
date: "2027-04-12"
phase: "Vue 3"
question: "What must stay the same when the implementation changes?"
buildOutcome: "A behaviour-preserving Vue 3 migration"
teaches: ["vue3", "composition-api", "vite"]
teachers: ["mara-chen"]
slides: "/decks/week-08/"
related: ["sessions/week-08", "assessments/assignment-2", "lectures/week-07"]
---

## The question

> What must stay the same when the implementation changes?

## Why this week exists

Create a Vue 3 JavaScript project with create-vue and inspect Vite, main.js and App.vue. setup and script setup group logic by concern rather than by option name. ref wraps a value, reactive creates a reactive proxy, and computed still describes derived state. Watch a getter when a specific property matters; avoid deep watchers as a substitute for understanding dependencies. Register lifecycle functions during setup. Vue 3 still supports Options API: the migration is a design choice, not a claim that the old API stopped existing.

## Core concepts

- create-vue, Vite and startup files
- setup and script setup
- ref, reactive and computed
- watch sources, immediate and deep options
- onMounted and onUnmounted
- Vue 2 / Vue 3 contract comparison

## Read the boundary

```js
import { ref, computed } from 'vue'

const query = ref('')
const articles = ref([])
const visible = computed(() =>
  articles.value.filter(article =>
    article.title.includes(query.value)
  )
)
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A behaviour-preserving Vue 3 migration

1. Write a three-behaviour contract for the week 5 SearchField and reader list. Save a working Vue 2 reference.
2. Rebuild that slice in Vue 3 JavaScript. Keep the API fixture and article IDs unchanged.
3. Review the migration ledger: unchanged behaviour, changed API, removed dependency. Explain one reason to keep Options API in an incremental migration.

## Try to break it

Run the same filter, save and cancel steps in both implementations. A shorter component is not a successful migration if cancel now saves the draft.

## Architecture and migration lens

Compare Vue 2 data/computed/methods with refs/computed/functions. Replace value/input with modelValue/update:modelValue for default component v-model. Replace .sync with a named v-model; retire the instance event bus.

## Where this leads

Assignment 2 opens: the articles now need an editorial desk. Its shared boundaries are built next week.

[Open the practical studio](/sessions/week-08/) · [Read the assessment brief](/assessments/assignment-2/)

## Reading

[Official documentation for this week](https://v3-migration.vuejs.org/breaking-changes/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-08/)
