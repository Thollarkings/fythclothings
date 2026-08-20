# Test Infrastructure Setup Plan

## Goal
Set up a testing framework for the fyth-web Vite + React project, enabling unit and component testing before further feature work.

## Context
- Vite + React 19 project
- No test framework currently installed
- No existing test files

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Test runner | **vitest** | Native Vite integration, fast, supports React 19 |
| Component testing | **@testing-library/react** | Industry standard for React component tests |
| Assertion lib | **vitest built-in expect** | No extra dependency needed |
| Test file pattern | `**/*.{test,spec}.{js,jsx}` | Standard convention |
| Config location | `vitest.config.js` in project root | Vite-compatible, simple |

## Steps

1. Install dependencies: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`, `jsdom`
2. Add `vitest.config.js` with `test.environment = 'jsdom'`
3. Add `test` and `test:coverage` scripts to `package.json`
4. Create `src/test/setup.js` to import `@testing-library/jest-dom`
5. Add a sample smoke test in `src/App.test.jsx` to verify setup works
6. Verify with `npm test`

## Risks
- React 19 compatibility with testing-library: use latest versions
- Tailwind classes in components may require additional config if snapshot testing is used (not recommended initially)

## Validation
- `npm test` runs and passes the sample smoke test
- `npx vitest run --coverage` produces a coverage report
