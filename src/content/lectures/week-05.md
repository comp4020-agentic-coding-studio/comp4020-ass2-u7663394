---
title: "Component Interfaces and Reusable UI"
description: "A modal works only on the profile page because it reaches into that parent through $refs. A loading spinner blocks clicks but says nothing to a keyboard user. Reuse exposes contracts that the first caller never had to name."
flow: ["Caller supplies content", "Slots define openings", "Component owns structure"]
week: 5
date: "2027-03-22"
phase: "Vue 2"
question: "Can a second caller use this component without opening its source?"
buildOutcome: "A reusable reader UI kit"
teaches: ["component-interfaces", "less"]
teachers: ["mara-chen"]
slides: "/decks/week-05/"
related: ["sessions/week-05", "assessments/assignment-1", "lectures/week-04"]
---

## The question

> Can a second caller use this component without opening its source?

## Why this week exists

In Vue 2, the default component v-model contract is a value prop and an input event. Contrast that with .sync, which listens for update:prop events. Use default, named and scoped slots to separate structure from caller-owned content. Keep refs for deliberate imperative work such as focus; await $nextTick before touching a newly rendered input. Provide/inject can pass a contextual dependency down a tree. An event bus is legacy reading material, not the default architecture: subscriptions hide ownership and require cleanup.

## Core concepts

- Vue 2 component v-model and .sync
- Default, fallback, named and scoped slots
- ref, $refs, asynchronous rendering and $nextTick
- Provide / inject and legacy event bus
- Custom directives and a v-loading binding
- Less variables and scoped component styles

## Read the boundary

```html
<label>
  Search articles
  <input :value="value"
    @input="$emit('input', $event.target.value)">
</label>
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A reusable reader UI kit

1. Build SearchField and a slot-based panel with useful fallback content. Demonstrate each with two different callers.
2. Implement a focus-managed modal and a v-loading directive that updates aria-busy; keep a visible status in the component.
3. Use one Less spacing variable, inspect the compiled CSS and document the value / input contract. Compare .sync with an explicit update event.

## Try to break it

Open the modal with the keyboard, close with Escape, and check that focus returns to the trigger. Change the loading flag while a request is pending; the status must remain perceivable.

## Architecture and migration lens

Legacy-only: .sync and instance event-bus APIs do not carry unchanged into Vue 3. Enduring: explicit events, slots and state ownership. Make a migration ledger with those two columns.

## Where this leads

The kit now supports the mobile reader. Week 6 connects it to URLs and requests.

[Open the practical studio](/sessions/week-05/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v2.vuejs.org/v2/guide/components-slots.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-05/)
