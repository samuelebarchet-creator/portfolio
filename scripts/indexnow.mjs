// Notify Bing (and other IndexNow engines) about every URL in the live sitemap.
// Usage: npm run indexnow   (run after a production deploy)
const HOST = 'www.samuelebarchet.com';
const KEY = 'b16c8fccce474518a86e987744e5710a';

const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URL inviati → HTTP ${res.status}`);
if (!res.ok) console.log(await res.text());
