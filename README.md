[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-CodeSprint-blue?style=for-the-badge)](https://YOUR-VERCEL-URL.vercel.app)

# CodeSprint

A JavaScript learning platform — theory lesson, then drills. Pick a section, drill down into a topic, work through a short interactive lesson (runnable code examples + MCQs), then solve real coding challenges against a sandboxed test runner. Sign up with email + OTP verification to keep progress tied to your account.

Built with React, React Router, and Tailwind CSS.

## What it does

- **4 sections, 25 topics, 318 drills** (67 Easy, 114 Medium, 77 Hard — mirroring a real course structure and covering everything from syntax basics through classic interview problems (Two Sum, binary search, bubble/selection sort, valid parentheses, LRU-style caching patterns, Roman numerals, merge intervals, Kadane's algorithm, and more):
  - **JavaScript Basics** — Variables, Booleans, Operators, Strings, Conditionals, Functions I, Arrays, Objects, Loops
  - **Intermediate JavaScript** — Array Methods, Objects II, Scope (closures), Functions II, Asynchronous JavaScript, Classes
  - **JavaScript DOM Exercises** — Selector Methods, Events & Interactions, DOM Manipulation, DOM Fundamentals, DOM Recursive Functions
  - **JavaScript Practice** — Fundamentals, Arrays, Objects, Dates, Sets
- **A lesson before every topic**: a full-bleed, step-by-step slide view — theory bullets, a runnable code example (with its own mini console), then multiple-choice "what's the output?" questions — before you get to the drills. Progress only unlocks the "Continue" button once you've run the example or answered the question.
- **In-browser code editor** for the drills themselves: write real JavaScript, no setup required.
- **Sandboxed test runner** with three execution modes:
  - plain functions (`solve(...args)` → return value)
  - DOM-read challenges (`solve(container)` → return value, against a real detached DOM node)
  - DOM-mutate challenges (your statements run against a live container; tests assert on the resulting DOM — click events, class toggles, appended elements, etc.)
  - Async solutions (`async function solve()`) are awaited automatically.
- **Sign up / log in with real email OTP verification**: create an account with your name, email, and password; a 6-digit code is generated and emailed to you by a small backend (via [Resend](https://resend.com)); enter it to verify. Progress is saved per-account (not just per-browser). **All content is gated behind login** — every section, lesson, and drill route redirects to `/login` if you're not signed in, and lands you back where you were headed once you are.
- **Progress tracking**: lessons + drills persist in `localStorage`, namespaced per signed-in account, with progress bars per topic, per section, and overall.
- **Fully responsive**: collapsible sidebar nav on mobile, split-pane layout on desktop.

## Backend: real email OTP verification

Signup/login now has a real (if minimal) backend in `server/`. Nothing OTP-related touches the browser except the 6-digit box the person types into:

- `POST /api/signup` — takes `{ name, email, password }`, hashes the password (bcrypt), generates a 6-digit OTP, hashes *that* too, stores it server-side with a 5-minute expiry, and emails it via Resend. The response never includes the code.
- `POST /api/resend-otp` — regenerates and re-sends the code, enforced by a **45-second server-side cooldown** (not just a disabled button — the backend rejects early requests with a `429` and the seconds remaining).
- `POST /api/verify-otp` — compares the submitted code against the stored hash, checks it hasn't expired, and on success returns a signed session token (JWT).
- `POST /api/login` — verifies the password hash and that the account is verified, returns the same kind of session token.

The frontend (`src/lib/authStore.js`) is just a `fetch` client for these four endpoints now. The only things stored in `localStorage` are the session token, email, and name — never the OTP.

Storage is currently an in-memory `Map` (`server/src/db.js`), so accounts reset whenever the backend restarts. That's the one deliberate shortcut here — swapping in a real database only means rewriting that one file.

## Tech stack

- **React 19** + **React Router** for the frontend app shell and routing
- **Tailwind CSS** for styling, with a custom design token set (see `tailwind.config.js`)
- **Vite** for the frontend dev server and build (proxies `/api` to the backend in dev — see `vite.config.js`)
- **Express** backend (`server/`) for auth + OTP email, using **bcryptjs** (password/OTP hashing), **jsonwebtoken** (sessions), and **Resend** (email delivery)

## Project structure

```
src/
  data/
    challenges.js          # hand-authored base: sections -> subcategories -> challenges
    moreChallenges.js       # AUTO-GENERATED extra challenges (see "Content generation tooling" below)
    lessons.js              # theory content per topic: text / runnable code / MCQ steps
  lib/
    runner.js               # sandboxed drill execution: fn / domRead / domMutate, async-aware
    snippetRunner.js        # lightweight console.log capture for lesson code examples
    authStore.js            # fetch client for the backend's auth/OTP endpoints
  hooks/
    useProgress.js          # per-account progress tracking (topics + lessons)
    useAuth.js               # session state + auth actions
  components/               # Sidebar, ProgressBar, RequireAuth (route guard)
  pages/                     # Dashboard, SectionPage, SubcategoryPage, ChallengePage, LessonPage,
                              # SignupPage, VerifyOtpPage, LoginPage
scripts/                    # generator: produces moreChallenges.js from scripts/specs-*.cjs
server/                     # backend: Express API for signup/OTP/login (see below)
  src/
    index.js                # routes: /api/signup, /api/resend-otp, /api/verify-otp, /api/login
    db.js                   # in-memory user store
    otp.js                  # OTP generation + expiry/cooldown constants
    email.js                # Resend client + the OTP email template
  .env.example
```

## Running locally

This now needs **two processes running at once**: the backend (emails the OTP) and the frontend (the app itself).

**1. Backend — one-time setup:**
```bash
cd server
npm install
cp .env.example .env
# edit .env: paste in RESEND_API_KEY and a JWT_SECRET (see "Configuring Resend" below)
```

**2. Backend — every time you work on this:**
```bash
cd server
npm run dev        # starts on http://localhost:4000
```

**3. Frontend — in a second terminal, from the project root:**
```bash
npm install
npm run dev         # starts on http://localhost:5173, proxies /api to the backend
npm run build        # production build to dist/
npm run preview      # preview the production build
```

Visit `http://localhost:5173`, sign up with a real email address you can check, and the OTP will land in that inbox within a few seconds.

## Configuring Resend (so OTP emails actually reach Gmail)

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day, 3,000/month — plenty for this).
2. Go to **API Keys** → create one → paste it into `server/.env` as `RESEND_API_KEY`.
3. **Sender address** — you have two options:
   - **Fastest (for testing):** leave `EMAIL_FROM=CodeSprint <onboarding@resend.dev>` as-is. Resend's shared testing address works immediately, no setup, and *does* deliver to real Gmail inboxes — perfect for local development.
   - **For a real deployment:** verify your own domain under **Domains** in the Resend dashboard (add the DNS records they give you), then set `EMAIL_FROM=CodeSprint <noreply@yourdomain.com>`. This avoids the "via resend.dev" note some clients show and lets you send from your own brand.
4. Restart the backend after editing `.env` (`npm run dev` picks up new env vars on restart, not live).

If `RESEND_API_KEY` is missing or invalid, `/api/signup` and `/api/resend-otp` fail with a clear error (visible in the backend terminal and returned to the frontend) instead of silently pretending to send.

## Content generation tooling

Most of the drill content (258 of the 318 challenges) was produced by a small generator in `scripts/`, not hand-typed — every expected test value was computed by actually **running a reference solution**, and every DOM challenge was verified against a real DOM (via `jsdom`) at generation time, so there's no hand-arithmetic to get wrong. `scripts/build.cjs` loads all the `scripts/specs-*.cjs` files (each just a list of `{ id, title, prompt, starter, ref, argsList }` objects), executes each `ref` against its `argsList`, self-checks DOM-mutation challenges by running a model solution and asserting the check function passes, then serializes the whole set to `src/data/moreChallenges.js`, which is merged onto the hand-authored base set in `src/data/challenges.js` at import time. Regenerate with:

```bash
npm install        # installs jsdom (devDependency, used only by this script)
node scripts/build.cjs
```

Adding more content is just adding another spec object to one of the `scripts/specs-*.cjs` files (or a new file, required from `scripts/build.cjs`) and re-running the script — no manual test-case math required.

## Extending it

**Add a drill** — either add a spec to `scripts/specs-*.cjs` and regenerate (recommended for anything with computable test cases — see above), or hand-write an entry directly in `src/data/challenges.js`. Three shapes (`fn`, `domRead`, `domMutate`) — see the inline comments at the top of that file.

**Add/edit a lesson** — new entry in `src/data/lessons.js`, keyed `"sectionSlug/subSlug"`. Steps are `text` (bullet list), `code` (runnable example), or `mcq` (prompt + options + explanation).

No other code changes needed — the sidebar, progress tracking, and both runners all pick up new content automatically.

## Possible next steps

- Syntax highlighting in the editor (CodeMirror/Monaco)
- A real database for the backend (currently an in-memory `Map` — see `server/src/db.js`) and server-synced progress
- Rate limiting / basic abuse protection on the signup and resend-otp endpoints
- Timed "challenge mode" and a leaderboard
- More sections: recursion deep-dive, algorithms, TypeScript basics
