import React from 'react';
import { Sparkles, CheckCircle2, MapPin, Clock, Award, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  const consultWhatsAppUrl = getWhatsAppUrl(
    `Halo Admin ${SITE_CONFIG.brandName}, saya ingin tanya-tanya seputar layanan percetakan untuk acara saya.`
  );

  return (
    <section id="tentang-section" className="py-16 bg-[#f3efe6] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Story & Trust */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Mengenal Kami</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
              Tentang RuangKarya
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-stone-600 leading-relaxed">
              <p>
                <strong>RuangKarya</strong> adalah usaha percetakan kreatif yang berfokus pada pembuatan <strong>undangan</strong>, <strong>souvenir</strong>, dan berbagai <strong>kebutuhan cetak acara</strong> seperti pernikahan, sunatan/khitanan, tasyakuran aqiqah, ulang tahun, hingga gathering perusahaan.
              </p>
              <p>
                Kami memahami bahwa setiap acara membawa kisah dan harapan istimewa. Oleh karena itu, kami memadukan pemilihan kertas berkualitas, ketajaman cetak presisi, ornamen desain elegan, serta pelayanan ramah agar momen bahagia Anda dan keluarga tersampaikan dengan penuh kehormatan kepada para tamu undangan.
              </p>
            </div>

            {/* Values / Keunggulan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SITE_CONFIG.guarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#faf8f4] border border-stone-200/90">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-stone-900">{item.title}</div>
                    <div className="text-[11px] text-stone-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={consultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition shadow"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Konsultasi Acara Anda Bersama Kami</span>
              </a>
            </div>
          </div>

          {/* Right Column: Workshop & Service Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif text-lg font-bold text-stone-900 border-b border-stone-100 pb-3">
              Informasi Layanan & Operasional
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-stone-900">Alamat & Workshop</div>
                  <div className="text-stone-600 text-xs mt-0.5">{SITE_CONFIG.address}, {SITE_CONFIG.location}</div>
                  <div className="text-[11px] text-stone-400 mt-0.5">Melayani pemesanan dan pengiriman sesuai jangkauan layanan</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-stone-900">Jam Operasional Layanan</div>
                  <div className="text-stone-600 text-xs mt-0.5">{SITE_CONFIG.workingHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-stone-900">Jaminan Keamanan Pesanan</div>
                  <div className="text-stone-600 text-xs mt-0.5">
                    Proses persetujuan mockup (ACC) sebelum naik cetak, dan pengecekan jumlah serta kualitas secara teliti sebelum dikemas.
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
              <div>
                <span className="block font-bold">Nomor WhatsApp Resmi:</span>
                <span className="font-mono font-semibold text-emerald-800">{SITE_CONFIG.phoneDisplay}</span>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
