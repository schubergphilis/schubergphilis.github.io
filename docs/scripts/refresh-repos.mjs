#!/usr/bin/env node
// Regenerates src/data/repos.json from the schubergphilis GitHub org, so the
// site build has no network dependency. Run via `mise run docs-repos` (needs
// an authenticated `gh` CLI).
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ORG = 'schubergphilis';
const MAX_AGE_DAYS = 365;
const EXCLUDE = new Set(['schubergphilis.github.io', '.github']);

const raw = execFileSync(
	'gh',
	[
		'repo',
		'list',
		ORG,
		'--source',
		'--no-archived',
		'--visibility',
		'public',
		'--limit',
		'1000',
		'--json',
		'name,description,url,pushedAt,licenseInfo',
	],
	{ encoding: 'utf8' },
);

const cutoff = Date.now() - MAX_AGE_DAYS * 24 * 60 * 60 * 1000;

// GitHub reports a detected license as a `licenseInfo.key`; repos without a
// LICENSE file have no `licenseInfo` at all, and repos whose license file it
// cannot match to a known license get the `other` pseudo-license (SPDX
// `NOASSERTION`). Neither counts as open source for our purposes.
const hasOpenSourceLicense = (repo) => repo.licenseInfo !== null && repo.licenseInfo.key !== 'other';

const repos = JSON.parse(raw)
	.filter((repo) => !EXCLUDE.has(repo.name))
	.filter(hasOpenSourceLicense)
	.filter((repo) => new Date(repo.pushedAt).getTime() >= cutoff)
	.sort((a, b) => new Date(b.pushedAt) - new Date(a.pushedAt))
	.map(({ name, description, url, pushedAt }) => ({
		name,
		description: description ?? '',
		url,
		pushedAt,
	}));

const outFile = fileURLToPath(new URL('../src/data/repos.json', import.meta.url));
writeFileSync(outFile, `${JSON.stringify(repos, null, '\t')}\n`);
console.log(`Wrote ${repos.length} repos to ${outFile}`);
