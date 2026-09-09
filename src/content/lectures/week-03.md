---
title: "Derived State and Application Timing"
description: "The feed stores both articles and filteredArticles. Removing an article updates only one array. Meanwhile, an old search response arrives after a newer one and silently replaces it."
flow: ["Stored articles + query", "Computed visible articles", "Rendered list + count"]
week: 3
date: "2027-03-08"
phase: "Vue 2"
question: "Should this value be stored, computed or watched?"
buildOutcome: "A searchable article feed with honest states"
teaches: ["derived-state"]
teachers: ["guochen-wang"]
slides: "/decks/week-03/"
related: ["sessions/week-03", "assessments/assignment-1", "lectures/week-02"]
---

## The question

> Should this value be stored, computed or watched?

## Why this week exists

A filtered list and its count belong in computed properties because they follow from existing state. A watcher is appropriate for an effect such as a request, not for keeping two copies of the same value synchronised. Compare shorthand and object watcher syntax, including immediate. Fetch initial data in created when no DOM is needed; focus a rendered field in mounted. Trace creation, mounting, updating and destruction, and clean up side effects when the component is destroyed.

## Core concepts

- Computed shorthand, getter / setter and caching versus methods
- Watch shorthand, handler object and immediate
- Creation, mounting, updating and destruction
- created, mounted, updated and beforeDestroy
- Initial requests, stale responses and focus

## Read the boundary

```js
computed: {
  visibleArticles() {
    const query = this.query.toLowerCase()
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(query)
    )
  }
}
```

This is a focused excerpt, not a complete application. Put it in the context described in the studio and inspect its behaviour.

## Build: A searchable article feed with honest states

1. Load a local JSON article fixture with fetch and show loading, empty, failure and successful results separately.
2. Derive filtered articles and their count; use a watcher only for an actual side effect. Add a request sequence ID to ignore stale results.
3. Draw the lifecycle timeline. Focus the search field after mounting and remove any timers when leaving the page.

## Try to break it

Delete an article while a filter is active. Both list and count must update. Throttle a request, change the query twice and explain which response should win.

## Architecture and migration lens

Derived state reduces the number of facts that can disagree. That becomes more valuable when a store is shared across routes.

## Where this leads

Assignment 1 opens this week. Start the article experience now; routing and shared identity arrive before its deadline.

[Open the practical studio](/sessions/week-03/) · [Read the assessment brief](/assessments/assignment-1/)

## Reading

[Official documentation for this week](https://v2.vuejs.org/v2/guide/computed.html). Read the sections matching the core concepts; bring one example whose behaviour you cannot yet explain.

[Lecture slides](/decks/week-03/)
