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
const dayOf = (ms) => new Date(ms).toISOString().slice(0, 10);
const mtime = (p) => statSync(p).mtimeMs;

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

/**
 * Some routes render the blog collection rather than only their own file, so a
 * new or edited post changes what they show without touching their source.
 * Those routes take the newest of their own mtime and their dependencies'.
 *   /blog and /sitemap   list every published post
 *   /areas/<town>        shows "Recent work in <town>" for posts tagged with it
 *   /areas/yorkshire     uses matchAny, so any post with an areas tag counts
 */
const posts = globSync('src/content/blog/*.md')
  .map((f) => ({ f, src: readFileSync(f, 'utf8') }))
  .filter(({ src }) => !/^draft:\s*true\s*$/m.test(src))
  .map(({ f, src }) => {
    const m = src.match(/^areas:\s*\[(.*)\]\s*$/m);
    const areas = m ? [...m[1].matchAll(/["']([^"']+)["']/g)].map((x) => x[1]) : [];
    return { f, areas };
  });

const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');

const dependenciesOf = (route) => {
  if (route === '/blog' || route === '/sitemap') return posts;
  const town = route.match(/^\/areas\/([a-z-]+)$/)?.[1];
  if (!town) return [];
  if (town === 'yorkshire') return posts.filter((p) => p.areas.length > 0);
  return posts.filter((p) => p.areas.some((a) => slug(a) === town));
};

const map = JSON.parse(readFileSync(MAP, 'utf8'));
const changed = [];
for (const f of files) {
  const route = routeFor(f);
  if (!route) continue;
  const newest = dependenciesOf(route).reduce((a, p) => Math.max(a, mtime(p.f)), mtime(f));
  const d = dayOf(newest);
  if (!map[route] || d > map[route]) {
    changed.push(`${route}  ${map[route] ?? '(new)'} -> ${d}`);
    map[route] = d;
  }
}

writeFileSync(MAP, JSON.stringify(Object.fromEntries(Object.entries(map).sort()), null, 2) + '\n');
console.log(changed.length ? `Updated ${changed.length}:\n  ${changed.join('\n  ')}` : 'Nothing to update.');
