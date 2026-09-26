import React from 'react';
import { HeartHandshake, PackageOpen, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import { HUBS } from '../data/hubs';
import { Hub } from '../types';

interface HubPickerSectionProps {
  onSelectHub: (hub: Hub) => void;
}

const ICONS: Record<string, React.ReactNode> = {
  HeartHandshake: <HeartHandshake className="w-5 h-5 sm:w-7 sm:h-7" />,
  PackageOpen: <PackageOpen className="w-5 h-5 sm:w-7 sm:h-7" />,
  BookOpen: <BookOpen className="w-5 h-5 sm:w-7 sm:h-7" />,
};

export const HubPickerSection: React.FC<HubPickerSectionProps> = ({ onSelectHub }) => {
  return (
    <section id="hub-picker-section" className="py-8 sm:py-20 bg-[#faf7f2] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-14 space-y-1 sm:space-y-2">
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pilih Kebutuhan Cetak Anda</span>
          </div>
          <h2 className="font-serif text-lg sm:text-3xl md:text-4xl font-extrabold text-stone-900 tracking-tight">
            Mau Cetak Apa Hari Ini?
          </h2>
          <p className="hidden sm:block text-xs sm:text-base text-stone-600">
            Pilih salah satu kategori besar di bawah untuk melihat katalog, galeri, dan kalkulator harganya.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {HUBS.map((hub) => (
            <button
              key={hub.id}
              id={`hub-card-${hub.id}`}
              onClick={() => onSelectHub(hub.id)}
              className={`group relative overflow-hidden text-left p-2.5 sm:p-7 rounded-xl sm:rounded-3xl border border-stone-200/90 bg-gradient-to-br ${hub.gradient} bg-[#faf8f4] hover:shadow-xl sm:hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[92px] sm:min-h-[260px]`}
            >
              <div>
                <div className={`inline-flex p-1.5 sm:p-3.5 rounded-lg sm:rounded-2xl bg-white shadow-md border ${hub.accentColor} mb-1.5 sm:mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  {ICONS[hub.iconName]}
                </div>
                <h3 className="font-serif text-xs sm:text-2xl font-bold text-stone-900 leading-tight">
                  {hub.title}
                </h3>
                <p className="hidden sm:block text-xs sm:text-sm font-semibold text-stone-700 mt-1">{hub.subtitle}</p>
                <p className="hidden sm:block text-xs sm:text-sm text-stone-500 mt-2.5 leading-relaxed">
                  {hub.description}
                </p>
              </div>

              <div className="mt-1.5 sm:mt-5 pt-1.5 sm:pt-4 border-t border-stone-900/10 flex items-center justify-between text-[10px] sm:text-sm font-bold text-emerald-900">
                <span className="hidden sm:inline">Lihat Katalog</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1.5 transition-transform mx-auto sm:mx-0" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
