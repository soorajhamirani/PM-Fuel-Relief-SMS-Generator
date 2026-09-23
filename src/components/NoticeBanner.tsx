import React from 'react';
import { MessageSquare, Clock, Fuel, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface NoticeBannerProps {
  lang: Language;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-4 pb-2 space-y-3">
      {/* Top Banner Row: Free SMS Highlight & Relief Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Card 1: 100% Free SMS on 0 Balance */}
        <div className="bg-emerald-50 border-2 border-emerald-400/90 rounded-2xl p-3.5 shadow-xs flex items-center gap-3">
          <div className="p-2.5 bg-emerald-700 text-white rounded-xl shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-emerald-800 uppercase block tracking-wider font-lang">
              {lang === 'ur' ? 'مفت ایس ایم ایس سہولت' : lang === 'sd' ? 'مفت ايس ايم ايس سهولت' : 'Zero Balance Allowed'}
            </span>
            <p className="text-sm sm:text-base font-extrabold text-emerald-950 font-lang mt-0.5 leading-snug">
              {t.freeSmsBadge}
            </p>
          </div>
        </div>

        {/* Card 2: Subsidy Rate */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3.5 shadow-xs flex items-center gap-3">
          <div className="p-2.5 bg-amber-600 text-white rounded-xl shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-amber-800 uppercase block tracking-wider font-lang">
              {lang === 'ur' ? 'حکومتی ریلیف شرح' : lang === 'sd' ? 'حڪومتي رليف شرح' : 'Direct Subsidy'}
            </span>
            <p className="text-sm sm:text-base font-extrabold text-amber-950 font-lang mt-0.5 leading-snug">
              {t.reliefRateBadge}
            </p>
          </div>
        </div>

        {/* Card 3: Monthly Quota Breakdown */}
        <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3.5 shadow-xs flex items-center gap-3">
          <div className="p-2.5 bg-pakgreen-800 text-white rounded-xl shrink-0">
            <Fuel className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase block tracking-wider font-lang">
              {lang === 'ur' ? 'ماہانہ کوٹہ حد' : lang === 'sd' ? 'مهيني جو ڪوٽا' : 'Monthly Quota'}
            </span>
            <p className="text-xs sm:text-sm font-bold text-slate-900 font-lang mt-0.5">
              🏍️ 20L (بائیک) &bull; 🚗 30L (کار)
            </p>
          </div>
        </div>
      </div>

      {/* Helpful Policy Note: 7-Day Expiry & Weekly Installments */}
      <div className="bg-blue-50/90 border border-blue-200 rounded-2xl p-3.5 flex items-start gap-3">
        <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-blue-950 font-lang leading-relaxed">
          <span className="font-extrabold text-blue-900">
            {t.quotaPolicyTitle}
          </span>{' '}
          <span>{t.quotaPolicyNotice}</span>
        </div>
      </div>
    </div>
  );
};
