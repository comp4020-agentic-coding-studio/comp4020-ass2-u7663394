---
title: "Vue 3 Application Architecture"
description: "The editor opens two management pages and receives two different error messages for the same expired session. Token injection, redirects and loading flags have spread into every component."
flow: ["Views ask for intent", "Pinia owns identity", "Axios owns request policy"]
week: 9
date: "2027-04-19"
phase: "Vue 3"
question: "Where does an expired session get handled once?"
buildOutcome: "An editorial dashboard with one request boundary"
teaches: ["pinia", "router4", "element-plus", "sass", "request-architecture"]
teachers: ["guochen-wang"]
slides: "/decks/week-09/"
related: ["sessions/week-09", "assessments/assignment-2", "lectures/week-08"]
---

## The question

> Where does an expired session get handled once?

## Why this week exists

Put account state in a Pinia store and request policy in one Axios instance. Use storeToRefs for reactive store properties when destructuring; call actions on the store. Make a response interceptor translate transport failures into a consistent error shape, including a single session-expiry path. Persist only the intended account fields and clear them on logout. Router 4 guards control navigation; they cannot secure the API. Element Plus supplies controls, but labels, empty states and destructive-action confirmation remain application responsibilities.

## Core concepts

- Vue 3 props, emits, template refs and provide / inject
- Pinia state, getters, sync / async actions and storeToRefs
- Router 4 guards and account persistence
- Axios request / response interceptors and shared errors
- Element Plus management layouts
- Sass variables and scoped styling

## Read the boundary

```js
import { storeToRefs } from 'pinia'
import { useAccountStore } from './stores/account'

const account = useAccountStore()
const { user } = storeToRefs(account)
// Keep actions attached to their store.
await account.restoreSession()
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: An editorial dashboard with one request boundary

1. Build channel CRUD and article list, filter, pagination and edit screens with Element Plus. Use Sass for a shared spacing rule.
2. Add the account store, request wrapper, token injection, shared error handling and Router 4 guards. Trace one 401 from response to UI.
3. Implement profile, avatar preview and password reset as fixture-backed flows. Exercise empty lists, cancellation and failed saves before adding polish.

## Try to break it

Expire the fixture session while two lists load. Check that the app clears stale identity and offers a coherent recovery path. Delete the last item on a paginated page and check the resulting page index.

## Architecture and migration lens

Vuex mutations disappear from the Pinia API; ownership does not. Explain which module responsibility became which store, and why a form draft stayed local.

## Where this leads

Keep Assignment 2 in JavaScript. Next week introduces types without changing its marking contract.

[Open the practical studio](/sessions/week-09/) · [Read the assessment brief](/assessments/assignment-2/)

## Reading

[Official documentation for this week](https://pinia.vuejs.org/core-concepts/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-09/)
