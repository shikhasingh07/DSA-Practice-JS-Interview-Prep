# UI Interview Checklist

---

## Custom React Hooks

### Done ✅
- [x] useBreakpoint — window resize + breakpoint matching
- [x] useSet — Set-based state with stable callbacks
- [x] useEventListener — latestHandler ref pattern, cleanup
- [x] useInterval — setInterval + ref pattern for fresh callback
- [x] useHover — mouseenter/mouseleave tracking
- [x] useDebounce — delay value update
- [x] useClickOutside — detect click outside an element
- [x] useClickAnywhere — detect click anywhere on page
- [x] usePrevious — track previous value of a prop/state
- [x] useToggle — boolean toggle with stable handler
- [x] useBoolean — boolean state with set/toggle/reset
- [x] useCounter — count increment/decrement/reset
- [x] useArray — array state with push/pop/filter helpers
- [x] useMap — Map-based state management
- [x] useCycle — cycle through a list of values
- [x] useDefault — state with default fallback
- [x] useEffectOnce — run effect only on mount
- [x] useFocus — track element focus state
- [x] useKeyPress — detect specific key presses
- [x] useQuery — URL query param state
- [x] useRenderFirst — detect if first render
- [x] useTimeOut — setTimeout with cleanup
- [x] useObject — POJO state with merge + validation
- [x] useThrottle — interval-based value throttling with setTimeout

### Pending
- [x] useStep — multi-step counter with next/prev/reset/setStep
- [ ] useLocalStorage — sync state with localStorage
- [ ] useIntersectionObserver — element visibility detection
- [ ] useFetch — async data fetching with loading/error state
- [x] useWindowSize — track window width/height
- [x] useInputControl — controlled input with touched/dirty/different tracking

---

## React Components

### Done ✅
- [x] Accordion — multiple sections open, Set-based state
- [x] Tabs — active tab state
- [x] Todo — CRUD with list state
- [x] ContactForm — controlled form inputs
- [x] JobBoard — data fetch + list render
- [x] GridHighLight — grid hover highlight

### Pending
- [ ] Modal / Dialog — portal, backdrop click, ESC key close
- [ ] Toast / Notification — auto-dismiss, queue
- [ ] Infinite Scroll — IntersectionObserver + paginated fetch
- [ ] Autocomplete / Typeahead — debounced search, keyboard nav
- [ ] Star Rating — click + hover state
- [ ] Multi-select Dropdown — checkbox list, search filter
- [ ] File Upload with Preview — drag & drop, image preview
- [ ] Carousel / Slider — prev/next, auto-play
- [ ] Virtual List — render only visible rows (react-window concept)

---

## JavaScript Utilities

### Easy — Done ✅
- [x] Chunk — split array into chunks
- [x] Clamp — clamp number between min/max
- [x] Classnames — conditional className joining
- [x] Curry — f(a,b,c) → f(a)(b)(c)
- [x] FindLastIndex — last index matching predicate
- [x] InRange — check if number in range
- [x] jQuery-like chaining
- [x] PromiseRace — first to resolve/reject wins
- [x] Type Utilities

### Medium — Done ✅
- [x] Debounce — clear + reset timer
- [x] DeepClone — recursive clone
- [x] DeepEquals — deep structural equality
- [x] DeepOmit — omit nested keys
- [x] Compose / Pipe — chain functions right-to-left / left-to-right
- [x] Memoize — cache results by args
- [x] CountBy — group + count by key
- [x] Intersection / IntersectionWith — common elements
- [x] IsEmpty — check empty object/array/string
- [x] JSONStringify — custom JSON serializer
- [x] Limit — limit function calls
- [x] ListFormat — format array as readable string
- [x] GetFromObj — safe nested property access
- [x] GetElementsByClassName — DOM traversal
- [x] HTMLSerialize — serialize DOM to HTML string
- [x] SquashObject — flatten nested object
- [x] MapAsyncLimit — async map with concurrency limit
- [x] CancellableInterval — interval with cancel support
- [x] Promise.all — resolve when all resolve
- [x] Promise.any — first to resolve
- [x] Promise.merge — merge multiple promises
- [x] Promise.timeout — reject after timeout
- [x] Promisify — callback → promise
- [x] Promise.resolve — wrap value in promise

### Hard — Done ✅
- [x] EventEmitter — on, off, emit
- [x] JSONStringify (full) — handles edge cases
- [x] BackboneModel — observable model pattern
- [x] DataSelection — data selection utility
- [x] TableOfContents — generate TOC from DOM

### Pending
- [x] unionBy — merge arrays by key, deduplicate ⭐
- [ ] throttle — lastCall timestamp check
- [ ] flatten — deep flatten (done via flat polyfill)
- [ ] groupBy — group array items by key

---

## JavaScript Polyfills (Adobe + Big Tech poochte hain!)
> Implement from scratch — very common in Adobe, Expedia interviews

### Done ✅
- [x] Array.prototype.filter polyfill
- [x] Array.prototype.reduce polyfill
- [x] Array.prototype.flat polyfill
- [x] Array.prototype.fill polyfill
- [x] Array.prototype.findIndex polyfill
- [x] Array.prototype.concat polyfill
- [x] Array.fromPairs polyfill
- [x] Function.prototype.bind polyfill
- [x] Function.prototype.call polyfill
- [x] Function.prototype.apply polyfill

### Pending
- [ ] Array.prototype.map polyfill
- [x] Promise.allSettled polyfill
- [ ] LRU Cache implementation ⭐ Adobe asks this

---

## DOM Manipulation (No framework — vanilla JS)
> Adobe specifically focuses on this

- [ ] createElement, appendChild, removeChild
- [ ] querySelector vs getElementById — difference
- [ ] Event delegation — parent pe listener
- [ ] event.target vs event.currentTarget
- [ ] innerHTML vs textContent — security difference (XSS!)
- [ ] DOM traversal — parentNode, children, nextSibling
- [ ] getBoundingClientRect — element position
- [ ] DocumentFragment — batch DOM updates
- [ ] Custom Events — dispatchEvent

---

## Accessibility / a11y (Airbnb specifically tests this!)
> Airbnb known question: Build accessible Tabs with correct ARIA

- [ ] ARIA roles — `role="tab"`, `role="tabpanel"`, `role="dialog"`, `role="alert"`
- [ ] ARIA states — `aria-selected`, `aria-expanded`, `aria-hidden`, `aria-disabled`
- [ ] ARIA properties — `aria-label`, `aria-labelledby`, `aria-describedby`
- [ ] Focus management — focus trap in Modal, restore focus on close
- [ ] Keyboard navigation — Tab, Shift+Tab, Arrow keys, Enter, Escape
- [ ] Skip links — "Skip to main content"
- [ ] Semantic HTML — `<nav>`, `<main>`, `<article>`, `<button>` vs `<div>`
- [ ] Live regions — `aria-live="polite"` for dynamic content
- [ ] Color contrast — WCAG AA (4.5:1 ratio)

---

## Concepts to Know for Interview

### React Core
- [ ] Virtual DOM & Reconciliation
- [ ] Fiber architecture (basics)
- [ ] Re-render triggers & optimization (memo, useMemo, useCallback)
- [ ] useRef vs useState — when to use which
- [ ] useEffect vs useLayoutEffect — timing difference
- [ ] Controlled vs Uncontrolled components
- [ ] Lifting state up vs Context vs Zustand
- [ ] Error Boundaries
- [ ] Portals — rendering outside root
- [ ] Concurrent features (Suspense, lazy)
- [ ] stale closure in useEffect — missing deps trap
- [ ] hooks rules — why no hooks inside conditionals/loops

### React 19 (2026 interviews mein poochha ja raha hai!)
- [ ] React Compiler — auto memoization, no more manual useMemo/useCallback
- [ ] `use` hook — unwrap promises/context anywhere
- [ ] `useActionState` — form action state management
- [ ] `useOptimistic` — optimistic UI updates
- [ ] `useFormStatus` — pending state for form submissions
- [ ] Server Components (stable) — server-only, zero JS bundle
- [ ] Actions — async transitions for forms

### JavaScript
- [ ] Event loop — call stack, microtask, macrotask
- [ ] Closures & lexical scope
- [ ] Prototype chain & inheritance
- [ ] this keyword — 4 rules (implicit, explicit, new, arrow)
- [ ] var vs let vs const — hoisting
- [ ] Promise vs async/await — error handling
- [ ] WeakMap / WeakRef — memory management
- [ ] Generator functions

### CSS / Layout
- [ ] Flexbox — axes, align-items vs justify-content
- [ ] Grid — template areas, auto-fill vs auto-fit
- [ ] Specificity — inline > id > class > tag
- [ ] BEM naming convention
- [ ] CSS variables
- [ ] Responsive design — media queries, mobile-first
- [ ] z-index stacking context
- [ ] CSS animations vs JS animations (performance)

### Browser / Web APIs
- [x] IntersectionObserver — visibility
- [x] MutationObserver — DOM changes
- [x] ResizeObserver — size changes
- [x] requestAnimationFrame — smooth animations
- [x] Web Workers — background threads
- [x] Service Workers — offline / caching
- [x] WebSocket / SSE / Long Polling — real-time

### Performance
- [ ] Core Web Vitals — LCP, INP (replaced FID in 2024), CLS
- [ ] Code splitting & lazy loading
- [ ] Tree shaking
- [ ] Image optimization — WebP, lazy, srcset
- [x] Virtualization — react-window
- [x] Debounce / Throttle
- [x] Memoization — useMemo, React.memo

---

## SSR / CSR / SSG

- [x] CSR — Client Side Rendering (SPA, slow first load, bad SEO)
- [x] SSR — Server Side Rendering (fast first load, good SEO, per request)
- [x] SSG — Static Site Generation (build time, fastest, blog/docs)
- [x] Hydration — server HTML + client JS attach (mismatch problem)
- [ ] ISR — Incremental Static Regeneration (Next.js — stale-while-revalidate)
- [ ] Streaming SSR — send HTML in chunks (React 18 + Suspense)
- [ ] React Server Components — server-only, no JS bundle
- [ ] getServerSideProps vs getStaticProps vs getStaticPaths
- [ ] Edge rendering — CDN pe run hota hai (Vercel Edge, Cloudflare Workers)

---

## Web Security

- [ ] XSS — Cross Site Scripting (sanitize input, CSP headers)
- [ ] CSRF — Cross Site Request Forgery (CSRF tokens, SameSite cookies)
- [ ] CORS — Cross Origin Resource Sharing (preflight, allow headers)
- [ ] Content Security Policy (CSP) — allowed sources for scripts/styles
- [ ] HTTPS / TLS — encrypt in transit
- [ ] JWT security — don't store in localStorage (XSS risk), use httpOnly cookie
- [ ] Clickjacking — X-Frame-Options header
- [ ] Rate Limiting — prevent abuse / brute force
- [ ] Input Sanitization — DOMPurify for HTML, never `innerHTML` with user data
- [ ] OAuth 2.0 / PKCE flow — secure auth for SPAs

---

## Advanced UI / React Patterns

- [ ] Compound Components pattern — `<Tabs>`, `<Tabs.Panel>` sharing context
- [ ] Render Props pattern — share logic via function prop
- [ ] HOC — Higher Order Component wrapping
- [ ] Context + useReducer — Redux-like state without library
- [ ] Zustand / Jotai — lightweight state management
- [ ] React Query / SWR — server state, caching, background refetch
- [ ] Code Splitting — `React.lazy` + `Suspense`
- [ ] Dynamic imports — `import()` on demand
- [ ] Module Federation — micro-frontends
- [ ] Design System — tokens, theming, component library

---

## Company-Specific Focus

### Airbnb ⭐
- [ ] Accessible Tabs component (ARIA roles + keyboard nav) — known interview question
- [ ] UI components with full accessibility
- [ ] Frontend system design with a11y + privacy lens
- [ ] OOP in JavaScript

### Adobe ⭐
- [x] JavaScript polyfills (reduce, bind, call, apply) — done!
- [ ] DOM manipulation without framework
- [ ] LRU Cache design
- [x] Accordion / UI components in React — done!
- [ ] `this` keyword — 4 rules
- [ ] Prototype chain & inheritance

### Expedia ⭐
- [ ] React component architecture at scale
- [ ] Search + filter UI with debounce
- [ ] Accessibility compliance

---

## Frontend System Design

- [ ] Autocomplete Search Bar (debounce, caching) ⭐ Expedia
- [ ] Photo Sharing App (upload, lazy load, virtualization) ⭐ Airbnb
- [ ] Chat Application (WebSocket, optimistic updates)
- [ ] Video Streaming UI (buffering, quality switch) ⭐ Adobe
- [ ] E-commerce / Travel Search (filters, sorting, pagination) ⭐ Expedia
- [ ] Google Docs / Collaborative Editor (OT / CRDT basics)
- [ ] Design System / Component Library ⭐ Adobe