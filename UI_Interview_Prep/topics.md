# UI Interview Prep — Questions & Hints
> Format: Questions only + directional hints. No code answers unless you ask.
> Your stack context: React.js · TypeScript · Redux · Three.js · Micro Frontends · Web Workers

---

## EASY — Core Foundations

### HTML & Accessibility

1. **What is the difference between `<section>`, `<article>`, `<div>`, and `<main>`?**
   > Hint: Think about semantics vs. layout containers. Which ones have implicit ARIA roles?

2. **What is `aria-label` vs `aria-labelledby` vs `aria-describedby`?**
   > Hint: One points to an element, one embeds text directly — when would each be more appropriate?

3. **How does a screen reader decide what to read aloud on a page?**
   > Hint: Think about the accessibility tree, focus order, and landmark roles.

4. **What does `tabindex="-1"` do vs `tabindex="0"`?**
   > Hint: One manages programmatic focus, the other adds to the natural tab sequence.

5. **What are the key WCAG 2.1 AA criteria for color contrast?**
   > Hint: There are different ratios for normal text, large text, and non-text content.

---

### CSS Fundamentals

6. **Explain the CSS box model. What does `box-sizing: border-box` change?**
   > Hint: Draw the layers mentally — content, padding, border, margin.

7. **What is specificity and how is it calculated?**
   > Hint: Think inline styles, IDs, classes/pseudo-classes, elements — assign a weight to each.

8. **What is the difference between `position: relative`, `absolute`, `fixed`, and `sticky`?**
   > Hint: What is the "containing block" for each? What triggers sticky to stop?

9. **How does `z-index` actually work — why doesn't it always work as expected?**
   > Hint: Stacking contexts. Which CSS properties create a new stacking context?

10. **What is BEM naming convention and why is it useful?**
    > Hint: Block, Element, Modifier. How does it prevent CSS specificity wars in large codebases?

---

### JavaScript Fundamentals

11. **What is the difference between `==` and `===`?**
    > Hint: Type coercion. What are the gotchas with `null == undefined`?

12. **Explain `var`, `let`, and `const` — hoisting, scope, TDZ.**
    > Hint: Temporal Dead Zone applies to `let`/`const`. How is function scope different from block scope?

13. **What is closure? Give a practical use case.**
    > Hint: A function "remembers" its lexical environment. Think event handlers, memoization, or module pattern.

14. **What is the difference between `null`, `undefined`, and undeclared?**
    > Hint: `typeof` gives different results. Only one throws a ReferenceError.

15. **How does `Array.map()` differ from `Array.forEach()`?**
    > Hint: Return value. Which one is chainable?

16. **What does `Promise.all()` do vs `Promise.allSettled()`?**
    > Hint: One short-circuits on rejection. The other waits for all — what does it return for each?

17. **What is event bubbling and event capturing?**
    > Hint: DOM events travel in two phases. `addEventListener`'s third argument controls which.

18. **What is `debounce` vs `throttle`?**
    > Hint: One delays until idle, one limits frequency. When would you use each in a search input vs scroll handler?

---

## Debounce & Throttling — Implementation Deep Dive

### Easy

**D1. What is debounce? What is throttle? When do you use each?**
> Hint: Debounce = wait until idle (search input). Throttle = limit to once per interval (scroll, resize). What happens to intermediate calls in each?

**D2. Implement a basic `debounce(fn, delay)` function.**
> Hint: You need a timer. On each call, clear the previous timer and set a new one. The function only runs after `delay` ms of silence.

**D3. Implement a basic `throttle(fn, limit)` function.**
> Hint: You need a flag. On first call, run the function and set the flag. Ignore all calls until the limit passes, then reset.

**D4. How would you debounce a search input in vanilla JS?**
> Hint: Attach an `input` event listener. Debounce the API call, not the event itself. What cleans up the timer when the component is destroyed?

---

### Medium

**D5. Implement debounce with a `leading` option (fire immediately on first call, then wait).**
> Hint: Add a `leading` flag. On first call with no active timer, fire immediately. Then start the timer to reset. How does this differ from trailing-only?

**D6. Implement `debounce` in React using `useRef` and `useCallback`.**
> Hint: Store the timer in a `useRef` so it persists across renders without triggering re-renders. Why can't you store it in `useState`?

**D7. How do you cancel a debounced function? Add a `.cancel()` method.**
> Hint: Return an object (or augment the returned function) with a `cancel` property that calls `clearTimeout` on the stored timer.

**D8. What is the memory leak risk with debounce/throttle in React? How do you fix it?**
> Hint: If the component unmounts while a timer is pending, the timer fires and tries to update unmounted state. Fix with `useEffect` cleanup returning `clearTimeout`.

**D9. Implement throttle using `requestAnimationFrame` instead of `setTimeout`.**
> Hint: `rAF` fires ~60 times/second, synced to repaint. Set a flag to block repeated calls. Reset flag inside the `rAF` callback. Better than `setTimeout(fn, 16)` — why?

**D10. Debounce vs throttle for these scenarios — which would you pick?**
> - Window resize handler updating layout
> - Search-as-you-type API call
> - Button that submits a form
> - Live mouse position tracker
> - Auto-save in a text editor
> Hint: Think about whether you want the LAST value (debounce) or REGULAR snapshots (throttle).

---

### Advanced

**D11. Implement a full `debounce(fn, delay, { leading, trailing })` — lodash-style.**
> Hint: `leading=true` fires on the first call. `trailing=true` fires after the last call. Both can be true simultaneously. What happens when both are true and only one call is made?

**D12. Implement a full `throttle(fn, limit, { leading, trailing })` — lodash-style.**
> Hint: Track `lastCallTime`. On each call, check if `now - lastCallTime >= limit`. Handle trailing by scheduling a timeout for the remaining time. Edge case: what if `leading=false` AND `trailing=false`?

**D13. How would you implement a rate limiter that allows at most N calls per second?**
> Hint: Maintain a queue of timestamps. On each call, prune timestamps older than 1 second. If queue length < N, allow the call. Otherwise, reject or queue it.

**D14. How does lodash's `_.debounce` handle the `maxWait` option?**
> Hint: `maxWait` forces execution even if the function keeps being called (prevents infinite deferral). Internally, it tracks `lastInvokeTime` and schedules a secondary timer. Where does debounce become throttle?

**D15. You have a debounced function inside a React custom hook. How do you ensure the latest version of the callback is always used without resetting the debounce timer?**
> Hint: Store the callback in a `useRef` and update it on every render. The debounced wrapper always calls `ref.current()` — so the timer doesn't reset, but the function is always fresh. This is the "stable ref" pattern.

---

## MEDIUM — React, TypeScript, State, Performance

### React Core

19. **Explain the React reconciliation algorithm (diffing). How does the `key` prop help?**
    > Hint: React walks two virtual DOM trees. Same type = update. Different type = unmount + remount. Keys identify list items across renders.

20. **What are controlled vs uncontrolled components?**
    > Hint: Where does the source of truth live — React state or the DOM?

21. **When does `useEffect` run? What are all the dependency array cases?**
    > Hint: No array = every render. Empty array = once on mount. With deps = when deps change. Return = cleanup.

22. **What is the problem with stale closures in React hooks?**
    > Hint: A function captures the value of a variable at the time it was created. Timer + state is the classic example.

23. **Explain `useMemo` vs `useCallback`. When is each an optimization vs a premature one?**
    > Hint: `useMemo` memoizes a computed value, `useCallback` memoizes a function reference. When does the re-creation actually cost something?

24. **What is React context? What problem does it solve and when should you NOT use it?**
    > Hint: Great for global state reads. Bad for high-frequency updates — why?

25. **Explain the difference between `useLayoutEffect` and `useEffect`.**
    > Hint: Timing — one fires synchronously after DOM mutations before the browser paints. When does this matter?

26. **What is the React Fiber architecture? What problem did it solve over the old stack reconciler?**
    > Hint: Work can be paused, prioritized, and resumed. Think time-slicing and Concurrent Mode.

27. **How does `React.memo` work? When does it fail to prevent re-renders?**
    > Hint: Shallow comparison. What happens when you pass an object literal or inline function as a prop?

28. **What is lifting state up? When would you use Zustand or Redux instead?**
    > Hint: Prop drilling becomes painful at a certain depth. What signals that local state management won't scale?

---

### TypeScript

29. **What is the difference between `interface` and `type` in TypeScript?**
    > Hint: Interfaces are extendable via declaration merging. Types can express union types. Practical preference?

30. **What are generics and why are they useful?**
    > Hint: Write functions/components that work with many types while preserving type safety. Think `Array<T>`.

31. **What is `unknown` vs `any`? Which is safer?**
    > Hint: `unknown` forces you to narrow the type before using it. `any` opts out of type checking entirely.

32. **What are discriminated unions? Give a use case.**
    > Hint: A shared literal field lets TypeScript narrow the type in a switch/if. Think API response states: `loading | success | error`.

33. **What is `keyof` and how is it used?**
    > Hint: Gets the union of keys of a type. Useful for creating type-safe property accessors.

34. **What is `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`?**
    > Hint: Utility types. What type do you get after applying each? Real-world: form state vs submitted data.

35. **How do you type a React component's props, including children?**
    > Hint: `React.FC<Props>` vs explicit return type. What's the difference with `React.PropsWithChildren`?

---

### Performance

36. **What is code splitting and how do you do it in React?**
    > Hint: `React.lazy` + `Suspense`. What is the difference between route-level and component-level splitting?

37. **What is a paint bottleneck vs a layout bottleneck in the browser?**
    > Hint: Layout (reflow) = geometry recalc. Paint = pixel fill. Composite = GPU. Which CSS properties trigger each?

38. **What is the difference between `will-change` and `transform: translateZ(0)` for GPU promotion?**
    > Hint: Both promote to a new compositing layer. When does this help and when does it waste GPU memory?

39. **What are Web Workers and what problem do they solve?**
    > Hint: JavaScript is single-threaded. Workers run on a separate thread. What can they NOT access?

40. **How do you measure frontend performance? What metrics matter?**
    > Hint: Core Web Vitals — LCP, INP, CLS. What does each measure and what's the "good" threshold?

41. **What is virtualization (windowing) in list rendering?**
    > Hint: Only render what's in the viewport. How does `react-window` / `react-virtual` work conceptually?

42. **Explain lazy loading images vs eager loading. What is the `loading="lazy"` attribute?**
    > Hint: Native browser feature. When does it not work (above-the-fold)?

---

### State Management

43. **What problem does Redux solve that React state cannot?**
    > Hint: Single source of truth, predictability, dev tooling (time-travel debugging). When is it overkill?

44. **What is the Redux data flow? (Action → Reducer → Store → View)**
    > Hint: Unidirectional. What makes reducers "pure functions"? Why does immutability matter?

45. **What is Redux Toolkit and how does it simplify Redux?**
    > Hint: `createSlice`, `createAsyncThunk`. How does Immer let you write "mutating" code safely?

46. **What is React Query / TanStack Query and how is it different from Redux for server state?**
    > Hint: Separation of concerns — server state (remote, async) vs client state (local, sync). Caching, stale-while-revalidate.

---

## HARD — Advanced, Architecture, System Design

### Micro Frontends

47. **What are micro frontends and what problems do they solve?**
    > Hint: Think about team autonomy, independent deployments, and tech stack diversity. What are the tradeoffs?

48. **What is Module Federation in Webpack 5? How does runtime sharing of code work?**
    > Hint: One app exposes modules, another consumes them at runtime without bundling. What happens with shared dependencies like React?

49. **How do you handle shared state between micro frontends?**
    > Hint: Custom events, shared store via CDN, URL as state, or event bus. What are the tradeoffs of each?

50. **How do you handle CSS isolation in micro frontends?**
    > Hint: Shadow DOM, CSS modules, scoped namespaces, or runtime style injection. What breaks with Shadow DOM?

51. **How do you handle authentication across micro frontends?**
    > Hint: Token storage, shared session, or a shell app that distributes auth context.

---

### Advanced React Patterns

52. **What is the compound component pattern? Give an example.**
    > Hint: Components share implicit state via context. Think `<Select>` / `<Option>` or `<Tabs>` / `<Tab>`.

53. **What is the render props pattern vs custom hooks? Which do you prefer and why?**
    > Hint: Both share stateful logic. Hooks are generally cleaner. When might render props still be useful?

54. **What is the Provider pattern and how does it differ from a simple context?**
    > Hint: Separates context creation, state management, and consumption. Think testability and reusability.

55. **What is Suspense for data fetching (Concurrent React)? How is it different from useEffect fetching?**
    > Hint: Component "throws" a Promise. React catches it, shows fallback, then re-renders when resolved. Think waterfall vs parallel.

56. **How do you implement an error boundary? What can it NOT catch?**
    > Hint: Class component with `componentDidCatch` / `getDerivedStateFromError`. It cannot catch async errors, event handlers, or errors in the boundary itself.

---

### Browser & Web APIs

57. **Explain the critical rendering path. How do you optimize it?**
    > Hint: HTML → DOM, CSS → CSSOM → Render Tree → Layout → Paint → Composite. What blocks rendering?

58. **What is CORS and how does it work?**
    > Hint: Browser security model. Preflight requests, `Access-Control-Allow-Origin`. What does the browser check vs the server?

59. **What is the difference between `localStorage`, `sessionStorage`, `cookies`, and `IndexedDB`?**
    > Hint: Think persistence, size limits, accessibility from JS vs HTTP headers, and use cases.

60. **How does HTTP/2 differ from HTTP/1.1 from a frontend performance perspective?**
    > Hint: Multiplexing, header compression, server push. Why does bundling everything into one file matter less with HTTP/2?

61. **What is a service worker and how does it enable offline-first apps?**
    > Hint: Intercepts network requests, can serve from cache. Lifecycle: install → activate → fetch. What is a cache-first strategy?

62. **What is the difference between `requestAnimationFrame` and `setTimeout` for animations?**
    > Hint: `rAF` is synced to the browser's repaint cycle (~16ms at 60fps). `setTimeout` is not.

---

### Three.js / WebGL (Your Speciality)

63. **What is the difference between the scene graph in Three.js and the DOM?**
    > Hint: Both are trees. Three.js uses a 3D spatial hierarchy. How does `Object3D.matrixWorldNeedUpdate` relate to performance?

64. **What is a draw call and why does minimizing draw calls matter for WebGL performance?**
    > Hint: Each draw call has CPU overhead to communicate with the GPU. How do `InstancedMesh` and geometry merging help?

65. **How does `useFrame` in React Three Fiber differ from `useEffect`?**
    > Hint: `useFrame` runs every animation frame inside the render loop. What should you NOT do inside it?

66. **What is a texture atlas and why use one?**
    > Hint: Reduces texture bind calls. Multiple sprites on one image, UV-mapped. Trade-off: harder to update individual textures.

67. **How do you handle memory leaks in Three.js / R3F?**
    > Hint: Geometries, materials, textures must be explicitly `.dispose()`d. R3F handles this for declarative objects — what about imperative ones?

---

### Testing

68. **What is the difference between unit, integration, and E2E tests? What should you write most of?**
    > Hint: Testing pyramid. Unit tests are fast/cheap. E2E are slow/expensive. Where is the sweet spot for React components?

69. **What does React Testing Library encourage over Enzyme?**
    > Hint: Test behavior, not implementation. Query by accessible roles, not class names.

70. **How do you test a component that uses `useEffect` with an API call?**
    > Hint: Mock the fetch/axios call. Use `waitFor` / `findBy` for async assertions. What does `act()` do?

71. **What is snapshot testing? When is it useful vs harmful?**
    > Hint: Captures the rendered output. Easy to write, easy to break, easy to blindly update. When does it add real value?

---

## AI IN UI — Emerging Topics

### AI-Powered Frontend

72. **What is retrieval-augmented generation (RAG) and how could it power a UI feature?**
    > Hint: Combine LLM with a vector search over your own data. Think "ask your docs" chatbots or smart search.

73. **How would you integrate a streaming LLM response into a React UI?**
    > Hint: Server-Sent Events (SSE) or ReadableStream. How do you progressively update state as tokens arrive?

74. **What are the UI/UX principles specific to AI features (chatbots, copilots, suggestions)?**
    > Hint: Latency perception, skeleton loaders for streaming, confidence indicators, fallbacks for hallucinations, and graceful degradation.

75. **What is an AI "tool call" and how does it relate to frontend events?**
    > Hint: The LLM decides to invoke a function. Your frontend must handle structured JSON outputs and render them meaningfully.

76. **How do you handle loading/error states for AI responses differently than regular API calls?**
    > Hint: AI can be slow (seconds), partial (streaming), or wrong (hallucinations). Optimistic UI is risky. What patterns help?

77. **What is prompt injection from a frontend security perspective?**
    > Hint: User input becomes part of a prompt. Malicious input could manipulate the model. How do you sanitize/scope user input?

78. **How would you design a UI component for displaying AI-generated content safely?**
    > Hint: Markdown rendering (XSS risk), citation links, disclaimer labeling, copy-to-clipboard, regenerate actions.

79. **What are vector embeddings and how could a frontend app use them?**
    > Hint: Semantic search. You don't send keywords — you send meaning. How does similarity search differ from SQL LIKE queries?

80. **What is the Vercel AI SDK or LangChain.js? What do they abstract away?**
    > Hint: They handle streaming, tool calls, message history, and model switching. What would you have to manually implement without them?

81. **How do you A/B test AI-generated UI copy or recommendations?**
    > Hint: Treat AI output as a variant. Measure CTR, engagement, or task completion rate. How is this different from traditional A/B tests?

---

## BONUS — Architecture & Design

82. **What is the difference between server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR)?**
    > Hint: When is HTML generated? Who sends it? How does hydration work? What are the SEO/performance tradeoffs?

83. **What are design tokens and how do they power a design system?**
    > Hint: Primitive values (colors, spacing, typography) stored as named variables. How do themes (dark/light) map to token aliases?

84. **How would you architect a reusable component library for a large org like Target?**
    > Hint: Versioning strategy, peer dependencies, Storybook, design token integration, accessibility as default, tree-shaking.

85. **What is the difference between feature flags and A/B testing?**
    > Hint: Feature flags = binary on/off, often for rollout safety. A/B = percentage split for experimentation with measurement.

86. **How do you approach performance budgets in CI/CD?**
    > Hint: Bundle size limits, Lighthouse score thresholds. What happens when a PR exceeds the budget — block, warn, or notify?

87. **What is tree-shaking and how does your module structure affect it?**
    > Hint: Dead code elimination at bundle time. Requires ES modules (`import/export`). Side effects in `package.json`. Named vs default exports.

88. **How does the browser's event loop work? What is the microtask queue vs the macrotask queue?**
    > Hint: Microtasks (Promises, queueMicrotask) drain completely before the next macrotask (setTimeout, setInterval). How does this affect `async/await`?

---

*Total: 88 questions across Easy (18) · Medium (28) · Hard (24) · AI in UI (10) · Bonus Architecture (7)*
*Weekly test schedule: See `weekly_test.md`*

---

## Machine Coding Round
> Build a working component/feature in 45 mins. Judged on: correctness, code structure, edge cases, UX polish.

### Easy Components (warm-up, 20-30 mins)

**M1. Star Rating Component**
- Clickable stars (1–5), hover highlight, selected state
- > Hint: Track `hovered` and `selected` state separately. How do you handle the highlight on hover vs click?

**M2. Accordion / FAQ Component**
- Expand/collapse sections, only one open at a time
- > Hint: Store which index is open. What changes when you click an already-open item?

**M3. Progress Bar**
- Animated progress bar with percentage display, configurable via props
- > Hint: CSS width driven by state. How do you animate smoothly with `transition`?

**M4. Toggle Switch**
- Accessible on/off toggle with keyboard support
- > Hint: `role="switch"`, `aria-checked`, handle `Space` key. How is this different from a checkbox?

**M5. Modal / Dialog**
- Open/close modal, close on backdrop click, trap focus inside, close on Escape
- > Hint: Focus trap is the hard part. Which element gets focus when modal opens? What is `inert`?

---

### Medium Components (core interview level, 30-45 mins)

**M6. Autocomplete / Search with Debounce**
- Input → debounced API call → dropdown results → keyboard navigation (↑↓ Enter)
- > Hint: Debounce the fetch. Store `results`, `activeIndex`, `isOpen` in state. Handle loading + empty states.

**M7. Infinite Scroll List**
- Load more items as user scrolls to bottom, loading spinner, no duplicate fetches
- > Hint: `IntersectionObserver` on a sentinel element at the bottom. Track `page`, `isLoading`, `hasMore`.

**M8. Drag and Drop List**
- Reorder list items by dragging
- > Hint: HTML5 drag events (`dragstart`, `dragover`, `drop`). Store `dragIndex`. Swap array items on drop.

**M9. Multi-select Dropdown**
- Searchable dropdown with checkboxes, selected tags shown, clear all button
- > Hint: Store `selected` as a Set. Filter options by search string. Show selected as chips above input.

**M10. Tab Component**
- Tabs with active state, keyboard navigation (←→), lazy load tab content
- > Hint: `role="tablist"`, `role="tab"`, `aria-selected`. Arrow keys change `activeTab`. Content renders only when tab is active.

**M11. Form with Validation**
- Multi-field form (name, email, password), inline validation, submit disabled until valid
- > Hint: Validate on blur, show errors per field. Use a `errors` object in state. When is the form "dirty"?

**M12. Toast / Notification System**
- Show toasts (success/error/info), auto-dismiss after 3s, stack multiple, dismiss on click
- > Hint: Store array of toasts with unique IDs. `setTimeout` per toast for auto-dismiss. Cleanup timeout on unmount.

---

### Hard Components (senior-level, 45-60 mins)

**M13. Virtualized List**
- Render only visible rows for a 10,000 item list (no library)
- > Hint: Calculate `startIndex` and `endIndex` from `scrollTop` and `itemHeight`. Absolute position each visible row. Total height = `items.length * itemHeight`.

**M14. Kanban Board**
- Drag cards between columns (Todo/In Progress/Done), persist column state
- > Hint: State is `{ [columnId]: Card[] }`. On drop, remove from source column, add to target. Handle drop on column vs drop on card.

**M15. Rich Text Editor (basic)**
- Bold, italic, underline buttons, contentEditable div, output HTML
- > Hint: `document.execCommand` (legacy) or `Selection` + `Range` API. How do you check if selected text is already bold?

**M16. Calendar / Date Picker**
- Month view, navigate prev/next month, select a date, highlight today
- > Hint: Generate days grid from `new Date(year, month, 1)`. Handle leading empty cells for first day of month offset.

**M17. Polling Component**
- Fetch data every N seconds, stop on unmount, show last updated time
- > Hint: `setInterval` in `useEffect`, clear in cleanup. How do you avoid a fetch starting after unmount?

---

### JS Implementation (GFE-style, no framework)

**M18. Implement `Promise.all()` from scratch**
- > Hint: Return a new Promise. Track resolved count. Reject immediately on any rejection.

**M19. Implement an Event Emitter (on, off, emit)**
- > Hint: Store listeners in a Map of `event → [callbacks]`. `emit` calls all. `off` removes one.

**M20. Implement `curry(fn)`**
- > Hint: Return a function that accumulates args until `args.length >= fn.length`, then calls `fn`.

**M21. Implement `pipe(...fns)` and `compose(...fns)`**
- > Hint: `pipe` applies left to right, `compose` right to left. Both use `reduce`.

**M22. Implement `memoize(fn)`**
- > Hint: Cache results by args key. What do you use as the cache key for multiple args?

**M23. Implement `classnames(...args)` utility**
- > Hint: Handle strings, objects `{active: true}`, arrays. Filter falsy values, join with space.

---

*Machine coding tip: Always start by clarifying requirements, then state → render → events → edge cases → polish*


# Daily Study Routine
> Goal: Senior Frontend Developer role in North India (NCR/Gurugram/Noida)
> Profile: 5 YOE · React · Redux · Three.js · Micro Frontends · Target Corp

---

## Weekdays (Mon–Fri)

| Time | Activity | Duration |
|------|----------|----------|
| 7:30 – 9:00 AM | DSA — 2 problems (NeetCode order) | 1.5 hrs |
| 9:00 – 9:30 AM | Get ready for office | — |
| 10:00 – 5:30 PM | Office | — |
| 6:30 – 7:30 PM | UI Concepts — 3-4 questions from topics.md | 1 hr |
| 7:30 – 8:30 PM | GFE JS Implementation (debounce, curry, Promise, etc.) | 1 hr |

**Total: ~3.5 hrs/day**

---

## Weekends (Sat–Sun)

| Time | Activity | Duration |
|------|----------|----------|
| 9:00 – 11:00 AM | DSA — 3-4 problems + REVISION.md | 2 hrs |
| 11:30 – 1:30 PM | Machine Coding — 1 full component (topics.md M1–M23) | 2 hrs |
| Lunch break | Rest | — |
| 3:00 – 4:30 PM | System Design — 1 topic (frontend architecture) | 1.5 hrs |
| 4:30 – 5:30 PM | Weekly Test — weekly_test.md | 1 hr |

**Total: ~6.5 hrs/day**

---

## Weekly Time Budget

| Topic | Time/week |
|-------|-----------|
| DSA | ~10 hrs |
| UI Concepts | ~5 hrs |
| JS Implementation | ~5 hrs |
| Machine Coding | ~2 hrs |
| System Design | ~1.5 hrs |
| Revision | ~2 hrs |
| **Total** | **~25.5 hrs** |

---

## Topic Priority Order

### DSA (NeetCode Roadmap)
1. Two Pointers ← current
2. Sliding Window
3. Binary Search (already partially done)
4. Stack
5. Trees (basics only — not deep for UI roles)

### UI Concepts (topics.md)
- JS Fundamentals first (closures, promises, event loop)
- Debounce & Throttling ← current
- React Core + Hooks
- Performance
- TypeScript

### JS Implementation (GFE)
- Debounce / Throttle ← done
- Promise.all, Promise.race, Promise.any
- Event Emitter
- Curry, Pipe, Compose
- Memoize

### Machine Coding (one per weekend)
- Start with: Autocomplete (M6) ← most common
- Then: Toast System (M12), Infinite Scroll (M7), Tabs (M10)

### System Design (one per weekend)
- Design a Component Library
- Design Micro Frontend Architecture
- Design Autocomplete at Scale
- Design a Real-time Dashboard

---

## Rules
- Morning DSA = non-negotiable (fresh brain = better problem solving)
- Skip a day? No guilt — just continue next day, don't try to catch up all at once
- After 4-5 weeks at this pace → interview ready
- Always solve before checking solution — hints only!

---

## Target Timeline
- **Week 1-2:** Two Pointers + Sliding Window + JS Implementations
- **Week 3-4:** Binary Search + Stack + Machine Coding practice starts
- **Week 5-6:** Mock interviews + revision + system design
- **Week 6+:** Start applying actively
