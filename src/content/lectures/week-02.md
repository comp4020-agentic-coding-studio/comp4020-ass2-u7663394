---
title: "Directives, Events and Forms"
description: "A student edits an interview title, then filters the list. The draft appears beside a different article. The list looks tidy, but the interface has lost the identity of the thing being edited."
flow: ["Article ID", "Editable draft", "Submit or cancel"]
week: 2
date: "2027-03-01"
phase: "Vue 2"
question: "Why did editing one article change the wrong row?"
buildOutcome: "An editable interview shortlist"
teaches: ["forms"]
teachers: ["mara-chen"]
slides: "/decks/week-02/"
related: ["sessions/week-02", "assessments/assignment-1", "lectures/week-01"]
---

## The question

> Why did editing one article change the wrong row?

## Why this week exists

Use a stable article ID as the v-for key; an array index describes a position, not an article. Keep an editable draft separate from saved content until submit. Use v-model for text, select and checkbox inputs, and .trim where whitespace has no meaning. An event method can receive an ID without receiving the whole DOM node. Bind classes and styles to named state rather than repeating business logic in CSS.

## Core concepts

- v-for and stable keys
- v-model on input, checkbox and select
- Methods, arguments and inline handlers
- Event modifiers: .prevent and .stop
- Input modifiers and dynamic classes / styles

## Read the boundary

```html
<form @submit.prevent="saveDraft">
  <label for="title">Article title</label>
  <input id="title" v-model.trim="draft.title">
  <button type="submit">Save title</button>
</form>
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: An editable interview shortlist

1. Create three interview entries with stable IDs and a topic select. Add a checkbox shortlist.
2. Implement edit, cancel and submit. Cancel must restore the previously saved value without altering another row.
3. Deliberately use the index as a key, reproduce the editing fault, then restore stable IDs and write down the difference.

## Try to break it

Start editing the second row, filter out the first, then save. The same article ID must change. Repeat using only Tab, Space and Enter.

## Architecture and migration lens

Stable identity survives a framework upgrade. A green screen with the wrong record underneath is still a failed migration.

## Where this leads

Filtering now creates derived values. Next week we decide which data deserves storage.

[Open the practical studio](/sessions/week-02/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v2.vuejs.org/v2/guide/list.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-02/)
