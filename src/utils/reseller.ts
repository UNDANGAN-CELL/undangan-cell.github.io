/**
 * Kode mitra disimpan di browser agar tidak perlu diisi ulang.
 * Web tidak memverifikasi kode; kode dicek manual saat rekap.
 */
const CODE_KEY = 'rj_reseller_code';

export function normalizeResellerCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9_-]/g, '').slice(0, 24);
}

export function getSavedResellerCode(): string {
  try {
    return normalizeResellerCode(window.localStorage.getItem(CODE_KEY) || '');
  } catch {
    return '';
  }
}

export function saveResellerCode(code: string): void {
  try {
    window.localStorage.setItem(CODE_KEY, code);
  } catch {
    /* penyimpanan diblokir: abaikan */
  }
}

export function clearResellerCode(): void {
  try {
    window.localStorage.removeItem(CODE_KEY);
  } catch {
    /* abaikan */
  }
}

/** Membuka link WhatsApp; kode mitra sudah ikut di pesan dari form. */
export function requestWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
