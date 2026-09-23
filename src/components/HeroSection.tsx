import React from 'react';
import { Fuel, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface HeroSectionProps {
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2">
      <div className="bg-gradient-to-br from-emerald-900 via-[#005826] to-[#00471e] text-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-700/50 relative overflow-hidden">
        {/* Subtle decorative background watermarks */}
        <div className="absolute -bottom-8 -right-8 opacity-10 pointer-events-none">
          <Fuel className="w-64 h-64 text-white" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text & Info */}
          <div className="flex-1 space-y-4 text-center md:text-start">
            {/* Top Micro Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-xs font-semibold text-emerald-200">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{t.govTitle}</span>
              <span className="text-emerald-400">•</span>
              <span className="text-amber-300 font-bold">{t.shortCodeNotice}</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-lang">
              {t.heroHeading}
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-emerald-100/90 font-medium leading-relaxed max-w-xl font-lang">
              {t.heroSubheading}
            </p>

            {/* Badges Row */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center md:justify-start pt-1">
              {/* Badge 1: 100% Free SMS */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white shadow-xs backdrop-blur-xs font-lang">
                <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                <span>{t.freeSmsBadge}</span>
              </div>

              {/* Badge 2: Rs. 100/Litre Relief */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white shadow-xs backdrop-blur-xs font-lang">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{t.reliefRateBadge}</span>
              </div>

              {/* Badge 3: 2006+ Registered Vehicles */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs font-bold text-white shadow-xs backdrop-blur-xs font-lang">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>{t.eligibleYearBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic / Scheme Summary Card */}
          <div className="w-full md:w-auto shrink-0 flex justify-center">
            <div className="bg-white/95 text-slate-900 rounded-2xl p-4 sm:p-5 shadow-xl border border-white/30 max-w-xs w-full backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-[#005826] text-white rounded-lg">
                    <Fuel className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="font-bold text-sm block leading-tight">Shortcode 9771</span>
                    <span className="text-[10px] text-slate-500">Government Relief</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 font-bold text-[10px] rounded-full">
                  Free
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-700 font-lang">
                <div className="flex items-center justify-between py-1 bg-slate-50 px-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold">🏍️ {lang === 'ur' ? 'موٹر سائیکل / رکشہ:' : lang === 'sd' ? 'موٽرسائيڪل / رڪشا:' : 'Bikes & Rickshaws:'}</span>
                  <strong className="text-emerald-800">20L / Mo</strong>
                </div>

                <div className="flex items-center justify-between py-1 bg-slate-50 px-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold">🚗 {lang === 'ur' ? '800cc تک کی کار:' : lang === 'sd' ? '800cc تائين ڪار:' : 'Cars up to 800cc:'}</span>
                  <strong className="text-emerald-800">30L / Mo</strong>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-lang">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-700" />
                  <span>{lang === 'ur' ? '7 دن ٹوکن میعاد' : lang === 'sd' ? '7 ڏينهن ٽوڪن مدت' : '7-Day Token Validity'}</span>
                </span>
                <span className="font-bold text-emerald-800">
                  - Rs. 100/L
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
