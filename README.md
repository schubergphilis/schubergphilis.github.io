# schubergphilis.github.io

Source for <https://schubergphilis.github.io/> — a landing page indexing
Schuberg Philis's public open source projects, built with
[Astro Starlight](https://starlight.astro.build/).

## Develop

Tools are pinned with [mise](https://mise.jdx.dev/); tasks run through mise.

```sh
mise install            # install bun
mise run docs-install   # bun install
mise run docs-dev       # dev server at http://localhost:4321/
mise run docs-build     # static build into docs/dist
```

## Publish

Every push to `main` runs `.github/workflows/deploy.yml`, which builds
`docs/dist` and publishes it to GitHub Pages at
<https://schubergphilis.github.io/>. The Pages source must be set to
"GitHub Actions" in the repository settings.

## Layout

- `docs/` — the Astro Starlight site. Landing page:
  `docs/src/content/docs/index.mdx`.
- `.mise.toml` — pinned tools and dev/build tasks (run with `mise run <task>`).
- `.github/workflows/` — `ci.yml` (build + check on PRs) and `deploy.yml`
  (publish on push to main).

## Contributing

This repository is maintained by Schuberg Philis and is not open to
third-party contributions.
