import { trackEvent } from './analytics';

/**
 * Kode reseller: hanya DITERUSKAN ke pesan WhatsApp. Web tidak mengecek valid/tidaknya
 * kode dan tidak punya data harga reseller; verifikasi & potongan dilakukan manual di chat.
 * Kode disimpan di browser pengunjung (localStorage) agar tidak perlu diisi ulang.
 */
const CODE_KEY = 'rj_reseller_code';
const SKIP_KEY = 'rj_reseller_skip'; // sessionStorage: sudah memilih "lewati" di sesi ini

export const RESELLER_REQUEST_EVENT = 'rj:wa-request';
export const RESELLER_EDIT_EVENT = 'rj:reseller-edit';

let gateMounted = false;
export function setGateMounted(value: boolean): void {
  gateMounted = value;
}

export function normalizeResellerCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 24);
}

function readStorage(kind: 'local' | 'session', key: string): string | null {
  try {
    const store = kind === 'local' ? window.localStorage : window.sessionStorage;
    return store.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(kind: 'local' | 'session', key: string, value: string | null): void {
  try {
    const store = kind === 'local' ? window.localStorage : window.sessionStorage;
    if (value === null) store.removeItem(key);
    else store.setItem(key, value);
  } catch {
    /* penyimpanan diblokir: abaikan, kode tetap bisa diketik tiap kali */
  }
}

export function getSavedResellerCode(): string {
  return normalizeResellerCode(readStorage('local', CODE_KEY) || '');
}
export function saveResellerCode(code: string): void {
  writeStorage('local', CODE_KEY, code);
  writeStorage('session', SKIP_KEY, null);
}
export function clearResellerCode(): void {
  writeStorage('local', CODE_KEY, null);
}
export function isResellerPromptSkipped(): boolean {
  return readStorage('session', SKIP_KEY) === '1';
}
export function markResellerPromptSkipped(): void {
  writeStorage('session', SKIP_KEY, '1');
}

/** Menambahkan baris "Kode Reseller: XXX" di akhir teks pesan pada link wa.me. */
export function withResellerCode(url: string, code: string): string {
  if (!code) return url;
  const marker = '?text=';
  const index = url.indexOf(marker);
  if (index < 0) {
    // Link tanpa teks bawaan: buat pesan berisi kode saja agar tetap terbaca siapa yang chat
    const joiner = url.includes('?') ? '&' : '?';
    return `${url}${joiner}text=${encodeURIComponent(`Kode Reseller: ${code}`)}`;
  }
  let text = '';
  try {
    text = decodeURIComponent(url.slice(index + marker.length));
  } catch {
    text = '';
  }
  return `${url.slice(0, index)}${marker}${encodeURIComponent(`${text.trimEnd()}\n\nKode Reseller: ${code}`)}`;
}

export function openWhatsAppFinal(url: string, code: string): void {
  if (code) trackEvent('reseller_chat', { reseller_code: code });
  window.open(withResellerCode(url, code), '_blank', 'noopener,noreferrer');
}

/**
 * Titik masuk tunggal semua pembukaan WhatsApp dari web.
 * - Kode sudah tersimpan -> langsung dibuka dengan kode.
 * - Sudah memilih "lewati" di sesi ini -> dibuka tanpa kode.
 * - Belum ada keduanya -> tampilkan dialog kolom kode (ResellerGate).
 */
export function requestWhatsApp(url: string): void {
  const code = getSavedResellerCode();
  if (code || isResellerPromptSkipped() || !gateMounted) {
    openWhatsAppFinal(url, code);
    return;
  }
  window.dispatchEvent(new CustomEvent(RESELLER_REQUEST_EVENT, { detail: { url } }));
}

export function openResellerCodeEditor(): void {
  window.dispatchEvent(new CustomEvent(RESELLER_EDIT_EVENT));
}
