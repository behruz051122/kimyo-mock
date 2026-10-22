// Spektr kurator: internet uzilsa ham ochiladi. Ma'lumot IndexedDB da; bu yerda faqat sayt fayllari keshlanadi.
// HTML va k/*.json — avval tarmoq (yangi versiya darhol keladi), bo'lmasa kesh; assets/ (xeshli nomlar) — kesh.
const KESH = 'spektr-kurator-1';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) =>
  e.waitUntil(
    (async () => {
      for (const k of await caches.keys()) if (k !== KESH) await caches.delete(k);
      await self.clients.claim();
    })(),
  ),
);

// Birinchi ochilishda sahifa SW dan oldin yuklagan fayllar ro'yxatini yuboradi — ular ham keshlanadi.
self.addEventListener('message', (e) => {
  if (Array.isArray(e.data?.kesh)) e.waitUntil(caches.open(KESH).then((c) => Promise.all(e.data.kesh.map((u) => c.add(u).catch(() => {})))));
});

const saqla = (r, res) => {
  if (!res.ok || res.type === 'opaque') return;
  const nusxa = res.clone();
  caches.open(KESH).then((c) => c.put(r, nusxa));
};

self.addEventListener('fetch', (e) => {
  const r = e.request;
  const url = new URL(r.url);
  if (r.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.includes('/assets/')) {
    e.respondWith(
      caches.match(r).then(
        (bor) =>
          bor ??
          fetch(r).then((res) => {
            saqla(r, res);
            return res;
          }),
      ),
    );
    return;
  }
  e.respondWith(
    fetch(r)
      .then((res) => {
        saqla(r, res);
        return res;
      })
      .catch(async () => (await caches.match(r, { ignoreSearch: true })) ?? (r.mode === 'navigate' ? (await caches.match(self.registration.scope)) ?? (await caches.match(self.registration.scope + 'index.html')) : undefined) ?? Response.error()),
  );
});
