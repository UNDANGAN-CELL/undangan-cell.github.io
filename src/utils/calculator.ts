export interface AddOnOption {
  id: string;
  name: string;
  pricePerUnit: number;
  description: string;
}

export const CALCULATOR_ADDONS: AddOnOption[] = [
  {
    id: 'plastik',
    name: 'Plastik OPP Bening',
    pricePerUnit: 100,
    description: 'Plastik pembungkus tebal pelindung undangan',
  },
  {
    id: 'label_polos',
    name: 'Label Stiker Nama Tamu (Kosong)',
    pricePerUnit: 100,
    description: 'Stiker label Tom & Jerry siap tulis sendiri',
  },
  {
    id: 'cetak_nama',
    name: 'Cetak Nama Tamu Langsung',
    pricePerUnit: 250,
    description: 'Nama tamu langsung tercetak rapi di label / cover',
  },
  {
    id: 'amplop_premium',
    name: 'Amplop Khusus (Kalkir / Linen)',
    pricePerUnit: 750,
    description: 'Upgrade amplop semi transparan / bertekstur',
  },
  {
    id: 'foil_gold',
    name: 'Finishing Foil Emas / Hotprint',
    pricePerUnit: 350,
    description: 'Efek kilau emas mengkilap pada nama / basmalah',
  },
  {
    id: 'emboss',
    name: 'Finishing Emboss Timbul',
    pricePerUnit: 300,
    description: 'Efek tekstur timbul 3D elegan',
  },
];

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Menghitung diskon volume bertingkat (makin banyak makin hemat)
 */
export function getVolumeDiscountMultiplier(qty: number): number {
  if (qty >= 1000) return 0.85; // Diskon 15% untuk 1000+ pcs
  if (qty >= 500) return 0.90;  // Diskon 10% untuk 500+ pcs
  if (qty >= 300) return 0.95;  // Diskon 5% untuk 300+ pcs
  return 1.0;
}

/**
 * Kalkulasi total estimasi harga
 */
export function calculateEstimate(
  basePrice: number,
  quantity: number,
  selectedAddOnIds: string[]
): {
  unitBasePrice: number;
  discountedUnitPrice: number;
  addOnPricePerUnit: number;
  finalUnitPrice: number;
  totalEstimate: number;
  discountPercentage: number;
} {
  const discountMultiplier = getVolumeDiscountMultiplier(quantity);
  const discountedUnitPrice = Math.round(basePrice * discountMultiplier);
  const discountPercentage = Math.round((1 - discountMultiplier) * 100);

  const addOnPricePerUnit = selectedAddOnIds.reduce((sum, id) => {
    const found = CALCULATOR_ADDONS.find(a => a.id === id);
    return sum + (found ? found.pricePerUnit : 0);
  }, 0);

  const finalUnitPrice = discountedUnitPrice + addOnPricePerUnit;
  const totalEstimate = finalUnitPrice * quantity;

  return {
    unitBasePrice: basePrice,
    discountedUnitPrice,
    addOnPricePerUnit,
    finalUnitPrice,
    totalEstimate,
    discountPercentage,
  };
}
