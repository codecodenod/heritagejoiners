#!/usr/bin/env node
/**
 * Refresh src/data/lastmod.json from local file mtimes.
 *
 * Run this BEFORE committing, whenever a page's content has genuinely changed:
 *   npm run lastmod
 *
 * Only ever moves a date FORWARD, so touching a file without changing it
 * cannot rewrite history backwards.
 *
 * Never run this in CI. A fresh clone resets every mtime to the checkout time,
 * which would stamp the whole site with today's date and recreate the exact
 * problem this file exists to fix. The guard below refuses to run if the mtimes
 * look like a fresh clone.
 */
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { globSync } from 'node:fs';

const MAP = 'src/data/lastmod.json';
const day = (p) => new Date(statSync(p).mtimeMs).toISOString().slice(0, 10);

const files = [
  ...globSync('src/pages/**/*.astro'),
  ...globSync('src/content/blog/*.md'),
];

const routeFor = (p) => {
  if (p.startsWith('src/content/blog/')) return '/blog/' + p.slice(17, -3);
  const rel = p.slice('src/pages/'.length, -'.astro'.length);
  if (rel.includes('[')) return null;
  if (rel === 'index') return '/';
  return '/' + (rel.endsWith('/index') ? rel.slice(0, -'/index'.length) : rel);
};

// Fresh-clone guard: if every mtime lands in the same few seconds, bail out.
const times = files.map((f) => statSync(f).mtimeMs);
if (times.length > 5 && Math.max(...times) - Math.min(...times) < 10_000) {
  console.log('Skipping: every mtime is identical, so this is a fresh clone (CI).');
  console.log('lastmod.json is committed on purpose — nothing to do here.');
  process.exit(0);
}

const map = JSON.parse(readFileSync(MAP, 'utf8'));
const changed = [];
for (const f of files) {
  const route = routeFor(f);
  if (!route) continue;
  const d = day(f);
  if (!map[route] || d > map[route]) {
    changed.push(`${route}  ${map[route] ?? '(new)'} -> ${d}`);
    map[route] = d;
  }
}

writeFileSync(MAP, JSON.stringify(Object.fromEntries(Object.entries(map).sort()), null, 2) + '\n');
console.log(changed.length ? `Updated ${changed.length}:\n  ${changed.join('\n  ')}` : 'Nothing to update.');
