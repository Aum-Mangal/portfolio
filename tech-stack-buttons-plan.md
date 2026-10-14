# Dynamic Tech Stack Buttons with Hover Descriptions

## Goal
Replace the fixed 3D Spline keyboard constraint with a flexible, interactive Skill Button component featuring Devicon/React icons and rich hover tooltips.

## Tasks
- [x] Task 1: Update `src/data/constants.ts` schema to support custom categories, descriptions, and icon URLs for user's tech stack → Verify: TypeScript compiler checks pass with `npx tsc --noEmit`
- [x] Task 2: Populate user's provided tech stack items (names, labels, icons, hover descriptions) in `SKILLS` constant → Verify: All 24 skill entries contain valid keys, labels, categories, and `shortDescription` strings
- [x] Task 3: Build interactive `SkillButton` component using Radix Tooltip (`@radix-ui/react-tooltip`) and Framer Motion hover animations → Verify: Component renders button with icon, label, and floating description card on hover
- [x] Task 4: Refactor `src/components/sections/skills.tsx` to render responsive skill button grid/categories with pointer events enabled → Verify: Buttons render cleanly across mobile and desktop viewport sizes
- [x] Task 5: Decouple `src/components/animated-background.tsx` so Spline keyboard doesn't crash or block foreground skill button clicks → Verify: Clean production build with 0 runtime errors
- [x] Task 6: Synchronize `src/components/sections/experience.tsx` and `projects.tsx` with updated `SkillNames` → Verify: Experience badges display matching icons and labels

## Done When
- [x] User can customize and add any technology stack items simply by providing list or editing `constants.ts`
- [x] Hovering over any skill button displays an instant tooltip card with the skill's description and icon
- [x] No build or runtime errors when running `npm run build`

## Notes
- All 24 technologies (Python, C++, DSA, TypeScript, JavaScript, FastAPI, React.js, SQL, PostgreSQL, REST APIs, AI, RAG, LangChain, FAISS, NLP, spaCy, Hugging Face, Compiler Design, Virtual Machines, Computer Architecture, OOP, Operating Systems, Docker, Git) are fully configured.
- Radix Tooltip (`@radix-ui/react-tooltip`) renders hover description cards with smooth fade-and-zoom animations.
