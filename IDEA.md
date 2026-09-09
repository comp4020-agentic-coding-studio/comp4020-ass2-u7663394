# SLOP2797

## Course Title

**SLOP2797: Vue in the Wild: From Vue2 to Vue3 and TS**

## 1. Course Idea

这是一门以 **Vue 真实项目开发与技术演进** 为核心的前端课程。

课程不会单纯按照 Vue 官方文档逐个介绍 API，而会围绕一个贯穿十二周的问题展开：

> **How does a Vue application grow from a small reactive interface into a maintainable production application, and what changes when we move from Vue 2 to Vue 3 and TypeScript?**

学生首先使用 Vue 2 理解 Vue 最核心的响应式思想、指令、组件、路由与状态管理，然后进入 Vue 3，学习 Composition API、Pinia 和现代项目结构，最后加入 TypeScript、测试、Mock API 和更真实的工程化设计。

课程通过三个逐渐复杂的应用场景推动学习：

1. Vue 2 mobile content application
2. Vue 3 admin management system
3. Vue 3 + TypeScript patient consultation application

三个项目共同体现同一个课程主题：

**从简单页面，到组件化应用，再到可维护的现代 Vue 工程。**

因此，这门课程的重点既包含“如何使用 Vue”，也包含：

* 为什么 Vue 应用需要组件边界
* 为什么全局状态需要专门管理
* 为什么 Vue 3 改变了组织逻辑的方式
* 为什么大型项目开始需要 TypeScript
* 为什么真实项目需要路由守卫、统一请求层、Mock、测试和权限控制
* 一个 Vue 项目如何随着规模增加逐渐改变架构

课程整体需要保持非常明显的 **Vue 2 → Vue 3 → Vue 3 + TypeScript** progression。

---

# 2. Course Positioning

## Level

**SLOP2797**

Undergraduate Level 2 course.

课程代码必须保持 repo 自动分配的后三位 `797`，因此最终课程代码为：

`SLOP2797`

## Target Students

适合已经完成基础 Web Development 学习，希望进入现代前端框架开发的学生。

## Prerequisites

学生应该已经掌握：

### Required

1. HTML 和 CSS 基础
2. JavaScript 基础语法
3. 基本 DOM 和事件概念
4. Git 基础使用
5. Node.js 和 npm / pnpm 的基本概念

### Recommended but not required

1. Responsive Web Design
2. Mobile Web Development
3. AJAX / Fetch
4. 基础 REST API 概念

课程中可以快速复习 Axios 和 API 请求，但不会重新完整教授 JavaScript、HTML 或 CSS。

---

# 3. Course Learning Outcomes

完成课程后，学生应该能够：

1. Explain Vue's reactive programming model and use it to build interactive interfaces.
2. Build reusable Vue components with clear data and event boundaries.
3. Use Vue Router to design multi page experiences inside a Single Page Application.
4. Manage shared application state using Vuex and Pinia.
5. Explain important architectural differences between Vue 2 and Vue 3.
6. Build Vue 3 applications using the Composition API.
7. Use TypeScript safely inside Vue components and application logic.
8. Design reusable request, authentication and state management layers.
9. Test important Vue application behaviour using modern testing tools.
10. Organise a medium sized Vue project so that another developer can understand and extend it.

---

# 4. Twelve Week Curriculum

整个课程需要严格设计成 **12 个 dated teaching weeks**。

具体 calendar date 不在 `IDEA.md` 中自行猜测。开发课程网站时，应先读取 starter repo 中提供的 semester dates，再将真实日期填入每一周。

---

## Week 1: Thinking in Vue

### Theme

**From DOM manipulation to reactive interfaces**

### Content

* Course introduction
* What Vue is
* Creating a Vue application
* Vue instance
* Template syntax
* Interpolation expressions
* Vue reactivity
* Vue DevTools
* `v-show`
* `v-if`
* `v-else`
* `v-else-if`
* Basic `v-bind`
* Basic `v-on`

### Weekly Build

制作一个简单的 interactive profile / product interface，让学生第一次看到：

**state changes → UI updates**

### Course Role

这一周建立整个课程最重要的 mental model：

> You change state. Vue changes the interface.

---

## Week 2: Directives, Events and Forms

### Theme

**Turning static interfaces into interactive applications**

### Content

* `v-on`
* Inline event handlers
* Methods
* Passing arguments
* `v-bind`
* `v-for`
* Why `key` matters
* `v-model`
* Event modifiers
* Directive modifiers
* Dynamic class binding
* Dynamic style binding
* `v-model` with different form elements

### Weekly Build

制作一个可以筛选、选择、编辑和提交内容的 mini application。

重点让学生理解：

**UI state、user input 和 rendered output 之间的关系。**

---

## Week 3: Derived State and Application Timing

### Theme

**When data changes, what should happen next?**

### Content

### Computed

* Computed property shorthand
* Full computed syntax
* Computed vs methods
* Derived state

### Watch

* Watch shorthand
* Full watch syntax
* Immediate watch
* When watch is appropriate

### Lifecycle

* Four lifecycle stages
* Lifecycle hooks
* Initial rendering
* DOM interaction
* Fetching initial data
* Focus management

### Weekly Build

构建一个带搜索、过滤、统计信息和初始化数据请求的小型内容应用。

### Key Question

> Should this value be stored, computed, or watched?

---

## Week 4: Components and Data Flow

### Theme

**Breaking an interface into reusable pieces**

### Content

* Engineering style Vue development
* Vue project structure
* Application startup flow
* Root component
* Single File Components
* Local component registration
* Global component registration
* `data` as a function
* Scoped styles
* Props
* Basic prop validation
* Full prop validation
* Props vs local data
* One way data flow
* Child to parent events

### Weekly Build

将 Week 3 的 application 重构成多个 reusable components。

### Architecture Focus

学生需要开始回答：

> Which component should own this state?

---

## Week 5: Component Interfaces and Reusable UI

### Theme

**Designing components that other developers can actually use**

### Content

* Component communication
* `v-model` internals
* Reusable form components
* `sync` modifier
* `ref`
* `$refs`
* Accessing DOM elements
* Accessing component instances
* Vue asynchronous rendering
* `$nextTick`
* Provide / inject
* Event bus as a legacy communication pattern
* Default slots
* Fallback content
* Named slots
* Scoped slots
* Custom directives
* Directive values
* Building `v-loading`

### Weekly Build

设计一个 reusable UI component collection，包括：

* Loading state
* Form input
* Modal / card component
* Slot based layout component

### Migration Note

这一周需要明确标记：

哪些模式主要帮助学生理解 Vue 2 legacy projects，哪些思想会继续进入 Vue 3。

---

## Week 6: Routing, APIs and Mobile Applications

### Theme

**Turning components into an application**

### Content

### SPA and Routing

* Single Page Applications
* Vue Router
* Basic router configuration
* Router module structure
* `router-link`
* Exact and fuzzy matching
* Active classes

### Navigation

* Declarative navigation
* Query parameters
* Dynamic route parameters
* Optional parameters
* Programmatic navigation
* Path navigation
* Named routes

### Routing Behaviour

* Route guards
* Redirects
* 404 routes
* Router modes

### Application Data

* Axios introduction
* Request abstraction
* API loading states
* Basic token handling
* Basic mobile application structure
* Introduction to Vant

### Weekly Build

构建一个 mobile article browser prototype。

### Assessment Connection

本周内容直接为 **Assignment 1** 提供最后一组核心技术。

---

## Week 7: Shared State with Vuex

### Theme

**When state becomes bigger than one component**

### Content

* Why global state exists
* Creating a Vuex store
* Providing application state
* Accessing store state
* `mapState`
* Strict mode
* Vuex one way data flow

### Mutations

* Basic mutations
* Payloads
* `mapMutations`

### Actions

* Basic actions
* Async actions
* `mapActions`

### Other Concepts

* Getters
* Vuex modules
* Module state
* Module getters
* Module mutations
* Module actions

### Weekly Build

为之前的 Vue 2 application 增加：

* authentication state
* shared user information
* liked / collected items
* application level state

### Migration Question

> What problems does Vuex solve, and which parts will Pinia simplify later?

---

# Assignment 1 Due

建议 Assignment 1 在 Week 7 结束附近提交。

具体日期必须与真实 semester calendar 对齐。

---

## Week 8: Moving to Vue 3

### Theme

**Same framework, different way of organising logic**

### Content

* Why we are moving from Vue 2 to Vue 3
* Vue 3 project structure
* `create-vue`
* Vite
* Key project files
* Composition API
* `setup`
* `ref`
* `reactive`
* `computed`
* `watch`

### Watch in Vue 3

* Basic watch
* Immediate execution
* Deep watching
* Precise dependency watching

### Lifecycle

* Vue 3 lifecycle functions

### Weekly Build

重新实现课程前半部分的一个 Vue 2 interface，并使用 Vue 3 Composition API 重构。

### Important Course Moment

这一周应该成为课程网站中的一个明显 transition point。

视觉设计和课程语言都可以强调：

**Vue 2 → Vue 3**

学生需要比较两种实现，而不能只学习一套新的 API。

---

## Week 9: Vue 3 Application Architecture

### Theme

**Building modern Vue applications**

### Content

### Component Communication

* Props
* Emits
* Parent to child
* Child to parent
* Template refs
* Provide / inject

### Pinia

* Installing Pinia
* Creating stores
* State
* Getters
* Actions
* Async actions
* `storeToRefs`
* Pinia DevTools

### Application Architecture

* Vue Router with Vue 3
* Authentication state
* Route protection
* Persistent stores
* Axios request wrapper
* Request interceptors
* Response interceptors
* Centralised error handling

### UI System

* Element Plus
* Admin layout patterns

### Weekly Build

构建一个 small Vue 3 admin interface。

### Assessment Connection

本周内容形成 **Assignment 2** 的技术基础。

---

## Week 10: TypeScript for Vue Developers

### Theme

**Making application assumptions explicit**

### Content

### TypeScript Foundations

* What TypeScript is
* Type annotations
* Arrays
* Union types
* Type aliases
* Function types
* Optional parameters
* Void
* Object types
* Literal types
* Type inference
* `any`
* Type assertions

### Interfaces

* Interface basics
* Optional properties
* Interface inheritance

### Generics

* Generic concepts
* Generic functions
* Generic interfaces
* Generic type aliases
* Generic constraints

### Weekly Build

将一段 JavaScript application logic 逐步迁移为 TypeScript。

### Key Question

> Which assumptions in our JavaScript code can TypeScript make visible?

---

# Assignment 2 Due

建议 Assignment 2 在 Week 10 结束附近提交。

Assignment 2 不要求 TypeScript，因此 Week 10 可以同时作为 Vue 3 JavaScript architecture 与 TypeScript application 之间的 transition。

---

## Week 11: Vue 3 with TypeScript

### Theme

**Typing a real Vue application**

### Content

为以下 Vue API 添加正确类型：

* `ref`
* `reactive`
* `computed`
* Event handlers
* Template refs
* Props
* Emits
* Pinia stores

同时学习：

* Optional chaining
* Type declaration files
* `.d.ts`
* API response types
* Reusable interfaces
* Typed Axios responses
* VueUse introduction

### Weekly Build

构建一个 typed consultation form workflow。

### Architecture Focus

重点避免为了“让 TypeScript 不报错”而大量使用 `any`。

学生需要理解：

> Good types describe the application model.

---

## Week 12: Production Vue

### Theme

**What happens after the application works?**

### Content

### Testing

* Why frontend tests matter
* Unit testing
* Component testing
* Vitest
* happy-dom

### Data and Development

* Mock APIs
* Generating mock data
* Development data strategies

### Application Architecture

* Role Based Access Control
* Permission based interfaces
* Real time style consultation interactions
* Loading, error and empty states
* Application notifications

### Advanced UI

* ECharts
* Data visualisation
* SVG icon sprites

### Production Review

* Vue project structure
* Request layer
* Router
* Store
* Components
* Types
* Tests
* Developer experience

### Weekly Build

学生对自己的 Assignment 3 进行一次 production readiness review。

### Final Course Question

> If another developer joined this project tomorrow, could they understand and safely change it?

---

# 5. Curriculum Progression

整个十二周需要明显体现以下 progression：

```text
HTML + JavaScript knowledge
        ↓
Vue reactive thinking
        ↓
Directives and state
        ↓
Components
        ↓
Component architecture
        ↓
Router + API
        ↓
Vuex
        ↓
Vue 2 complete application
        ↓
Vue 3 transition
        ↓
Composition API + Pinia
        ↓
TypeScript
        ↓
Vue 3 + TypeScript
        ↓
Testing and production architecture
```

课程网站中的每一周都应该能够回答两个问题：

1. **Why does this week exist?**
2. **What can the student build after this week that they could not build before?**

不能把十二周做成十二份相互独立的 Vue documentation summaries。

---

# 6. Assessment Design

课程没有 mid semester exam，也没有 final exam。

全部成绩来自三个 progressively larger practical projects：

| Assessment                                        |   Weight |
| ------------------------------------------------- | -------: |
| Assignment 1: Vue 2 Mobile Content App            |      30% |
| Assignment 2: Vue 3 Admin Dashboard               |      35% |
| Assignment 3: Vue 3 + TypeScript Consultation App |      35% |
| **Total**                                         | **100%** |

三个 Assignment 应当体现课程 progression：

```text
Assignment 1
Vue 2 application
        ↓
Assignment 2
Modern Vue 3 architecture
        ↓
Assignment 3
Vue 3 + TypeScript production application
```

---

## Assignment 1: Vue 2 Mobile Content Application

### Weight

**30%**

### Suggested Timing

**Release:** Week 3
**Due:** End of Week 7

最终日期必须根据课程真实 calendar dates 填写。

### Purpose

第一个 Assignment 要求学生把 Vue 基础知识组合成一个完整的 mobile application。

学生需要制作一个用于浏览、阅读、点赞和收藏面试经验文章的 Vue 2 mobile web application。

### Technology Stack

* Vue 2
* Vue Router 3
* Vant 2
* Axios
* Less

### Required Features

#### Authentication

* User registration
* User login
* Token based authentication
* Protected routes
* Logout

#### Article Experience

* Recommended article feed
* Latest article feed
* Infinite scrolling
* Article detail pages
* Like article
* Collect article

#### Personal Content

* Liked article list
* Collected article list
* User profile

#### UI

* Mobile first interface
* Vant components
* 375px mobile viewport conversion setup

### Learning Focus

主要评分学生是否能够把：

**components + router + API + authentication + application state**

组合为一个完整 Vue 2 application。

### Suggested Marking Structure

| Area                           | Weight |
| ------------------------------ | -----: |
| Core functionality             |    40% |
| Vue component structure        |    20% |
| Routing and application state  |    15% |
| Mobile UX                      |    15% |
| Code quality and documentation |    10% |

---

## Assignment 2: Vue 3 Admin Dashboard

### Weight

**35%**

### Suggested Timing

**Release:** Week 8
**Due:** End of Week 10

### Purpose

学生从 Vue 2 mobile application 进入现代 Vue 3 application architecture。

重点从“页面功能”进一步发展到：

**shared state + request architecture + reusable management interface**

### Technology Stack

* Vue 3
* Vite
* Vue Router
* Pinia
* Element Plus
* Axios
* Sass

### Required Features

#### Authentication

* User registration
* User login
* Token based route protection

#### State

* Pinia
* Persistent user state

#### Article Channels

* Create channel
* Edit channel
* Delete channel
* List channels

#### Articles

* Article list
* Filters
* Pagination
* Create
* Edit
* Delete

#### User Account

* Edit profile
* Update avatar
* Reset password

#### Request Architecture

* Centralised Axios configuration
* Request interceptor
* Response interceptor
* Token injection
* Shared error handling

### Learning Focus

Assignment 2 应体现学生是否真正理解：

> Modern Vue applications need architecture beyond individual components.

### Suggested Marking Structure

| Area                            | Weight |
| ------------------------------- | -----: |
| Core functionality              |    35% |
| Pinia and application state     |    20% |
| Router and request architecture |    20% |
| Admin UX and component design   |    15% |
| Code quality                    |    10% |

---

## Assignment 3: Typed Patient Consultation Application

### Weight

**35%**

### Suggested Timing

**Release:** Week 10
**Due:** After Week 12

具体 submission date 必须与真实 semester dates 对齐。

### Purpose

这是课程的 capstone project。

学生需要将课程中的现代 Vue 技术组合到一个规模更大的 mobile first application 中。

项目主题为 patient side online medical consultation workflow。

课程重点仍然只评价 frontend application。

Backend API 可以由课程提供，学生不需要实现服务器端系统。

### Technology Stack

* Vue 3
* TypeScript
* Vite
* Pinia
* Vue Router
* Vant
* Axios
* VueUse
* Vitest
* ESLint

### Required Features

#### Authentication

* Patient login
* Route guards
* Persisted user state

#### Consultation Workflow

* Fast consultation
* Department selection
* Illness description
* Doctor selection
* Consultation creation
* Medicine selection
* Payment

#### Doctor Experience

* Doctor list
* Doctor details

#### Consultation Room

* Message components
* Action components
* Consultation status
* Evaluation

#### User Centre

* Patient profiles
* Consultation records
* Consultation details

#### Orders

* Medicine payment
* Payment result
* Order details
* Logistics

#### Content

* Health articles
* Notifications

#### Application Architecture

* Axios request wrapper
* Token injection
* Business code handling
* `401` redirect handling
* Pinia persisted state
* Vant auto import
* SVG icon sprite
* Mock API support

#### Testing

* Vitest
* happy-dom
* Unit tests

### Learning Focus

Assignment 3 需要重点评价：

**maintainability、TypeScript correctness、application architecture 和 testing。**

### Suggested Marking Structure

| Area                         | Weight |
| ---------------------------- | -----: |
| Core consultation workflow   |    30% |
| TypeScript quality           |    20% |
| Vue application architecture |    20% |
| State and data handling      |    10% |
| Testing                      |    10% |
| Mobile UX and accessibility  |    10% |

---

# 7. Relationship Between Teaching and Assessment

这是课程设计中必须保护的一条重要规则：

> **Students should not be assessed on a required technology before the course has taught it.**

Assignment requirement 和课程内容之间需要建立明确对应关系。

例如：

| Assessment Requirement              | Taught       |
| ----------------------------------- | ------------ |
| Vue fundamentals                    | Weeks 1 to 3 |
| Components                          | Weeks 4 to 5 |
| Vue Router                          | Week 6       |
| Axios                               | Week 6       |
| Vuex                                | Week 7       |
| Vue 3                               | Week 8       |
| Pinia                               | Week 9       |
| Vue 3 Router architecture           | Week 9       |
| TypeScript                          | Week 10      |
| Vue + TypeScript                    | Week 11      |
| Vitest / Mock / production patterns | Week 12      |

这个 dependency relationship 后续应该成为自定义 `spec/` check 的重要来源。

---

# 8. Website Structure

建议课程网站至少包含以下页面：

```text
/
Course Home

/course
Course Overview

/schedule
12 Week Schedule

/weeks/1
...
/weeks/12

/assessments
Assessment Overview

/assessments/1
Assignment 1

/assessments/2
Assignment 2

/assessments/3
Assignment 3

/resources
Course Resources

/policies
Course Policies
```

这样已经可以形成约 20 个以上的实际课程页面。

---

# 9. Weekly Page Design

每个 Week 页面需要具有共同的信息架构，但内容不能只是复制模板然后替换名词。

建议每周根据主题使用：

### Week Header

* Week number
* Date
* Topic
* One sentence question

### Why This Week Matters

解释这一周在课程 progression 中存在的原因。

### Core Concepts

本周主要技术。

### Build

这一周学生实际制作什么。

### Architecture / Migration Lens

这一周对真实 Vue application architecture 有什么影响。

Week 8 之后尤其需要加入 Vue 2 和 Vue 3 的 comparison。

### Lecture Deck

每周页面链接到对应的 slides。

### Resources

少量真正有用的阅读或 documentation。

### Assessment Connection

当本周内容与 Assignment 有明显关系时明确指出。

---

# 10. Slides Design

最好为 Week 1 到 Week 12 都提供真实 lecture slides。

最低 spec 只要求至少一个 lecture 有真实 deck，但本课程的设计目标可以更高。

Slides 应形成统一 visual system。

## Visual Direction

主视觉可以使用 Vue 的青绿色作为 course accent。

需要注意：

**SlopU 固定的 university branding、marks 和 palette 必须保留。**

网站不能直接删除 SlopU palette 并完整替换为 Vue palette。

可以采用：

```text
SlopU branding
+
Vue green course accent
```

## Typography

### Body

**Times New Roman**

### Headings

可以使用更现代、更适合 UI 的 sans serif font。

### Code

使用清晰的 monospace font。

例如：

`JetBrains Mono`
`Fira Code`
`SFMono`

具体字体应根据 starter repo 已有字体和可用资源决定。

## Slide Content

尽量避免整页 bullet points。

优先使用：

* Architecture diagrams
* Before / after code
* Component trees
* Data flow diagrams
* Router diagrams
* State diagrams
* Vue 2 vs Vue 3 comparisons
* Application screenshots
* Code walkthroughs

---

# 11. Website UI Direction

这是一门教授 frontend framework 的课程，因此课程网站本身也需要体现较高的 frontend quality。

学生看到网站时应该产生这样的感觉：

> The people teaching this course understand frontend development.

## Design Principles

1. Modern
2. Clean
3. Responsive
4. Technically confident
5. Consistent
6. Easy to scan

## Visual Elements

鼓励使用：

* Vue logo
* Vue ecosystem icons
* Router diagrams
* Pinia icon
* TypeScript icon
* Component illustrations
* Code snippets
* Architecture diagrams
* Application mockups
* Context appropriate icons

图片和 icon 必须服务于课程内容，避免仅作为装饰。

## Responsive Design

必须同时认真测试 assignment marking 使用的两个 viewport。

导航、表格、代码块、slides link、assessment 信息在 mobile viewport 下都必须可读。

---

# 12. Course Voice

网站文字需要保持统一 voice。

建议：

**clear, technical, direct and student friendly**

避免大量：

* generic motivational text
* empty introductions
* repetitive summaries
* AI sounding transitions
* vague phrases such as “in today's rapidly evolving digital world”

课程应该像真正做过 Vue 项目的人在教学生。

技术概念尽量通过真实 frontend problem 引入。

例如：

不要只写：

> This week we learn Pinia.

更合适的课程逻辑是：

> Our user identity is now needed by the header, router guard and account page. Keeping three copies of it will create three sources of truth. This week we move that state into Pinia.

这种内容更符合整个课程的 voice。

---

# 13. CLAUDE.md Design Principles

`CLAUDE.md` 不能只记录技术命令。

它需要记录那些在整个开发过程中都必须成立的课程设计规则。

建议最终逐步形成类似以下规则。

## Curriculum Rules

1. The course has one central progression: Vue 2 → Vue 3 → Vue 3 + TypeScript.
2. Every teaching week must advance that progression.
3. Every week must explain why its content exists in the course.
4. Do not introduce required assessment technology after the assessment that requires it.
5. Vue 2 content must be framed as part of the legacy to modern progression.
6. From Week 8 onward, make meaningful comparisons with Vue 2 where appropriate.
7. Avoid twelve interchangeable weekly pages.
8. Every assessment must directly test concepts taught in the course.

## Content Rules

1. Avoid generic AI generated filler.
2. Prefer concrete frontend problems and application examples.
3. Use consistent terminology across weeks, assessments and slides.
4. Never invent course dates, policies or requirements when the repository already provides them.
5. Do not change fixed SlopU branding or content model.

## UI Rules

1. Preserve SlopU identity.
2. Vue green is a course accent.
3. All important pages must work at both marking viewports.
4. Code samples must remain readable on narrow screens.
5. Course navigation must make progression obvious.

这些规则不需要一次全部写进去。

更好的 process 是随着开发中发现问题逐渐增加，并通过 commit history 展示 harness 如何成长。

---

# 14. Custom spec/ Checks

这是冲击 HD 很重要的一部分。

不要只增加普通 lint checks。

`spec/` 应该体现：

> What did I decide must stay true about this particular course?

## Check 1: Assessment Readiness

检查每一个 Assignment 要求使用的核心技术，在 Assignment due week 之前已经被课程教授。

例如：

```text
Assignment 1
Vue Router → Week 6
Axios → Week 6

Assignment 2
Vue 3 → Week 8
Pinia → Week 9

Assignment 3
TypeScript → Week 10
Vue + TS → Week 11
Vitest → Week 12
```

如果以后 agent 调整课程顺序导致 Assignment 先考、课程后教：

**check should fail.**

这是一个非常适合写进 `PROCESS.md` 的 course design decision。

---

## Check 2: Curriculum Progression

检查：

* exactly 12 teaching weeks
* chronological teaching dates
* Vue 2 phase
* transition week
* Vue 3 phase
* TypeScript phase

避免 agent 在后续修改中破坏课程 progression。

---

## Check 3: Assessment Contract

检查：

* 三个 assessments 均存在
* 权重为 30 + 35 + 35
* 总成绩为 100
* 每个 assessment 有 release date
* 每个 assessment 有 due date
* 每个 assessment 有 required technologies
* 每个 assessment 有 deliverables

---

## Check 4: Week Identity

每周至少需要具有：

* distinct topic
* distinct learning question
* distinct build outcome
* lecture / deck link

可以进一步检查 build title 不允许重复。

它无法完全判断课程内容是否优秀，但可以防止 agent 生成十二个结构和内容高度相似的页面。

---

# 15. PROCESS.md Strategy

这是整个 Assignment 最重要的部分之一，因为：

**Legibility of process = 45%**

最终的 `PROCESS.md` 应该写成一个完整 narrative。

不要写成：

```text
I fixed X [commit]
Then I fixed Y [commit]
Then I changed Z [commit]
```

建议整篇围绕下面的故事展开。

## Narrative Spine

### 1. My first idea was too broad

最初的想法只是：

> a course that teaches Vue

进一步阅读 brief 后发现，这种课程容易成为普通 framework tutorial，同时也很容易让 agent 生成十二周 documentation shaped content。

因此课程被重新定义为：

> Vue in the Wild: From Legacy Vue 2 to Typed Vue 3 Service Apps

这里可以引用课程定位发生改变的 commit。

---

### 2. I decided progression was the course

好的课程需要有一个持续整个 semester 的 idea。

因此设计：

```text
Vue 2 fundamentals
→ complete Vue 2 application
→ Vue 3 transition
→ modern state management
→ TypeScript
→ production Vue
```

这一决定影响了：

* Week ordering
* Assessment ordering
* Weekly examples
* Slides
* Navigation

之后把这个规则写入 `CLAUDE.md`。

引用对应 commit。

---

### 3. I stopped trusting the agent to preserve sequencing

当 agent 修改很多页面时，很容易出现：

例如 Assignment 需要 Pinia，但 Pinia 在之后才教授。

人工检查一次无法保证后续不会再次发生。

所以将：

> required assessment technology must be taught before assessment

编码进 `spec/`。

这里非常适合成为 `PROCESS.md` 中的重要 breakthrough。

---

### 4. I chose what not to automate

有些课程质量适合机械检查：

* assessment total
* dependencies
* dates
* required sections

有些无法通过简单 check 判断：

* a week is interesting
* prose sounds human
* the course feels coherent
* diagrams genuinely help
* the course would make someone want to enrol

这些内容刻意保留为 manual judgement。

这是 rubric 中非常值得解释的一点：

**which decisions I deliberately left out of the harness and why.**

---

### 5. I verified the course like a prospective student

最终不能只运行：

`pnpm check`

还应该按照 marker 的实际阅读方式检查网站：

```text
Home
→ Week 2
→ Week 6
→ Week 9
→ Week 12
→ Assignment 2
→ Deck
→ Policies
```

分别使用两个 marking viewports。

同时检查：

* navigation
* broken links
* repeated prose
* course progression
* code overflow
* assessment clarity
* visual consistency
* browser console
* responsive behaviour

然后再接受 agent 的最终结果。

---

# 16. Commit Strategy

为了让最终 `PROCESS.md` 有真正可以引用的 evidence，不建议等网站全部完成后才一次性 commit。

建议形成明显的开发阶段：

```text
Commit 1
Establish niche course concept

Commit 2
Build twelve week curriculum progression

Commit 3
Define assessments and curriculum dependencies

Commit 4
Encode course rules in CLAUDE.md

Commit 5
Add first course specific spec check

Commit 6
Build first complete vertical slice
Home + Week + Assessment + Deck

Commit 7
Expand remaining weeks

Commit 8
Improve curriculum voice and remove repetitive content

Commit 9
Responsive and navigation review

Commit 10
Final prospective student walkthrough

Commit 11
PROCESS.md evidence pass
```

真正开发时可以有更多 commits。

重点是 commit history 应该能够展示：

**the harness grew with the work.**

---

# 17. Acceptance Workflow

每次让 agent 完成一个较大的修改后，不要仅接受它说：

> Everything works.

需要实际验证。

## Automated

运行：

```bash
pnpm check
pnpm check:evidence
```

以及项目已有的测试和 build commands。

## Manual

检查：

1. Desktop viewport
2. Mobile viewport
3. Browser console
4. Main navigation
5. Non adjacent weeks
6. Assessment pages
7. Slides
8. Policies
9. Course progression
10. Repeated AI style prose

## Content Acceptance Question

接受任何 agent generated course content 前，可以问：

> Does this page help explain the specific course I designed, or could the same paragraph appear in any Vue course?

如果删除 `Vue`、`Pinia` 等名词后仍然适用于任何课程，这段内容通常需要重新修改。

---

# 18. Important Constraints

开发过程中始终遵守以下要求：

1. Slop University name 不能修改。
2. SlopU marks 不能修改。
3. SlopU fixed palette 不能删除或替换。
4. Starter content collections 不能改变 contract。
5. Generated API 保持 starter 要求。
6. Course code 后三位必须保持 `797`。
7. 最终必须有十二个 dated teaching weeks。
8. Assessment 总权重必须为 100%。
9. 至少一个 lecture 必须具有真实 deck 并从课程页面链接。
10. `pnpm check` 必须通过。
11. `pnpm check:evidence` 必须通过。
12. `PROCESS.md` 最终保持 400 to 600 words。
13. `PROCESS.md` 必须引用真实 commits。
14. 网站必须在两个 marking viewports 正常工作。
15. 不能仅仅把 starter 的 noun 替换成 Vue。
16. 十二周课程内容必须存在明显 progression。
17. 所有必要技术必须在对应 Assignment 前教授。

---

# 19. Open Questions

以下内容在实际开发前需要从 starter repo 或课程信息中确认，不能自行猜测：

1. Twelve teaching weeks 的具体 dates。
2. Assignment release 和 due dates 对应的真实 calendar dates。
3. 两个 marking viewports 的具体尺寸。
4. Starter repo 已经提供哪些 automated checks。
5. Starter content model 对 Week、Lecture、Assessment 和 Deck 有哪些固定 fields。
6. `pnpm check:evidence` 对 commit citation 的具体格式要求。
7. SlopU palette 中哪些颜色属于不可修改的固定 branding。
8. Template 中课程代码后三位是否确认为 `797`。

确认以上内容后，再把真实数据写入课程网站。

---

# 20. Final Design Principle

整个项目最终需要让 marker 在十分钟浏览后理解三件事情：

### 1. What is this course about?

**Learning how Vue applications grow from Vue 2 interfaces into maintainable Vue 3 + TypeScript systems.**

### 2. Why are these twelve weeks in this order?

因为每一周解决前一阶段应用规模增长后出现的新问题。

### 3. Why do these three assignments belong to the same course?

因为三个项目分别代表：

**Vue 2 application → Vue 3 application → typed production Vue application**

这三个答案应该同时体现在：

* Home page
* Week pages
* Assessments
* Slides
* CLAUDE.md
* spec/
* PROCESS.md
* Commit history

最终网站本身也应该成为课程观点的一部分：

> A course about good frontend architecture should itself feel carefully designed.
