/**
 * Checks all 11 locales × 11 marketing/legal routes (121 URLs).
 * Default: fetch BASE_URL (http://localhost:4321) or DIST_DIR HTML.
 *
 * Overflow at 390px uses system Chrome via puppeteer-core when available.
 */
import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const LANGS = [
  "en",
  "cs",
  "ro",
  "ru",
  "fr",
  "de",
  "es",
  "it",
  "pl",
  "hu",
  "tr",
] as const;

const SLUGS = [
  "",
  "split-bill-app",
  "group-expense-tracker",
  "guides",
  "guides/how-to-split-a-restaurant-bill",
  "guides/how-to-split-trip-expenses",
  "support",
  "privacy-policy",
  "terms-of-service",
  "delete-account",
  "delete-data",
] as const;

const SITE = "https://cheqsplitapp.com";
const BASE = (process.env.BASE_URL ?? "http://localhost:4321").replace(/\/$/, "");

const FORBIDDEN = [
  "Как честно разделить счёт в ресторане",
  "Как честно разделить счёт в ресторане за 5 шагов",
  "Гайды по разделению общих расходов",
  "По строчкам чека",
  "Отсканируйте чек из ресторана",
  "Один ресторанный чек — общий в приложении или браузере",
  "Вся поездка — в одной общей записи",
  "Împărțiți cheltuielile, scanați bonurile și lăsați aplicația să calculeze restul",
  "Vezi, cine cui, cât datorează",
  "Restaurant & cafenea",
  "Casă & familie",
  "E potrivită pentru excursii la mai mulți oameni?",
  "Rulează și fără rețea?",
  "Cum împarți corect o notă de plată la restaurant",
  "Cum împarți corect o notă de plată în 5 pași",
  "Adaugă cheltuielile la timp",
  "Exemplu: împărțirea unui weekend între patru prieteni",
  "Înregistrează când o plată a fost făcută",
  "Ce face Înregistrează Plată?",
  "Pro Zeile teilen",
  "Erfasste Zahlungen festhalten",
  "Eine Übersicht behalten, zu der die Gruppe später zurückkehren kann",
  "Alles an einem Ort",
  "Mira, quién debe a quién",
  "Tus gastos, un solo hilo",
  "Dividir línea a línea",
  "Productos compartidos",
  "Revisa y edita cada producto",
  "Termina con un registro que el grupo pueda consultar más adelante",
  "Crea el viaje desde el principio",
  "Tout le groupe, un seul fil",
  "Voyez, qui doit quoi à qui",
  "Restaurants & bars",
  "Choisissez qui a partagé la dépense",
  "Ajoutez les dépenses rapidement",
  "Tout le voyage dans un seul historique partagé",
  "Tutte le uscite, un solo filo",
  "Trova, chi, quanto, a chi",
  "Tieni viaggio e report a portata",
  "Acquisti insieme",
  "È adatto al solo ristorante?",
  "Scontrino in pochi secondi",
  "Crea il viaggio fin dall'inizio",
  "Tutto il viaggio in un unico storico condiviso",
  "Rozdělte účet po řádcích",
  "Vytvořeno pro reálné sdílené výdaje",
  "Uložte cestu i report",
  "Celá cesta v jednom společném přehledu",
  "Egy helyen a kép",
  "Mentsd el az utat és a jelentést",
  "Minden közös költségre jó",
  "Hozd létre időben az utazást",
  "Add hozzá időben a kiadásokat",
  "Sprawdź, kto, komu, ile winien",
  "Skan paragonu w chwilę",
  "Zakończ z zestawieniem, do którego grupa może wrócić",
  "Czy da się dzielić rachunek do pozycji z paragonu?",
  "Czy to się sprawdza na wycieczkach w kilka osób?",
  "Kimin, kime ne borçlu, gör",
  "Hesabı, kaleme göre böl",
  "Her gerçek harcamaya uygun bölüşümü kullan",
  "Tek bir restoran hesabı, uygulamada veya tarayıcıda paylaşılsın",
  "Grubun tüm harcamaları tek ve net bir kayıtta",
  "Built for real shared spending",
  "A restaurant bill splitter for real table orders",
  "Recorded settlements",
  "Good fits for CheqSplit",
  "Use the right split for the real expense",
  "Finish with a record the group can revisit",
  "Add promptly",
];

type Fail = { url: string; msg: string };
const fails: Fail[] = [];

function pagePath(lang: string, slug: string) {
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

function decodeEntities(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function attr(html: string, tagRe: RegExp): string | null {
  const m = html.match(tagRe);
  return m ? decodeEntities(m[1]) : null;
}

function allAttrs(html: string, re: RegExp): string[] {
  const out: string[] = [];
  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  let m: RegExpExecArray | null;
  while ((m = r.exec(html))) out.push(decodeEntities(m[1]));
  return out;
}

function stripTags(s: string) {
  return decodeEntities(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function parseJsonLdBlocks(html: string): unknown[] {
  const blocks: unknown[] = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const raw = m[1].trim();
    if (!raw || raw === "{}") {
      throw new Error("empty JSON-LD script");
    }
    try {
      blocks.push(JSON.parse(raw));
    } catch {
      throw new Error("JSON-LD parse failed");
    }
  }
  return blocks;
}

function faqFromLd(blocks: unknown[]): { q: string; a: string }[] {
  const items: { q: string; a: string }[] = [];
  for (const b of blocks) {
    if (!b || typeof b !== "object") continue;
    const o = b as Record<string, unknown>;
    if (o["@type"] !== "FAQPage") continue;
    const ent = o.mainEntity;
    if (!Array.isArray(ent)) continue;
    for (const e of ent) {
      if (!e || typeof e !== "object") continue;
      const q = e as Record<string, unknown>;
      const name = typeof q.name === "string" ? q.name : "";
      const ans = q.acceptedAnswer as Record<string, unknown> | undefined;
      const text = ans && typeof ans.text === "string" ? ans.text : "";
      if (name) items.push({ q: name, a: text });
    }
  }
  return items;
}

function visibleFaqQuestions(html: string): string[] {
  const faq = html.match(/id=["']faq["'][\s\S]*?<\/section>/i);
  if (!faq) return [];
  const summaries = [...faq[0].matchAll(/<summary[^>]*>([\s\S]*?)<\/summary>/gi)];
  return summaries
    .map((m) => stripTags(m[1].replace(/<span[\s\S]*?<\/span>/gi, "")))
    .filter(Boolean);
}

function visibleText(html: string) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ");
}

function placeholderHits(html: string, lang: string): string[] {
  const text = visibleText(html);
  const hits: string[] = [];
  if (/\bTODO\b/.test(text) || /\bTBD\b/.test(text)) hits.push("TODO/TBD");
  if (/\bundefined\b/.test(text)) hits.push("undefined");
  if (/Lorem ipsum/i.test(text)) hits.push("Lorem ipsum");
  if (lang !== "es" && /\btodo\b/.test(text)) hits.push("todo");
  return hits;
}

function chromePath(): string | null {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ].filter(Boolean) as string[];
  return candidates.find((p) => existsSync(p)) ?? null;
}

async function fetchHtml(url: string): Promise<{ status: number; html: string }> {
  const res = await fetch(url, { redirect: "follow" });
  const html = await res.text();
  return { status: res.status, html };
}

async function checkOverflow390(urls: string[]): Promise<void> {
  const exe = chromePath();
  if (!exe) {
    fails.push({ url: urls[0]!, msg: "Chrome not found; could not check 390px overflow" });
    return;
  }
  const { default: puppeteer } = await import("puppeteer-core").catch(() => ({
    default: null as unknown as typeof import("puppeteer-core")["default"],
  }));
  if (!puppeteer) {
    fails.push({
      url: urls[0]!,
      msg: "puppeteer-core is not installed; run npm i -D puppeteer-core",
    });
    return;
  }
  const browser = await puppeteer.launch({
    executablePath: exe,
    headless: true,
    args: ["--no-sandbox", "--disable-gpu"],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    for (const url of urls) {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return doc.scrollWidth > doc.clientWidth + 1;
      });
      if (overflow) fails.push({ url, msg: "horizontal overflow at 390px" });
    }
  } finally {
    await browser.close();
  }
}

async function waitForServer(url: string, ms = 90_000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    try {
      const r = await fetch(url);
      if (r.ok || r.status === 404) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 400));
  }
  throw new Error(`Server not reachable at ${url}`);
}

async function probe(url: string) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return r.ok;
  } catch {
    return false;
  }
}

async function main() {
  const skipServer = process.env.USE_DIST === "1";
  let preview: ReturnType<typeof spawn> | undefined;

  if (!skipServer) {
    if (!(await probe(`${BASE}/en/`))) {
      preview = spawn("npx", ["astro", "preview", "--host", "127.0.0.1", "--port", "4321"], {
        stdio: "pipe",
        cwd: ROOT,
      });
      await waitForServer(`${BASE}/en/`);
    }
  }

  const urls: string[] = [];
  const faqByPath = new Map<string, Map<string, string[]>>();

  for (const lang of LANGS) {
    for (const slug of SLUGS) {
      const path = pagePath(lang, slug);
      const url = skipServer
        ? `file://${join(import.meta.dirname, "..", "dist", path, "index.html")}`
        : `${BASE}${path}`;
      urls.push(skipServer ? path : url);

      let html: string;
      let status = 200;
      if (skipServer) {
        const file = join(ROOT, "dist", path.replace(/^\//, ""), "index.html");
        if (!existsSync(file)) {
          fails.push({ url: path, msg: `missing dist file ${file}` });
          continue;
        }
        html = readFileSync(file, "utf8");
      } else {
        const got = await fetchHtml(url);
        status = got.status;
        html = got.html;
      }

      const loc = skipServer ? path : url;
      if (status !== 200) {
        fails.push({ url: loc, msg: `HTTP ${status}` });
        continue;
      }

      const langAttr = attr(html, /<html[^>]*\slang=["']([^"']+)["']/i);
      if (langAttr !== lang) {
        fails.push({ url: loc, msg: `html lang="${langAttr}" expected "${lang}"` });
      }

      const h1s = [...html.matchAll(/<h1\b/gi)];
      if (h1s.length !== 1) {
        fails.push({ url: loc, msg: `expected 1 h1, found ${h1s.length}` });
      }

      const title = attr(html, /<title>([^<]*)<\/title>/i);
      const desc = attr(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)
        ?? attr(html, /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
      if (!title?.trim()) fails.push({ url: loc, msg: "missing title" });
      if (!desc?.trim()) fails.push({ url: loc, msg: "missing meta description" });

      const canonical = attr(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)
        ?? attr(html, /<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
      const expectedCanon = `${SITE}${path}`;
      if (canonical !== expectedCanon) {
        fails.push({
          url: loc,
          msg: `canonical "${canonical}" expected "${expectedCanon}"`,
        });
      }

      const hreflangs = allAttrs(
        html,
        /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*>/gi,
      );
      const hreflangs2 = allAttrs(
        html,
        /<link[^>]*hreflang=["']([^"']+)["'][^>]*rel=["']alternate["'][^>]*>/gi,
      );
      const hrefSet = new Set([...hreflangs, ...hreflangs2]);
      for (const l of LANGS) {
        if (!hrefSet.has(l)) fails.push({ url: loc, msg: `missing hreflang ${l}` });
      }
      if (!hrefSet.has("x-default")) {
        fails.push({ url: loc, msg: "missing hreflang x-default" });
      }

      for (const s of FORBIDDEN) {
        if (html.includes(s)) fails.push({ url: loc, msg: `forbidden string: ${s}` });
      }

      const ph = placeholderHits(html, lang);
      for (const p of ph) fails.push({ url: loc, msg: `placeholder: ${p}` });

      let blocks: unknown[] = [];
      try {
        blocks = parseJsonLdBlocks(html);
      } catch (e) {
        fails.push({ url: loc, msg: (e as Error).message });
      }

      const ldFaq = faqFromLd(blocks);
      const vis = visibleFaqQuestions(html);
      if (ldFaq.length && vis.length) {
        const ldQ = ldFaq.map((x) => x.q);
        if (ldQ.length !== vis.length || ldQ.some((q, i) => q !== vis[i])) {
          fails.push({ url: loc, msg: "visible FAQ questions !== JSON-LD FAQ" });
        }
      }

      const key = slug || "home";
      if (!faqByPath.has(key)) faqByPath.set(key, new Map());
      faqByPath.get(key)!.set(lang, vis.length ? vis : ldFaq.map((x) => x.q));
    }
  }

  for (const [, byLang] of faqByPath) {
    for (const [lang, qs] of byLang) {
      for (const [other, oqs] of byLang) {
        if (other === lang) continue;
        for (const q of qs) {
          if (q && oqs.includes(q) && q.length > 12) {
            fails.push({
              url: `faq/${lang}`,
              msg: `FAQ question also used in ${other}: ${q.slice(0, 80)}`,
            });
          }
        }
      }
    }
  }

  if (!skipServer) {
    const httpUrls = LANGS.flatMap((lang) =>
      SLUGS.map((slug) => `${BASE}${pagePath(lang, slug)}`),
    );
    try {
      await checkOverflow390(httpUrls);
    } catch (e) {
      fails.push({ url: BASE, msg: `overflow check failed: ${(e as Error).message}` });
    }
  }

  if (preview) preview.kill("SIGTERM");

  const unique = [...new Map(fails.map((f) => [`${f.url}|${f.msg}`, f])).values()];
  const urlCount = LANGS.length * SLUGS.length;
  if (unique.length) {
    console.error(`FAIL ${unique.length} issue(s); checked ${urlCount} routes\n`);
    for (const f of unique.slice(0, 80)) console.error(`- ${f.url}\n  ${f.msg}`);
    if (unique.length > 80) console.error(`… ${unique.length - 80} more`);
    process.exit(1);
  }
  console.log(`PASS: ${urlCount} URLs verified`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
