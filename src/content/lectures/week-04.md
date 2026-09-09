---
title: "Components and Data Flow"
description: "Search, profile, article cards and save handlers share one large file. Every change can reach every variable. Extracting files alone will not fix that: a child that mutates its prop preserves the same hidden coupling."
flow: ["ReaderPage owns articles", "ArticleCard receives props", "save(id) returns to owner"]
week: 4
date: "2027-03-15"
phase: "Vue 2"
question: "Which component is allowed to change this article?"
buildOutcome: "A componentised article reader"
teaches: ["components"]
teachers: ["mara-chen"]
slides: "/decks/week-04/"
related: ["sessions/week-04", "assessments/assignment-1", "lectures/week-03"]
---

## The question

> Which component is allowed to change this article?

## Why this week exists

Trace main.js into the root single-file component, then into locally registered children. A component owns its local draft and emits an intent; the parent owns the committed article. Use data as a function to isolate instances. Compare basic and full prop validation, required values and defaults. Scoped styles constrain selectors, not the meaning of a component. Global registration is useful for truly ubiquitous primitives, but local registration makes dependencies visible.

## Core concepts

- Project startup and root component
- Single File Components and local / global registration
- data as a function and scoped styles
- Props, defaults and validation
- One-way data flow and child events

## Read the boundary

```js
// ArticleCard.vue: Vue 2 options
export default {
  props: {
    article: { type: Object, required: true }
  },
  methods: {
    requestSave() {
      this.$emit('save', this.article.id)
    }
  }
}
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A componentised article reader

1. Draw a tree with ReaderPage, SearchField, ArticleList and ArticleCard. Mark each state owner before extracting files.
2. Move the week 3 feed into SFCs. Declare prop contracts and emit article IDs from child actions.
3. Ask a partner to reuse ArticleCard without reading its implementation. Fix any dependency they had to discover by accident.

## Try to break it

Render the same card twice. Editing one local draft must not change the other. Make the parent log every committed change; no update may bypass that log.

## Architecture and migration lens

A useful component boundary is an ownership boundary. Vue 3 changes declaration syntax, but props down and intent up still explain the application.

## Where this leads

Next week a second caller will use those components. Their public interfaces must survive that reuse.

[Open the practical studio](/sessions/week-04/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v2.vuejs.org/v2/guide/components.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-04/)
