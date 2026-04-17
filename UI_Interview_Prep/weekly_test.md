# Weekly Test Plan — UI Interview Prep
> Rules: Time yourself. No Googling during the test. Review hints only after attempting.
> Each week = 5 questions. Mix of levels. ~45–60 min per session.

---

## Schedule Overview

| Week | Theme                          | Questions from topics.md   | Level Mix        |
|------|-------------------------------|----------------------------|------------------|
| 1    | HTML, CSS, JS Basics           | Q1–10, Q11–15              | Easy             |
| 2    | JS Advanced + Browser APIs     | Q16–18, Q57–62             | Easy + Medium    |
| 3    | React Core                     | Q19–28                     | Medium           |
| 4    | TypeScript Deep Dive           | Q29–35                     | Medium           |
| 5    | Performance & Optimization     | Q36–42                     | Medium + Hard    |
| 6    | State Management               | Q43–46, Q82–83             | Medium + Arch    |
| 7    | Micro Frontends                | Q47–51                     | Hard             |
| 8    | Advanced React Patterns        | Q52–56, Q68–71             | Hard             |
| 9    | Three.js / WebGL               | Q63–67                     | Hard (your zone) |
| 10   | AI in UI                       | Q72–81                     | AI Topics        |
| 11   | Architecture & System Design   | Q82–88                     | Bonus/Hard       |
| 12   | Full Mix (Mock Interview)      | Random 5 across all levels | All              |

---

## How to Use Each Week

1. **Monday** — Read the week's topic list. Note what you already know confidently vs what feels shaky.
2. **Wednesday** — Take the week's test (timed, no cheating). Write your answers in `answers/weekN.md`.
3. **Friday** — Review your answers. Read hints for questions you got wrong or felt unsure about.
4. **Weekend** — Optionally go deeper on one topic that felt weak.

---

## Week 1 — HTML, CSS, JS Basics
**Questions:** Q1, Q3, Q6, Q8, Q11, Q13, Q17

**Time limit:** 40 minutes

**Self-grade:**
- [ ] Q1 — Semantic HTML
- [ ] Q3 — Screen readers & accessibility tree
- [ ] Q6 — Box model
- [ ] Q8 — CSS positioning
- [ ] Q11 — == vs ===
- [ ] Q13 — Closures
- [ ] Q17 — Event bubbling vs capturing

**Reflection prompt:** Which question made you pause the longest? Why?

---

## Week 2 — JS Advanced + Browser APIs
**Questions:** Q15, Q16, Q18, Q58, Q59, Q62, Q88

**Time limit:** 45 minutes

**Self-grade:**
- [ ] Q15 — map vs forEach
- [ ] Q16 — Promise.all vs allSettled
- [ ] Q18 — Debounce vs throttle
- [ ] Q58 — CORS
- [ ] Q59 — Storage APIs
- [ ] Q62 — rAF vs setTimeout
- [ ] Q88 — Event loop + microtask queue

**Reflection prompt:** Can you explain the event loop with a Promise + setTimeout example from memory?

---

## Week 3 — React Core
**Questions:** Q19, Q21, Q22, Q23, Q26, Q27

**Time limit:** 45 minutes

**Self-grade:**
- [ ] Q19 — Reconciliation + keys
- [ ] Q21 — useEffect cases
- [ ] Q22 — Stale closures
- [ ] Q23 — useMemo vs useCallback
- [ ] Q26 — React Fiber
- [ ] Q27 — React.memo pitfalls

**Reflection prompt:** Can you draw the lifecycle of a functional component with 2 effects?

---

## Week 4 — TypeScript
**Questions:** Q29, Q31, Q32, Q33, Q34, Q35

**Time limit:** 40 minutes

**Self-grade:**
- [ ] Q29 — interface vs type
- [ ] Q31 — unknown vs any
- [ ] Q32 — Discriminated unions
- [ ] Q33 — keyof
- [ ] Q34 — Utility types
- [ ] Q35 — Typing React props

**Reflection prompt:** Write a type-safe function that reads any key from an object (using generics + keyof).

---

## Week 5 — Performance
**Questions:** Q36, Q37, Q38, Q39, Q40, Q41

**Time limit:** 45 minutes

**Self-grade:**
- [ ] Q36 — Code splitting
- [ ] Q37 — Paint vs layout bottleneck
- [ ] Q38 — GPU promotion
- [ ] Q39 — Web Workers
- [ ] Q40 — Core Web Vitals
- [ ] Q41 — Virtualization

**Reflection prompt:** From your work at Target — which of these techniques did you apply? How would you explain it in an interview?

---

## Week 6 — State Management
**Questions:** Q43, Q44, Q45, Q46, Q24, Q28

**Time limit:** 40 minutes

**Self-grade:**
- [ ] Q43 — Redux vs React state
- [ ] Q44 — Redux data flow
- [ ] Q45 — Redux Toolkit
- [ ] Q46 — React Query / server state
- [ ] Q24 — Context pitfalls
- [ ] Q28 — When to lift state vs use global store

**Reflection prompt:** Describe a real state management decision you made at Target. Would you make the same call today?

---

## Week 7 — Micro Frontends
**Questions:** Q47, Q48, Q49, Q50, Q51

**Time limit:** 50 minutes (deep topic)

**Self-grade:**
- [ ] Q47 — What are micro frontends
- [ ] Q48 — Module Federation
- [ ] Q49 — Shared state
- [ ] Q50 — CSS isolation
- [ ] Q51 — Shared auth

**Reflection prompt:** You used Micro Frontends at Target. How would you explain Module Federation's runtime sharing to a junior dev?

---

## Week 8 — Advanced React + Testing
**Questions:** Q52, Q53, Q55, Q56, Q68, Q69, Q70

**Time limit:** 50 minutes

**Self-grade:**
- [ ] Q52 — Compound components
- [ ] Q53 — Render props vs hooks
- [ ] Q55 — Suspense for data fetching
- [ ] Q56 — Error boundaries
- [ ] Q68 — Test types
- [ ] Q69 — RTL vs Enzyme
- [ ] Q70 — Testing async effects

**Reflection prompt:** What's the most complex component you've ever tested? What made it hard?

---

## Week 9 — Three.js / WebGL
**Questions:** Q63, Q64, Q65, Q66, Q67

**Time limit:** 45 minutes

**Self-grade:**
- [ ] Q63 — Scene graph vs DOM
- [ ] Q64 — Draw calls
- [ ] Q65 — useFrame vs useEffect in R3F
- [ ] Q66 — Texture atlas
- [ ] Q67 — Memory leaks

**Reflection prompt:** You reduced 3D rendering latency by 35% at Target. Explain the bottleneck and the fix as if in an interview.

---

## Week 10 — AI in UI
**Questions:** Q72, Q73, Q74, Q76, Q77, Q78

**Time limit:** 45 minutes

**Self-grade:**
- [ ] Q72 — RAG for UI features
- [ ] Q73 — Streaming LLM into React
- [ ] Q74 — AI UX principles
- [ ] Q76 — AI loading/error states
- [ ] Q77 — Prompt injection
- [ ] Q78 — Safe AI content rendering

**Reflection prompt:** Think of a feature in the Target product you worked on. How could AI have enhanced it?

---

## Week 11 — Architecture
**Questions:** Q82, Q83, Q84, Q86, Q87

**Time limit:** 50 minutes

**Self-grade:**
- [ ] Q82 — SSR vs SSG vs CSR
- [ ] Q83 — Design tokens
- [ ] Q84 — Component library architecture
- [ ] Q86 — Performance budgets in CI
- [ ] Q87 — Tree-shaking

**Reflection prompt:** If you were designing the Target vendor portal from scratch today, what architecture would you choose and why?

---

## Week 12 — Full Mock Interview
> Simulate a real 45-minute interview. Pick 5 questions randomly (one from each section).

**Rules:**
- Speak your answer out loud (simulate real interview)
- Time each question to ~8 minutes
- No hints allowed during the mock

**Random picker:** Roll 5 numbers: one from 1–18, one from 19–46, one from 47–67, one from 72–81, one from 82–88.

---

## Answer Tracking
Create files in `UI_Interview_Prep/answers/` as you go:
- `week1.md`, `week2.md` ... `week12.md`
- Each file: question → your answer → what you'd improve

---

*Last updated: April 2026*


# useImperativeHandle :- we will using it when from parent component we want to access the child component methods with doing the callback 
# with this hook remmber to use forwardRef and send proper ref + props


# Nested Roots 
# useImpertiveHandle