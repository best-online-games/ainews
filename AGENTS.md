# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Front-end ($mol/$hyoo) source. Key files: `*.view.ts`, `*.view.tree`, `*.view.css.ts`, entry `index.html`. Built artifacts live in `app/-/` (e.g., `web.js`, `test.html`).
- `back/`: Lightweight Node proxy (`app.js`) with optional PM2 config (`ecosystem.config.js`).
- `theme/`: Global styling, theme demos, and helpers.
- `.github/workflows/`: CI build and deploy using `hyoo-ru/mam_build` (outputs to `ainews/app/-`).

## Build, Test, and Development Commands

- Local preview: `npm run start` in mam directory

## Coding Style & Naming Conventions

- Language: TypeScript + $mol components.
- Indentation: tabs; keep existing formatting.
- Files: pair `*.view.ts` with `*.view.tree` and optional `*.view.css.ts`.
- Names: prefix app scope with `$ainews_…` (e.g., `$ainews_app_feed`). Methods/vars in camelCase; avoid default exports.
- Keep modules small; memoize with `$mol_mem`/`$mol_mem_key` where needed.

## Commit & Pull Request Guidelines

- Commits: present tense, concise subjects; include scope when helpful (e.g., `feed: memoize rss requests`).
- PRs: clear description, linked issues, screenshots for UI changes, and brief test notes. Keep PRs focused and small.
