# UI Interview Prep — Questions & Hints
> Format: Questions only + directional hints. No code answers unless you ask.
> Your stack context: React.js · TypeScript · Redux · Three.js · Micro Frontends · Web Workers

---

## JavaScript — Senior Level

1. **What is closure? Give a practical use case.**
   > Hint: A function "remembers" its lexical environment. Think event handlers, memoization, or module pattern.

2. **What does `Promise.all()` do vs `Promise.allSettled()`?**
   > Hint: One short-circuits on rejection. The other waits for all — what does it return for each?

3. **What is event bubbling and event capturing?**
   > Hint: DOM events travel in two phases. `addEventListener`'s third argument controls which.

4. **What is `debounce` vs `throttle`?**
   > Hint: One delays until idle, one limits frequency. When would you use each in a search input vs scroll handler?

5. **How does the browser's event loop work? What is the microtask queue vs the macrotask queue?**
   > Hint: Microtasks (Promises, queueMicrotask) drain completely before the next macrotask (setTimeout, setInterval). How does this affect `async/await`?

6. **Explain `var`, `let`, and `const` — hoisting, scope, TDZ.**
   > Hint: Temporal Dead Zone applies to `let`/`const`. How is function scope different from block scope?

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
> Hint: Track `lastCallTime`. On each call, check if `now - lastCallTime >= limit`. Handle trailing by scheduling a timeout for the remaining time.

**D13. How would you implement a rate limiter that allows at most N calls per second?**
> Hint: Maintain a queue of timestamps. On each call, prune timestamps older than 1 second. If queue length < N, allow the call. Otherwise, reject or queue it.

**D14. You have a debounced function inside a React custom hook. How do you ensure the latest version of the callback is always used without resetting the debounce timer?**
> Hint: Store the callback in a `useRef` and update it on every render. The debounced wrapper always calls `ref.current()` — so the timer doesn't reset, but the function is always fresh. This is the "stable ref" pattern.

---

## React Core

7. **Explain the React reconciliation algorithm (diffing). How does the `key` prop help?**
   > Hint: React walks two virtual DOM trees. Same type = update. Different type = unmount + remount. Keys identify list items across renders.

8. **What are controlled vs uncontrolled components?**
   > Hint: Where does the source of truth live — React state or the DOM?

9. **When does `useEffect` run? What are all the dependency array cases?**
   > Hint: No array = every render. Empty array = once on mount. With deps = when deps change. Return = cleanup.

10. **What is the problem with stale closures in React hooks?**
    > Hint: A function captures the value of a variable at the time it was created. Timer + state is the classic example.

11. **Explain `useMemo` vs `useCallback`. When is each an optimization vs a premature one?**
    > Hint: `useMemo` memoizes a computed value, `useCallback` memoizes a function reference. When does the re-creation actually cost something?

12. **What is React context? What problem does it solve and when should you NOT use it?**
    > Hint: Great for global state reads. Bad for high-frequency updates — why?

13. **Explain the difference between `useLayoutEffect` and `useEffect`.**
    > Hint: Timing — one fires synchronously after DOM mutations before the browser paints. When does this matter?

14. **What is the React Fiber architecture? What problem did it solve over the old stack reconciler?**
    > Hint: Work can be paused, prioritized, and resumed. Think time-slicing and Concurrent Mode.

15. **How does `React.memo` work? When does it fail to prevent re-renders?**
    > Hint: Shallow comparison. What happens when you pass an object literal or inline function as a prop?

16. **What is lifting state up? When would you use Zustand or Redux instead?**
    > Hint: Prop drilling becomes painful at a certain depth. What signals that local state management won't scale?

---

## TypeScript

17. **What is the difference between `interface` and `type` in TypeScript?**
    > Hint: Interfaces are extendable via declaration merging. Types can express union types. Practical preference?

18. **What are generics and why are they useful?**
    > Hint: Write functions/components that work with many types while preserving type safety. Think `Array<T>`.

19. **What is `unknown` vs `any`? Which is safer?**
    > Hint: `unknown` forces you to narrow the type before using it. `any` opts out of type checking entirely.

20. **What are discriminated unions? Give a use case.**
    > Hint: A shared literal field lets TypeScript narrow the type in a switch/if. Think API response states: `loading | success | error`.

21. **What is `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`?**
    > Hint: Utility types. What type do you get after applying each? Real-world: form state vs submitted data.

22. **How do you type a React component's props, including children?**
    > Hint: `React.FC<Props>` vs explicit return type. What's the difference with `React.PropsWithChildren`?

---

## Performance

23. **What is code splitting and how do you do it in React?**
    > Hint: `React.lazy` + `Suspense`. What is the difference between route-level and component-level splitting?

24. **What is a paint bottleneck vs a layout bottleneck in the browser?**
    > Hint: Layout (reflow) = geometry recalc. Paint = pixel fill. Composite = GPU. Which CSS properties trigger each?

25. **What are Web Workers and what problem do they solve?**
    > Hint: JavaScript is single-threaded. Workers run on a separate thread. What can they NOT access?

26. **How do you measure frontend performance? What metrics matter?**
    > Hint: Core Web Vitals — LCP, INP, CLS. What does each measure and what's the "good" threshold?

27. **What is virtualization (windowing) in list rendering?**
    > Hint: Only render what's in the viewport. How does `react-window` / `react-virtual` work conceptually?

---

## State Management

28. **What problem does Redux solve that React state cannot?**
    > Hint: Single source of truth, predictability, dev tooling (time-travel debugging). When is it overkill?

29. **What is the Redux data flow? (Action → Reducer → Store → View)**
    > Hint: Unidirectional. What makes reducers "pure functions"? Why does immutability matter?

30. **What is Redux Toolkit and how does it simplify Redux?**
    > Hint: `createSlice`, `createAsyncThunk`. How does Immer let you write "mutating" code safely?

31. **What is React Query / TanStack Query and how is it different from Redux for server state?**
    > Hint: Separation of concerns — server state (remote, async) vs client state (local, sync). Caching, stale-while-revalidate.

---

## Micro Frontends

32. **What are micro frontends and what problems do they solve?**
    > Hint: Think about team autonomy, independent deployments, and tech stack diversity. What are the tradeoffs?

33. **What is Module Federation in Webpack 5? How does runtime sharing of code work?**
    > Hint: One app exposes modules, another consumes them at runtime without bundling. What happens with shared dependencies like React?

34. **How do you handle shared state between micro frontends?**
    > Hint: Custom events, shared store via CDN, URL as state, or event bus. What are the tradeoffs of each?

35. **How do you handle CSS isolation in micro frontends?**
    > Hint: Shadow DOM, CSS modules, scoped namespaces, or runtime style injection. What breaks with Shadow DOM?

36. **How do you handle authentication across micro frontends?**
    > Hint: Token storage, shared session, or a shell app that distributes auth context.

---

## Advanced React Patterns

37. **What is the compound component pattern? Give an example.**
    > Hint: Components share implicit state via context. Think `<Select>` / `<Option>` or `<Tabs>` / `<Tab>`.

38. **What is the render props pattern vs custom hooks? Which do you prefer and why?**
    > Hint: Both share stateful logic. Hooks are generally cleaner. When might render props still be useful?

39. **What is Suspense for data fetching (Concurrent React)? How is it different from useEffect fetching?**
    > Hint: Component "throws" a Promise. React catches it, shows fallback, then re-renders when resolved.

40. **How do you implement an error boundary? What can it NOT catch?**
    > Hint: Class component with `componentDidCatch` / `getDerivedStateFromError`. It cannot catch async errors or event handlers.

---

## Browser & Web APIs

41. **Explain the critical rendering path. How do you optimize it?**
    > Hint: HTML → DOM, CSS → CSSOM → Render Tree → Layout → Paint → Composite. What blocks rendering?

42. **What is CORS and how does it work?**
    > Hint: Browser security model. Preflight requests, `Access-Control-Allow-Origin`. What does the browser check vs the server?

43. **What is the difference between `localStorage`, `sessionStorage`, `cookies`, and `IndexedDB`?**
    > Hint: Think persistence, size limits, accessibility from JS vs HTTP headers, and use cases.

44. **What is a service worker and how does it enable offline-first apps?**
    > Hint: Intercepts network requests, can serve from cache. Lifecycle: install → activate → fetch. What is a cache-first strategy?

45. **What is the difference between `requestAnimationFrame` and `setTimeout` for animations?**
    > Hint: `rAF` is synced to the browser's repaint cycle (~16ms at 60fps). `setTimeout` is not.

---

## Testing

46. **What is the difference between unit, integration, and E2E tests?**
    > Hint: Testing pyramid. Unit tests are fast/cheap. E2E are slow/expensive. Where is the sweet spot for React components?

47. **What does React Testing Library encourage over Enzyme?**
    > Hint: Test behavior, not implementation. Query by accessible roles, not class names.

48. **How do you test a component that uses `useEffect` with an API call?**
    > Hint: Mock the fetch/axios call. Use `waitFor` / `findBy` for async assertions. What does `act()` do?

---

## Architecture & Design

49. **What is the difference between SSR, SSG, and CSR?**
    > Hint: When is HTML generated? Who sends it? How does hydration work? What are the SEO/performance tradeoffs?

50. **How would you architect a reusable component library for a large org?**
    > Hint: Versioning strategy, peer dependencies, Storybook, design token integration, accessibility as default, tree-shaking.

51. **What is the difference between feature flags and A/B testing?**
    > Hint: Feature flags = binary on/off, often for rollout safety. A/B = percentage split for experimentation with measurement.

52. **What is tree-shaking and how does your module structure affect it?**
    > Hint: Dead code elimination at bundle time. Requires ES modules (`import/export`). Side effects in `package.json`.

---

## Machine Coding Round
> Build a working component/feature in 45 mins. Judged on: correctness, code structure, edge cases, UX polish.

### Easy (20-30 mins)

**M1. Star Rating Component**
- Clickable stars (1–5), hover highlight, selected state
- > Hint: Track `hovered` and `selected` state separately.

**M2. Accordion / FAQ Component**
- Expand/collapse sections, only one open at a time
- > Hint: Store which index is open. What changes when you click an already-open item?

**M3. Toggle Switch**
- Accessible on/off toggle with keyboard support
- > Hint: `role="switch"`, `aria-checked`, handle `Space` key.

**M4. Modal / Dialog**
- Open/close modal, close on backdrop click, trap focus inside, close on Escape
- > Hint: Focus trap is the hard part. Which element gets focus when modal opens?

---

### Medium (30-45 mins)

**M5. Autocomplete / Search with Debounce**
- Input → debounced API call → dropdown results → keyboard navigation (↑↓ Enter)
- > Hint: Debounce the fetch. Store `results`, `activeIndex`, `isOpen` in state.

**M6. Infinite Scroll List**
- Load more items as user scrolls to bottom, loading spinner, no duplicate fetches
- > Hint: `IntersectionObserver` on a sentinel element at the bottom.

**M7. Drag and Drop List**
- Reorder list items by dragging
- > Hint: HTML5 drag events (`dragstart`, `dragover`, `drop`). Store `dragIndex`.

**M8. Multi-select Dropdown**
- Searchable dropdown with checkboxes, selected tags shown, clear all button
- > Hint: Store `selected` as a Set. Filter options by search string.

**M9. Tab Component**
- Tabs with active state, keyboard navigation (←→), lazy load tab content
- > Hint: `role="tablist"`, `role="tab"`, `aria-selected`. Arrow keys change `activeTab`.

**M10. Toast / Notification System**
- Show toasts (success/error/info), auto-dismiss after 3s, stack multiple
- > Hint: Store array of toasts with unique IDs. `setTimeout` per toast for auto-dismiss.

---

### Hard (45-60 mins)

**M11. Virtualized List**
- Render only visible rows for a 10,000 item list (no library)
- > Hint: Calculate `startIndex` and `endIndex` from `scrollTop` and `itemHeight`.

**M12. Kanban Board**
- Drag cards between columns (Todo/In Progress/Done)
- > Hint: State is `{ [columnId]: Card[] }`. On drop, remove from source column, add to target.

---

### JS Implementation (GFE-style)

**M13. Implement `Promise.all()` from scratch**
> Hint: Return a new Promise. Track resolved count. Reject immediately on any rejection.

**M14. Implement an Event Emitter (on, off, emit)**
> Hint: Store listeners in a Map of `event → [callbacks]`. `emit` calls all. `off` removes one.

**M15. Implement `curry(fn)`**
> Hint: Return a function that accumulates args until `args.length >= fn.length`, then calls `fn`.

**M16. Implement `pipe(...fns)` and `compose(...fns)`**
> Hint: `pipe` applies left to right, `compose` right to left. Both use `reduce`.

**M17. Implement `memoize(fn)`**
> Hint: Cache results by args key. What do you use as the cache key for multiple args?

**M18. Implement `classnames(...args)` utility**
> Hint: Handle strings, objects `{active: true}`, arrays. Filter falsy values, join with space.

---

*Total: 52 concept questions + 14 Debounce questions + 18 machine coding tasks*
*Weekly test schedule: See `weekly_test.md`*
