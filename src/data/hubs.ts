import { HubInfo } from '../types';

// =========================================================================
// === EDIT 3 PILIHAN UTAMA (HUB) DI SINI ==================================
// Beranda hanya menampilkan 3 pintu masuk ini. Setiap hub punya
// kategori, katalog, galeri, dan kalkulator sendiri (lihat categories.ts).
// =========================================================================

export const HUBS: HubInfo[] = [
  {
    id: 'undangan',
    title: 'Cetak Undangan',
    navLabel: 'Undangan',
    subtitle: 'Undangan & Souvenir',
    description:
      'Undangan pernikahan, sunatan, aqiqah, ulang tahun, event, undangan digital, hingga souvenir custom untuk acara Anda.',
    iconName: 'HeartHandshake',
    gradient: 'from-amber-400/20 via-yellow-300/10 to-amber-500/20',
    accentColor: 'text-amber-800 bg-amber-50 border-amber-300',
    whatsappIntro: 'saya ingin konsultasi pemesanan undangan / souvenir',
  },
  {
    id: 'kemasan',
    title: 'Cetak Kemasan',
    navLabel: 'Kemasan',
    subtitle: 'Sablon Plastik, Cup & Stiker Label',
    description:
      'Sablon kantong plastik & kemasan produk, sablon cup plastik/kertas, dan cetak stiker label untuk branding usaha Anda.',
    iconName: 'PackageOpen',
    gradient: 'from-sky-500/15 via-blue-400/10 to-blue-500/15',
    accentColor: 'text-blue-700 bg-blue-50 border-blue-300',
    whatsappIntro: 'saya ingin konsultasi sablon kemasan (plastik/cup/stiker label)',
  },
  {
    id: 'buku',
    title: 'Cetak Buku',
    navLabel: 'Buku',
    subtitle: 'Yasin, Nota, Kwitansi & Brosur',
    description:
      'Cetak buku Yasin custom, buku nota/kwitansi/rekapan dengan sistem NCR, dan brosur promosi usaha.',
    iconName: 'BookOpen',
    gradient: 'from-pink-500/15 via-rose-400/10 to-pink-500/15',
    accentColor: 'text-pink-700 bg-pink-50 border-pink-300',
    whatsappIntro: 'saya ingin konsultasi cetak buku Yasin / nota-kwitansi / brosur',
  },
];

export function getHubById(id: string): HubInfo | undefined {
  return HUBS.find((h) => h.id === id);
}
