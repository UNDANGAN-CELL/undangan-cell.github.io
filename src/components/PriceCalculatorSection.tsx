import React, { useMemo, useState } from 'react';
import { Calculator, MessageCircle, Info, Sparkles } from 'lucide-react';
import { CALCULATOR_ADDONS, calculateEstimate, formatRupiah } from '../utils/calculator';
import { buildCalculatorMessage, openWhatsAppChat } from '../utils/whatsapp';
import { PRODUCTS } from '../data/products';

export const PriceCalculatorSection: React.FC = () => {
  // Produk yang punya harga numerik bisa dihitung langsung.
  // Produk dengan harga "Menyusul" tetap tersedia di katalog dan dikonsultasikan via WhatsApp.
  const CALCULATOR_PRODUCTS = useMemo(
    () => PRODUCTS.filter((product) => product.price > 0 && product.priceType === 'per_pcs'),
    []
  );

  const [selectedProductCode, setSelectedProductCode] = useState(CALCULATOR_PRODUCTS[0]?.code ?? '');
  const [quantity, setQuantity] = useState<number>(CALCULATOR_PRODUCTS[0]?.minimumOrder ?? 100);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>(['plastik', 'label_polos']);
  const [customerName, setCustomerName] = useState('');

  const currentProduct = CALCULATOR_PRODUCTS.find((product) => product.code === selectedProductCode) ?? CALCULATOR_PRODUCTS[0];
  const activeBasePrice = currentProduct?.price ?? 0;
  const minimumOrder = currentProduct?.minimumOrder ?? 50;

  const calculation = calculateEstimate(activeBasePrice, quantity, selectedAddOnIds);

  const handleToggleAddOn = (id: string) => {
    setSelectedAddOnIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleConfirmViaWhatsApp = () => {
    const selectedAddOnNames = selectedAddOnIds
      .map(id => CALCULATOR_ADDONS.find(a => a.id === id)?.name)
      .filter(Boolean) as string[];

    const msg = buildCalculatorMessage({
      productName: currentProduct?.name ?? 'Produk katalog',
      productCode: currentProduct?.code,
      quantity,
      basePrice: activeBasePrice,
      addOns: selectedAddOnNames,
      totalEstimate: calculation.totalEstimate,
      customerName: customerName.trim() || undefined,
    });

    openWhatsAppChat(msg);
  };

  return (
    <section id="kalkulator-section" className="py-16 bg-[#faf7f2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Harga Cepat</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Simulasi Biaya Cetak Real-Time
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Hitung perkiraan biaya pesanan Anda berdasarkan jumlah dan opsi tambahan yang diinginkan tanpa harus menunggu lama.
          </p>
        </div>

        {/* Calculator Grid Box */}
        <div className="max-w-4xl mx-auto bg-[#f4efe5] rounded-3xl border border-stone-200/90 p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Direct Product Selection */}
              <div className="space-y-2">
                <label htmlFor="calculator-product-select" className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  1. Pilih Produk dari Katalog
                </label>
                <select
                  id="calculator-product-select"
                  value={selectedProductCode}
                  onChange={(e) => {
                    const product = CALCULATOR_PRODUCTS.find((item) => item.code === e.target.value);
                    setSelectedProductCode(e.target.value);
                    if (product) setQuantity(Math.max(product.minimumOrder, 100));
                  }}
                  className="w-full px-3.5 py-3 text-sm bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                >
                  {Array.from(new Set(CALCULATOR_PRODUCTS.map((product) => product.category))).map((category) => (
                    <optgroup key={category} label={category}>
                      {CALCULATOR_PRODUCTS.filter((product) => product.category === category).map((product) => (
                        <option key={product.code} value={product.code}>
                          {product.code} — {product.name} — {formatRupiah(product.price)} / pcs
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {currentProduct && (
                  <p className="text-[11px] text-stone-500">
                    Minimum {currentProduct.minimumOrder} pcs • Harga mengikuti katalog produk saat ini. Produk yang belum memiliki harga tetap bisa dipesan melalui WhatsApp.
                  </p>
                )}
              </div>

              {/* Quantity Slider & Input */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    2. Tentukan Jumlah Pesanan (pcs)
                  </label>
                  <span className="text-base font-bold text-emerald-800 bg-white px-3 py-1 rounded-lg border border-stone-200">
                    {quantity} pcs
                  </span>
                </div>

                <input
                  type="range"
                  min={minimumOrder}
                  max={2000}
                  step={25}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                <div className="flex flex-wrap gap-1.5">
                  {[100, 200, 300, 500, 1000].filter(qty => qty >= minimumOrder).map(qty => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setQuantity(qty)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition ${
                        quantity === qty
                          ? 'bg-emerald-700 border-emerald-700 text-white font-bold'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                      }`}
                    >
                      {qty} pcs
                    </button>
                  ))}
                </div>

                {calculation.discountPercentage > 0 && (
                  <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Hemat volume order: Diskon {calculation.discountPercentage}% untuk pemesanan {quantity} pcs!</span>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-stone-500 bg-white/70 border border-stone-200 rounded-xl p-3">
                Opsi finishing di bawah adalah simulasi. Ketersediaan dan kecocokan finishing mengikuti produk yang dipilih dan akan dikonfirmasi admin.
              </div>

              {/* Add-ons Checkboxes */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  3. Tambahan Opsi & Finishing
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CALCULATOR_ADDONS.map((addon) => {
                    const isChecked = selectedAddOnIds.includes(addon.id);
                    return (
                      <label
                        key={addon.id}
                        onClick={() => handleToggleAddOn(addon.id)}
                        className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 cursor-pointer select-none transition ${
                          isChecked
                            ? 'bg-emerald-50/80 border-emerald-300 text-stone-900'
                            : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-stone-900">{addon.name}</div>
                          <div className="text-[11px] text-emerald-700 font-medium">
                            +{formatRupiah(addon.pricePerUnit)} / pcs
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Name optional */}
              <div className="pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-1 block">
                  Nama Anda (Opsional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Contoh: Sarah"
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-200 rounded-xl focus:border-emerald-500 focus:outline-none"
                />
              </div>

            </div>

            {/* Right Column: Dynamic Price Summary Card */}
            <div className="lg:col-span-5 bg-[#faf8f4] rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-md space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-emerald-800 pb-2 border-b border-stone-100 flex items-center justify-between">
                <span>Rincian Estimasi</span>
                <span className="font-mono text-stone-400">#Kalkulator</span>
              </div>

              <div className="space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Produk:</span>
                  <span className="font-semibold text-stone-900 text-right max-w-[60%] truncate">
                    {currentProduct?.name ?? 'Pilih produk'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Jumlah:</span>
                  <span className="font-bold text-stone-900">{quantity} pcs</span>
                </div>

                <div className="flex justify-between">
                  <span>Harga Dasar Satuan:</span>
                  <span className="text-stone-900">{formatRupiah(activeBasePrice)}</span>
                </div>

                {calculation.discountPercentage > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Diskon Qty ({calculation.discountPercentage}%):</span>
                    <span>- {formatRupiah(activeBasePrice - calculation.discountedUnitPrice)} / pcs</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Tambahan ({selectedAddOnIds.length} item):</span>
                  <span>+{formatRupiah(calculation.addOnPricePerUnit)} / pcs</span>
                </div>

                <div className="pt-2 border-t border-stone-100 flex justify-between font-bold text-stone-900">
                  <span>Estimasi Harga Satuan:</span>
                  <span className="text-emerald-800">{formatRupiah(calculation.finalUnitPrice)} / pcs</span>
                </div>
              </div>

              {/* Total Calculation Display */}
              <div className="pt-3 border-t border-stone-200">
                <span className="text-xs text-stone-500 block font-medium">Estimasi Total Biaya:</span>
                <div className="text-2xl sm:text-3xl font-serif font-black text-emerald-800 mt-0.5 tracking-tight">
                  {formatRupiah(calculation.totalEstimate)}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5">
                  Termasuk {quantity} pcs + {selectedAddOnIds.length} opsi finishing
                </div>
              </div>

              {/* Disclaimer strictly requested by prompt */}
              <div className="p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 text-[11px] text-amber-950 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  Harga yang ditampilkan merupakan estimasi cepat. Harga final dapat disesuaikan dengan kebutuhan desain & bahan spesifik via WhatsApp admin.
                </p>
              </div>

              {/* Confirm WhatsApp CTA Button */}
              <button
                id="btn-confirm-calc-wa"
                onClick={handleConfirmViaWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-98 text-white text-sm font-bold shadow-md hover:shadow-lg transition cursor-pointer min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Kirim Estimasi ke WhatsApp</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
