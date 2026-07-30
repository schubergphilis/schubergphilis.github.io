# AGENTS.md

Source for <https://schubergphilis.github.io/>, an Astro Starlight landing
page. The site lives in `docs/` (a subdirectory, not the repo root) so it can
sit alongside repo-level tooling like `.mise.toml` and `.github/`.

## Development

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through
[mise tasks](https://mise.jdx.dev/tasks/) defined in `.mise.toml`.

```sh
mise install            # install bun
mise run docs-install   # bun install
mise run docs-dev       # dev server at http://localhost:4321/
mise run docs-check     # astro check (type/content check)
mise run docs-build     # static build into docs/dist
mise run docs-repos     # regenerate docs/src/data/repos.json from the schubergphilis org (needs `gh` auth)
```

When starting the dev server directly (not via mise), use background mode:
`astro dev --background`, then `astro dev stop`/`status`/`logs`.

## Layout

- `docs/` — the Astro Starlight site.
  - `src/content/docs/index.mdx` — the landing page (single `template:
    splash` page, no sidebar).
  - `src/styles/custom.css` — SBP brand theme (colors, fonts) mapped onto
    Starlight's CSS custom properties.
  - `src/data/repos.json` — committed, auto-generated list of public
    `schubergphilis` repos that carry an open source license and have been
    pushed to in the last 365 days; regenerate with `mise run docs-repos`
    rather than editing by hand.
  - `scripts/refresh-repos.mjs` — what `mise run docs-repos` runs. Plain
    node, no dependencies, so it works without `bun install`.
- `.github/workflows/ci.yml` — build + type-check on push/PR, plus a
  `zizmor` job auditing the workflows themselves.
- `.github/workflows/deploy.yml` — builds and publishes `docs/dist` to
  GitHub Pages on every push to `main`. The repository's Pages source must
  be set to "GitHub Actions" (Settings → Pages) for this to work.
- `.github/workflows/refresh-repos.yml` — weekly (Monday) rerun of `mise run
  docs-repos`, committing `repos.json` to `main` if it changed. A push made
  with `GITHUB_TOKEN` does not trigger other workflows, so it dispatches
  `deploy.yml` afterwards instead of relying on the push event.
- `.github/dependabot.yml` — weekly updates for the `docs/` bun lockfile and
  the GitHub Actions used in workflows.

## Conventions

- This is an org/root-name GitHub Pages site (`schubergphilis.github.io`),
  so it deploys at the domain root — no Astro `base` path. Project sites
  (e.g. `schubergphilis.github.io/mdd/`) live in their own repos and are
  unaffected.
- Third-party GitHub Actions are pinned to a full commit SHA with a trailing
  `# vX.Y.Z` comment; Dependabot bumps them.
- `@astrojs/check` doesn't yet support TypeScript's native (7.x) compiler
  API, so `docs/package.json` pins `typescript` to `^6` — see
  `.github/dependabot.yml` for the corresponding ignore rule.
