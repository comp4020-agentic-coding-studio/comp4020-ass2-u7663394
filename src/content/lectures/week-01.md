---
title: "Thinking in Vue"
description: "The inherited careers site changes button labels with querySelector. Its saved flag says one thing; the screen says another. Before adding features, replace those competing instructions with one state model."
week: 1
date: "2027-02-22"
phase: "Vue 2"
question: "Who changes the interface when the state changes?"
buildOutcome: "A reactive interview profile"
teaches: ["vue2"]
teachers: ["mara-chen"]
slides: "/decks/week-01/"
related: ["sessions/week-01", "assessments/assignment-1"]
---

## The question

> Who changes the interface when the state changes?

## Why this week exists

Declare the profile name and saved flag before mounting the Vue instance. Bind text and attributes to that state; use an event to change the flag. Compare v-if, which creates and removes a subtree, with v-show, which keeps it mounted and changes display. Inspect both the state and the DOM in DevTools. Reactivity is a relationship to inspect, not a special kind of animation.

## Core concepts

- Vue 2 instance and mounting
- Interpolation and template expressions
- v-if / v-else-if / v-else versus v-show
- v-bind and v-on
- Vue DevTools and reactive state

## Read the boundary

```js
new Vue({
  el: '#app',
  data: { saved: false },
  methods: {
    toggleSaved() {
      this.saved = !this.saved
    }
  }
})
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A reactive interview profile

1. Sketch two states of an interview profile: saved and unsaved. Name the smallest data model that distinguishes them.
2. Build the profile with a labelled button, a bound image alt and a conditional status message. No manual DOM text updates.
3. Compare v-if and v-show by inspecting the removed or hidden element. Record when retaining local input state matters.

## Try to break it

Click Save, then change saved in DevTools. Both routes must produce the same label. If they disagree, find the DOM write that bypasses state.

## Architecture and migration lens

Keep the observable behaviour; replace the mechanism. This is the same bargain you will make during the Vue 3 migration.

## Where this leads

Next week the state belongs to a whole editable list, so identity becomes part of correctness.

[Open the practical studio](/sessions/week-01/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v2.vuejs.org/v2/guide/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-01/)
