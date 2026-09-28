import React from 'react';
import { 
  LayoutGrid, 
  FileText, 
  MessageCircle, 
  CheckCircle2, 
  Printer, 
  PackageCheck,
  ArrowRight
} from 'lucide-react';
import { HOW_TO_ORDER_STEPS } from '../data/howToOrder';

export const HowToOrderSection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Printer':
        return <Printer className="w-5 h-5" />;
      case 'PackageCheck':
      default:
        return <PackageCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="cara-pesan-section" className="py-8 sm:py-16 bg-[#faf7f2] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Alur Pemesanan
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            Cara Pesan di Rumah Ijo
          </h2>
          <p className="text-xs sm:text-base text-stone-600">
            Pilih produk → isi detail → lanjut WhatsApp. Tanpa akun dan tanpa alur yang berbelit.
          </p>
        </div>

        {/* Steps Grid (6 Steps) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 relative">
          {HOW_TO_ORDER_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#f5f1e8]/80 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-stone-200/90 relative flex flex-col justify-between hover:bg-[#faf8f4] hover:shadow-md transition"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="hidden sm:inline text-xs font-mono font-bold text-stone-400 bg-white px-2.5 py-1 rounded-full border border-stone-200">
                    Langkah 0{step.step}
                  </span>
                </div>

                <h3 className="text-xs sm:text-base font-bold text-stone-900 mb-1.5 leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-[10px] sm:text-sm text-stone-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-stone-200/60 text-[9px] sm:text-[11px] text-emerald-700 font-medium">
                {step.step === 3 ? 'Kirim format chat otomatis' : step.step === 4 ? 'Gratis revisi sampai ACC' : 'Mudah & Terkoordinasi'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
