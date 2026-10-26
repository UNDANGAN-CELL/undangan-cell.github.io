import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import {
  RESELLER_EDIT_EVENT,
  RESELLER_REQUEST_EVENT,
  clearResellerCode,
  getSavedResellerCode,
  markResellerPromptSkipped,
  normalizeResellerCode,
  openWhatsAppFinal,
  requestWhatsApp,
  saveResellerCode,
  setGateMounted,
} from '../utils/reseller';

/**
 * Menangkap semua klik link/aksi WhatsApp di web lalu menanyakan "Kode Reseller (opsional)"
 * sekali per sesi. Kode yang diisi ikut terkirim sebagai baris "Kode Reseller: XXX" di chat.
 */
export const ResellerGate: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const show = useCallback((url: string | null) => {
    setPendingUrl(url);
    setCode(getSavedResellerCode());
    setOpen(true);
  }, []);

  useEffect(() => {
    setGateMounted(true);

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0) return;
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href^="https://wa.me/"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      event.preventDefault();
      requestWhatsApp(anchor.href);
    };
    const onRequest = (event: Event) => show((event as CustomEvent<{ url: string }>).detail.url);
    const onEdit = () => show(null);

    document.addEventListener('click', onClick, true);
    window.addEventListener(RESELLER_REQUEST_EVENT, onRequest);
    window.addEventListener(RESELLER_EDIT_EVENT, onEdit);
    return () => {
      setGateMounted(false);
      document.removeEventListener('click', onClick, true);
      window.removeEventListener(RESELLER_REQUEST_EVENT, onRequest);
      window.removeEventListener(RESELLER_EDIT_EVENT, onEdit);
    };
  }, [show]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 50);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.clearTimeout(timer);
    };
  }, [open]);

  if (!open) return null;

  const editing = pendingUrl === null;

  const submit = () => {
    const clean = normalizeResellerCode(code);
    if (clean) saveResellerCode(clean);
    else if (editing) clearResellerCode();
    else markResellerPromptSkipped();
    setOpen(false);
    if (pendingUrl) openWhatsAppFinal(pendingUrl, clean);
  };

  const skip = () => {
    markResellerPromptSkipped();
    setOpen(false);
    if (pendingUrl) openWhatsAppFinal(pendingUrl, '');
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reseller-gate-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-5 sm:p-6 space-y-4">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Tutup"
          className="absolute top-3 right-3 p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1 pr-6">
          <h2 id="reseller-gate-title" className="text-base sm:text-lg font-extrabold text-stone-900">
            Kode Reseller <span className="text-stone-500 font-semibold">(opsional)</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Reseller: isi kode Anda agar admin langsung mengenali. Pembeli umum cukup lewati.
          </p>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
          className="space-y-3"
        >
          <input
            ref={inputRef}
            id="reseller-code-input"
            type="text"
            value={code}
            onChange={(event) => setCode(normalizeResellerCode(event.target.value))}
            placeholder="Contoh: RJ-BUDI01"
            autoCapitalize="characters"
            autoComplete="off"
            spellCheck={false}
            className="w-full px-3.5 py-3 rounded-xl border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm font-mono tracking-wide"
          />

          <button
            type="submit"
            id="reseller-gate-continue"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-bold transition cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{editing ? 'Simpan Kode' : 'Lanjut ke WhatsApp'}</span>
          </button>

          {!editing && (
            <button
              type="button"
              id="reseller-gate-skip"
              onClick={skip}
              className="w-full py-2.5 px-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs sm:text-sm font-semibold transition cursor-pointer"
            >
              Lewati, saya bukan reseller
            </button>
          )}
        </form>

        <p className="text-[11px] text-stone-500 leading-relaxed">
          Kode disimpan di browser ini supaya tidak perlu diisi lagi. Web tidak mengecek kode; admin
          yang memverifikasinya lewat WhatsApp.
        </p>
      </div>
    </div>
  );
};
