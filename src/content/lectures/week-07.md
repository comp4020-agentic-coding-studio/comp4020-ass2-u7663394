---
title: "Shared State with Vuex"
description: "The header still displays a name after the account page logs out. The saved list has another copy of the user. Three correct components have produced one inconsistent application."
flow: ["Action performs request", "Mutation records result", "All subscribers update"]
week: 7
date: "2027-04-05"
phase: "Vue 2"
question: "What should happen everywhere when the reader logs out?"
buildOutcome: "One identity and collection store"
teaches: ["vuex"]
teachers: ["mara-chen"]
slides: "/decks/week-07/"
related: ["sessions/week-07", "assessments/assignment-1", "lectures/week-06"]
---

## The question

> What should happen everywhere when the reader logs out?

## Why this week exists

Install a Vuex 3 store once and trace state through getters, mutations and actions. Mutations are synchronous records of state changes; asynchronous work belongs in actions. Use payloads and mapState, mapMutations and mapActions where they clarify intent. Strict mode catches writes outside mutations during development. Split account and collection into namespaced modules only when that separation helps ownership. A logout must clear account-specific collections as well as the token.

## Core concepts

- Vuex 3 injection, state and mapState
- Strict mode and one-way store flow
- Mutations, payloads and mapMutations
- Async actions and mapActions
- Getters and namespaced modules

## Read the boundary

```js
const account = {
  namespaced: true,
  state: () => ({ user: null }),
  mutations: {
    setUser(state, user) { state.user = user }
  },
  actions: {
    logout({ commit }) { commit('setUser', null) }
  }
}
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: One identity and collection store

1. Move identity and collections into separate Vuex modules. Keep temporary input drafts inside components.
2. Trace one save action from button to request to mutation to both affected views. Capture the trace in DevTools.
3. Run the full reader acceptance journey and hand over the repository with a setup guide and one known limitation.

## Try to break it

Log in as one fixture user, save an article, log out, then log in as a different user. The second user must not inherit the first collection.

## Architecture and migration lens

Record what Vuex buys: one mutation path and observable shared state. In week 9 compare that responsibility with Pinia, not just the number of lines.

## Where this leads

Assignment 1 closes after this studio. Next week preserve one reader behaviour while replacing its framework organisation.

[Open the practical studio](/sessions/week-07/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v3.vuex.vuejs.org/guide/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-07/)
