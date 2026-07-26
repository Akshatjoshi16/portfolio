# Developer Portfolio

Premium, animated, dark/light-mode portfolio built with React, TypeScript, Tailwind CSS v4, and Framer Motion — themed for a Backend Developer exploring Generative AI / RAG.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build       # production build -> dist/
npm run preview     # preview the production build
```

## Where to edit your content

Everything personal lives in `src/data/`, so you never have to touch component code:

- `src/data/profile.ts` — name, tagline, intro, resume link, social links, about text, about stats
- `src/data/skills.ts` — skill categories, individual skills, proficiency %
- `src/data/projects.ts` — project cards (title, description, tech stack, problem solved, features, links)
- `src/data/timeline.ts` — education, experience, certifications, achievements, AI-journey milestones, coding profiles

Other things to update:

- `src/components/GithubStats.tsx` — set `GITHUB_USERNAME` to pull your real GitHub stats/streak/top-languages cards
- `public/resume.pdf` — drop your resume here (linked from the Hero and Navbar "Download Resume" buttons)
- `index.html` — page title, meta description, Open Graph image (`public/og-image.png`), canonical URL
- `public/favicon.svg` — swap for your own mark if you'd like
- `src/components/Contact.tsx` — the form currently just shows a "Message sent" state client-side; wire the `handleSubmit` function up to Formspree, EmailJS, or your own API route to actually deliver messages

## Design system

- Colors, fonts, and the glass/gradient utilities are defined as CSS variables in `src/index.css` (`@theme` block) — change the `--color-amber` / `--color-teal` / `--color-violet` values to shift the whole palette in one place.
- Light mode overrides live right below in the `:root[data-theme="light"]` block.
- The floating bottom-left console (`src/components/StatusHUD.tsx`) is the site's signature element — edit the `LINES` array to change what it displays.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · Lucide React · react-icons
