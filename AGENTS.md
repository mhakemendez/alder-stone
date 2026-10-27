<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

## 🛠️ OpenCode Custom Agent & Skill Routing

### Tech Stack & Core Constraints
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Design Guidelines:** Prioritize high contrast, editorial spacing, and professional visual balance.

### UI/UX Automation Routing
When executing tasks related to visual component creation, front-end styling, mockups, or user landing pages:
1. Always load and execute the `.opencode/skills/ui-ux-pro-max/SKILL.md` skill module before generating layout structures.
2. Force the skill's internal reasoning checks to select an industrial/niche-appropriate color scheme and semantic typography token map.
3. Ensure all generated elements strictly follow clean, semantic Tailwind classes without overlapping styling layers.
