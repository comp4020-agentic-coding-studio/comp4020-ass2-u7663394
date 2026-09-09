---
title: "Routing, APIs and Mobile Applications"
description: "The feed works until someone shares a URL, refreshes a detail page or loses their connection. A successful click-through demo has concealed three application-level failures."
week: 6
date: "2027-03-29"
phase: "Vue 2"
question: "Can a reader open this article directly, then recover from a failed request?"
buildOutcome: "A routed mobile article browser"
teaches: ["router3", "axios", "vant2", "authentication"]
teachers: ["mara-chen"]
slides: "/decks/week-06/"
related: ["sessions/week-06", "assessments/assignment-1", "lectures/week-05"]
---

## The question

> Can a reader open this article directly, then recover from a failed request?

## Why this week exists

Give articles dynamic route parameters and filters query parameters. Compare router-link with named programmatic navigation, optional params and path navigation; query state should survive sharing. Configure redirects, active classes and a not-found route. In Router 3, hash mode is convenient for static hosting; history mode requires a server fallback. Centralise Axios calls and represent pending, error and empty states separately. A route guard changes the experience, but the server remains responsible for authorisation.

## Core concepts

- Vue Router 3 configuration, modules and SPA model
- router-link, exact matching and active classes
- Dynamic / optional params and query parameters
- Named routes, programmatic navigation and redirects
- Guards, 404 routes and hash / history modes
- Axios abstraction, pagination and request states
- Vant 2 and a responsive 375px design baseline

## Read the boundary

```js
const routes = [
  { path: '/articles/:id', name: 'article',
    component: ArticlePage },
  { path: '/account', component: AccountPage,
    meta: { requiresAuth: true } },
  { path: '*', component: NotFoundPage }
]
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A routed mobile article browser

1. Configure Router 3 and build feed, article, account and not-found views. Use the shared fixture contract on the resources page.
2. Wrap Axios, model a fake login token and protect account routes. Add paginated loading with deduplication by article ID.
3. Integrate Vant 2 List with a loading flag reset in finally. Start with a 375px design and check 390px and desktop; use flexible widths and rem units rather than fixed pixel scaling.

## Try to break it

Paste an article URL into a fresh tab. Try a missing ID, an expired simulated token and a failed next-page request. Retrying must not duplicate articles.

## Architecture and migration lens

The request boundary should survive the migration. Components ask for an article; they should not each know where headers and tokens live.

## Where this leads

The last missing reader boundary is shared identity. Week 7 puts it in one store.

[Open the practical studio](/sessions/week-06/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v3.router.vuejs.org/guide/). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-06/)
