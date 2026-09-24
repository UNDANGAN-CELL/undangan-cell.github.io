import { SITE_CONFIG } from '../data/siteConfig';
import { OrderFormData } from '../types';

/**
 * Membuat link WhatsApp Click to Chat resmi dengan nomor 6283170819117
 */
export function getWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Membuka WhatsApp di tab baru atau aplikasi WhatsApp
 */
export function openWhatsAppChat(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Format pesan pemesanan produk dinamis
 */
export function buildOrderMessage(data: OrderFormData): string {
  const variantsList = Object.entries(data.selectedVariants)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => `• ${key}: ${value}`)
    .join('\n');

  const addOnsList = data.selectedAddOns.length > 0
    ? data.selectedAddOns.map(addon => `• ${addon}`).join('\n')
    : '';

  let message = `Halo Admin ${SITE_CONFIG.brandName}, saya ingin memesan:\n\n`;
  message += `Produk: ${data.productName}\n`;
  message += `Kode: ${data.productCode}\n`;
  message += `Jumlah: ${data.quantity} pcs\n`;
  message += `Nama: ${data.customerName}\n`;
  if (data.eventType) message += `Jenis acara: ${data.eventType}\n`;
  if (data.eventDate) message += `Tanggal acara: ${data.eventDate}\n`;
  if (data.customerWhatsApp) message += `Nomor WhatsApp: ${data.customerWhatsApp}\n`;

  if (variantsList) {
    message += `\nPilihan Variasi:\n${variantsList}\n`;
  }

  if (addOnsList) {
    message += `\nTambahan Opsi:\n${addOnsList}\n`;
  }

  if (data.notes && data.notes.trim()) {
    message += `\nCatatan:\n${data.notes.trim()}\n`;
  }

  if (data.estimatedPrice && data.estimatedPrice > 0) {
    message += `\nEstimasi Total (Web): Rp ${data.estimatedPrice.toLocaleString('id-ID')}\n`;
  }

  message += `\nMohon informasi harga final dan proses selanjutnya.\nTerima kasih.`;

  return message;
}

/**
 * Format pesan konsultasi kalkulator harga
 */
export function buildCalculatorMessage(params: {
  productName: string;
  productCode?: string;
  quantity: number;
  basePrice?: number;
  addOns: string[];
  totalEstimate?: number;
  customerName?: string;
  notes?: string;
}): string {
  let msg = `Halo Admin ${SITE_CONFIG.brandName}, saya ingin konsultasi pesanan:\n\n`;
  msg += `Produk: ${params.productName}\n`;
  if (params.productCode) msg += `Kode Produk: ${params.productCode}\n`;
  msg += `Jumlah: ${params.quantity} pcs\n`;
  msg += typeof params.basePrice === 'number' && params.basePrice > 0
    ? `Harga Dasar: Rp ${params.basePrice.toLocaleString('id-ID')} / pcs\n`
    : `Harga Dasar: Menyusul (mohon dikonfirmasi admin)\n`;

  if (params.addOns.length > 0) {
    msg += `Tambahan / Finishing:\n${params.addOns.map(a => `• ${a}`).join('\n')}\n`;
  } else {
    msg += `Tambahan / Finishing: Tidak ada\n`;
  }

  if (typeof params.totalEstimate === 'number' && params.totalEstimate > 0) {
    msg += `Estimasi Total: Rp ${params.totalEstimate.toLocaleString('id-ID')}\n`;
  }

  if (params.customerName) msg += `Nama: ${params.customerName}\n`;
  if (params.notes?.trim()) msg += `Catatan: ${params.notes.trim()}\n`;

  msg += `\nMohon konfirmasi harga final, ketersediaan, dan detail pesanan. Terima kasih.`;
  return msg;
}

export type DesignStatus = 'siap' | 'referensi' | 'konsultasi';

/**
 * Format pesan pesanan custom (desain sendiri / referensi / konsultasi).
 * File tidak diunggah lewat website; pemesan melampirkannya langsung di chat.
 */
export function buildCustomOrderMessage(params: {
  designStatus: DesignStatus;
  productType: string;
  quantity?: string | number;
  deadline?: string; // format yyyy-mm-dd dari input tanggal
  customerName?: string;
  notes?: string;
}): string {
  const statusLabel: Record<DesignStatus, string> = {
    siap: 'Sudah punya desain jadi',
    referensi: 'Punya ide / referensi, minta dibuatkan desain',
    konsultasi: 'Belum ada desain, ingin konsultasi dulu',
  };
  const closing: Record<DesignStatus, string> = {
    siap: 'Saya akan melampirkan file desain di chat ini sebagai Dokumen. Mohon dicek apakah sudah sesuai untuk dicetak. Terima kasih!',
    referensi: 'Saya akan mengirim referensi dan teks yang ingin dicantumkan di chat ini. Terima kasih!',
    konsultasi: 'Mohon dibantu diskusi kebutuhan dan pilihan produknya. Terima kasih!',
  };

  let msg = `Halo Admin ${SITE_CONFIG.brandName}, saya ingin pesan custom:\n\n`;
  msg += `Produk: ${params.productType}\n`;
  msg += `Kondisi desain: ${statusLabel[params.designStatus]}\n`;
  if (params.quantity) msg += `Rencana jumlah: ${params.quantity} pcs\n`;
  if (params.deadline) {
    const d = new Date(`${params.deadline}T00:00:00`);
    const formatted = isNaN(d.getTime())
      ? params.deadline
      : d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    msg += `Dibutuhkan tanggal: ${formatted}\n`;
  }
  if (params.customerName) msg += `Nama: ${params.customerName}\n`;
  if (params.notes) msg += `Catatan: ${params.notes}\n`;
  msg += `\n${closing[params.designStatus]}`;
  return msg;
}

/**
 * Format pesan konsultasi cepat
 */
export function buildQuickConsultMessage(topic = 'tanya seputar cetak undangan & souvenir'): string {
  return `Halo Admin ${SITE_CONFIG.brandName}, saya ingin ${topic}. Boleh minta info katalog dan price list terbarunya?`;
}
