# SLOP2797
这是一门教学前端框架--Vue的课程。参加的学生应该具有的基本前置条件有: 1. HTML+CSS的基本知识（最好还知道响应式或移动端，但不必须）2. JavaScript的基本知识及语法 3. Git, Node的概念与基本使用（最好还知道AJAX，但不必须）

## 课程内容: 需要重组整理为总共 Week1 -- Week12 周的结构
1. Vue的初识：课程导学，Vue是什么，创建Vue实例，插值表达式，Vue的响应式特性，开发者工具
2. Vue的指令：指令介绍，v-show/v-if，v-else/v-else-if，v-on: 内联+methods处理函数+调用传参，v-bind，v-for以及它的key，v-model
3. 动态样式绑定：指令的修饰符，v-bind操作class与style，v-model应用于其他表单元素
4. 计算属性 + 侦听器：计算属性简写，computed vs. methods，计算属性的完整写法，watch简写，watch完整写法
5. 生命周期：生命周期的4个阶段，钩子函数，例子(初始化渲染和获取焦点)
6. 组件化开发：工程化开发和脚手架，项目目录介绍和运行流程，组件化开发和根组件，普通组件的注册(局部 + 全局注册)
7. 组件通信：scoped，data函数，组件通信，什么是prop，props校验(基础类型 + 完整写法)，props和data的区别，单向数据流，非父子通信(事件总线 + provide-inject)，v-model的原理，封装表单类组件
8. ref + $nextTick：sync修饰符，ref和$refs获取dom与组件，Vue异步更新和$nextTick
9. 自定义指令与插槽：自定义指令基础语法，指令的值，例子(封装v-loading)，插槽(默认插槽+后备内容+具名插槽+作用域插槽)
10. Vue中的路由：单页应用程序介绍，路由介绍，基本使用，路由模块封装，router-link(精确匹配与模糊匹配，自定义匹配类名)，声明式导航-跳转传参(查询参数传参 + 动态路由传参及其可选符)，路由守卫，路由重定向，Vue路由404，路由模式，编程式导航-两种路由跳转方式，path路径跳转传参 + name命名路由的跳转传参
11. Vuex：基本认知，创建一个空仓库，如何提供数据，访问数据(通过store，通过mapState)，严格模式(vuex遵循单向数据流)，mutations(基本使用，提交传参，mapMutations)，actions(基本使用，mapActions)，getters，vuex分模块(访问模块中的state/getters/mutation/action的调用语法)
12. Vue3初识与基础：认识Vue3，create-vue创建项目，熟悉项目目录和关键文件，
13. 组合式API：setup，reactive，ref函数，computed，watch(基本使用，立即执行，深度侦听，精确侦听)，生命周期函数，父子通信(父传子与子传父)，模版引用，provide和inject
14. TypeScript: 认识TS，类型注解，注解数组，联合类型和别名类型，函数类型(概念和基本使用，可选参和无返回值)，interface(概念和基本使用，可选设置和继承)，type注解对象类型，字面量类型，类型推论和any类型，类型断言，泛型概率理解和泛型接口，泛型type和泛型函数，泛型约束
15. Vue3与TS的结合：环境创建，为ref/reactive/计算属性/事件处理函数/模版引用/props/emits标注类型，可选链，类型声明文件d.ts
16. Pinia的介绍与使用：环境搭建和基础使用，getters和异步action，storeToRefs和调试
17. 拓展：mock数据(模拟接口+生成数据)，单元测试，组件测试，Role Base Access Control，Echarts

## NOTE
有什么不知道或者不确定的必要内容请明确的询问我，不要自己猜测。
