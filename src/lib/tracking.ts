import { rastreamento as cfg } from "@/config/rastreamento";

type Fn = ((...a: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue?: unknown[]; push?: unknown; loaded?: boolean; version?: string };
declare global {
  interface Window { fbq?: Fn; _fbq?: Fn; dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; ttq?: any }
}

const CHAVE = "consentimento-anuncios";
let iniciado = false;

export const lerConsentimento = () => (typeof window === "undefined" ? null : localStorage.getItem(CHAVE));
export function salvarConsentimento(v: "aceito" | "recusado") {
  localStorage.setItem(CHAVE, v);
  localStorage.setItem(CHAVE + "-data", new Date().toISOString());
  if (v === "aceito") iniciarRastreamento();
  else { window.fbq?.("consent", "revoke"); window.gtag?.("consent", "update", { ad_storage: "denied", analytics_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" }); }
}

export async function paisPrecisaConsentimento(): Promise<boolean> {
  try {
    const ctrl = new AbortController(); setTimeout(() => ctrl.abort(), 2000);
    const r = await fetch("/cdn-cgi/trace", { signal: ctrl.signal });
    if (!r.ok) return true;
    const loc = /loc=(\w+)/.exec(await r.text())?.[1];
    if (!loc || loc === "XX" || loc === "T1") return true;
    return cfg.paisesComConsentimento.includes(loc);
  } catch { return true; }
}

function script(src: string) { const s = document.createElement("script"); s.async = true; s.src = src; document.head.appendChild(s); }

export function guardarOrigem() {
  const p = new URLSearchParams(location.search);
  const o: Record<string, string> = {};
  cfg.parametrosOrigem.forEach(k => { const v = p.get(k); if (v) o[k] = v; });
  if (Object.keys(o).length) sessionStorage.setItem("origem", JSON.stringify(o));
}

export function iniciarRastreamento() {
  if (iniciado || typeof window === "undefined") return;
  iniciado = true;
  if (cfg.metaPixelId) {
    if (window.fbq) window.fbq("consent", "grant");
    else {
      const f: Fn = function (...a: unknown[]) { f.callMethod ? f.callMethod.apply(f, a) : f.queue!.push(a); } as Fn;
      f.push = f; f.loaded = true; f.version = "2.0"; f.queue = [];
      window.fbq = f; window._fbq = f;
      script("https://connect.facebook.net/en_US/fbevents.js");
      f("init", cfg.metaPixelId, {}, { agent: "lovable" });
      f("track", "PageView");
    }
  }
  const gid = [cfg.googleAds.id, cfg.googleAnalyticsId].filter(Boolean);
  if (gid.length) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer!.push(arguments); };
    script(`https://www.googletagmanager.com/gtag/js?id=${gid[0]}`);
    window.gtag("js", new Date());
    gid.forEach(id => window.gtag!("config", id));
  }
  if (cfg.googleTagManagerId) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    script(`https://www.googletagmanager.com/gtm.js?id=${cfg.googleTagManagerId}`);
  }
  if (cfg.tiktokPixelId) {
    const q: any[] = []; const t: any = { _q: q }; ["page", "track"].forEach(m => (t[m] = (...a: unknown[]) => q.push([m, ...a])));
    window.ttq = t;
    script(`https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${cfg.tiktokPixelId}&lib=ttq`);
    t.page();
  }
  cfg.scriptsExtras.filter(u => u.startsWith("https://")).forEach(script);
}

// Disparado no clique dos botões de inscrição.
export function eventoInscricao(valor: number) {
  if (lerConsentimento() === "recusado" || !iniciado) return;
  const eventID = crypto.randomUUID();
  window.fbq?.("track", "InitiateCheckout", { value: valor, currency: "BRL" }, { eventID });
  if (cfg.googleAds.id && cfg.googleAds.rotuloConversaoInscricao)
    window.gtag?.("event", "conversion", { send_to: `${cfg.googleAds.id}/${cfg.googleAds.rotuloConversaoInscricao}`, value: valor, currency: "BRL" });
  window.gtag?.("event", "begin_checkout", { value: valor, currency: "BRL" });
  window.dataLayer?.push({ event: "inscricao_clique", value: valor });
  window.ttq?.track?.("InitiateCheckout", { value: valor, currency: "BRL" });
}
