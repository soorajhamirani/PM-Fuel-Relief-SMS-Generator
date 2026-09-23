import React from 'react';
import { KeyRound, ShieldAlert, Info, MessageSquareText, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { Language, TokenFormData } from '../types';
import { translations } from '../translations/translations';

interface TokenRequestFormProps {
  tokenData: TokenFormData;
  onChange: (newData: Partial<TokenFormData>) => void;
  lang: Language;
}

export const TokenRequestForm: React.FC<TokenRequestFormProps> = ({
  lang,
}) => {
  const t = translations[lang];

  return (
    <article aria-labelledby="token-heading" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-5">
      {/* Heading */}
      <div className="pb-4 border-b border-slate-100 flex items-center gap-3">
        <div className="p-2.5 bg-amber-100 text-amber-900 rounded-xl">
          <KeyRound className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-lang tracking-tight">
            {t.tokenHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-lang mt-0.5">
            {t.tokenSubheading}
          </p>
        </div>
      </div>

      {/* Primary Action Guidance */}
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
        <Info className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-emerald-950 font-lang leading-relaxed">
          <p className="font-bold text-emerald-900">
            {lang === 'ur'
              ? 'صرف "TOK" لکھ کر 9771 پر بھیجیں:'
              : lang === 'sd'
              ? 'صرف "TOK" لکي 9771 تي موڪليو:'
              : 'Send "TOK" to 9771:'}
          </p>
          <p className="mt-1 text-slate-700">
            {lang === 'ur'
              ? 'اگر آپ کی رجسٹریشن مکمل ہو چکی ہے، تو دائیں طرف دیے گئے "ایس ایم ایس بھیجیں" کے بٹن پر کلک کریں۔ آپ کے فون پر 9771 کے لیے خودکار TOK میسج تیار ہو جائے گا۔'
              : lang === 'sd'
              ? 'جيڪڏهن رجسٽريشن مڪمل آهي ته ساڄي طرف "ايس ايم ايس موڪليو" واري بٽڻ تي ڪلڪ ڪريو. پاڻمرادو 9771 لاءِ TOK تيار ٿي ويندو.'
              : 'If you are already registered, click "Send SMS via Phone" on the right card to instantly trigger TOK to 9771.'}
          </p>
        </div>
      </div>

      {/* 7-Day Expiry & Weekly Installments Box */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
        <Clock className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-blue-950 font-lang leading-relaxed">
          <span className="font-bold text-blue-900">
            {t.quotaPolicyTitle}
          </span>{' '}
          <span>{t.quotaPolicyNotice}</span>
        </div>
      </div>

      {/* Realistic "What 9771 Reply Looks Like" Preview Card */}
      <div className="border border-slate-200 rounded-2xl p-4 sm:p-5 bg-slate-50 space-y-3.5">
        <div className="flex items-center justify-between text-xs font-bold text-slate-700 font-lang">
          <div className="flex items-center gap-2 text-slate-800">
            <MessageSquareText className="w-4 h-4 text-pakgreen-800" />
            <span className="text-sm font-bold text-slate-900">{t.tokenMockHeading}</span>
          </div>
          <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-full text-[11px] font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            <span>{lang === 'ur' ? 'سرکاری نمونہ' : lang === 'sd' ? 'سرڪاري نمونو' : 'Official Format'}</span>
          </span>
        </div>

        {/* Realistic Mobile Incoming SMS Simulation Bubble */}
        <div className="bg-slate-200/70 p-3 sm:p-4 rounded-2xl border border-slate-300/80 shadow-inner">
          <div className="max-w-md mx-auto space-y-2">
            {/* Phone Chat Header */}
            <div className="bg-white px-3.5 py-2 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-2xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#005826] text-white font-bold flex items-center justify-center text-xs">
                  97
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight">9771</span>
                  <span className="text-[10px] text-slate-400">Government of Pakistan</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                <Phone className="w-3 h-3" />
                <span>17:19</span>
              </div>
            </div>

            {/* Time Stamp */}
            <div className="text-center py-0.5">
              <span className="text-[10px] text-slate-500 bg-white/70 px-2 py-0.5 rounded-full">
                {lang === 'ur' ? 'موصولہ جوابی ایس ایم ایس' : lang === 'sd' ? 'مليل جوابي ايس ايم ايس' : 'Incoming Message'}
              </span>
            </div>

            {/* Exact Official Scheme SMS Message Bubble */}
            <div className="ltr:mr-auto rtl:ml-auto max-w-[96%] bg-white text-slate-900 rounded-2xl rounded-tl-xs rtl:rounded-tl-2xl rtl:rounded-tr-xs p-4 shadow-sm border border-slate-200/90 text-sm font-lang leading-relaxed space-y-1.5" dir="rtl">
              <div className="text-slate-800 whitespace-pre-line text-sm sm:text-base font-semibold space-y-1">
                <p className="text-pakgreen-900 font-bold border-b border-slate-100 pb-1">
                  آپ کا ٹوکن: <span className="font-mono text-emerald-800 font-black tracking-wide">34701XXXXX</span> ہے
                </p>
                <p>
                  آپ کی سواری کا نمبر: <span className="font-mono font-bold text-slate-900">ABC-1234</span> ہے
                </p>
                <p>
                  فیول: <span className="font-bold text-emerald-700">5.00 لیٹر</span>
                </p>
                <p className="text-xs text-slate-600 pt-1 border-t border-slate-100">
                  آپ کا ٹوکن 10 دن (17:19 24-Sep) تک قابل استعمال ہے
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100/80">
                <span>9771 (Free SMS)</span>
                <span>17:19</span>
              </div>
            </div>

            {/* Translation reference for English & Sindhi users */}
            {lang !== 'ur' && (
              <div className="bg-white/90 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 font-lang space-y-0.5">
                <span className="text-[10px] font-bold text-slate-400 block uppercase">
                  {lang === 'sd' ? 'سنڌي ترجمو:' : 'English Reference:'}
                </span>
                {t.tokenMockLinesTranslated.map((line, idx) => (
                  <p key={idx} className="font-medium">{line}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-slate-600 font-lang pt-1">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>
            {lang === 'ur'
              ? 'یہ ٹوکن کوڈ صرف پیٹرول پمپ پر پی او ایس مشین والے کو بتائیں تاکہ 100 روپے فی لیٹر رعایت لاگو ہو۔'
              : lang === 'sd'
              ? 'هي ٽوڪن ڪوڊ صرف پيٽرول پمپ تي ڪيشيئر کي ڏيکاريو ته جيئن 100 رپيا في ليٽر رعايت لاڳو ٿئي.'
              : 'Show this token code directly to the authorized petrol pump cashier to redeem your Rs. 100/L discount.'}
          </span>
        </div>
      </div>
    </article>
  );
};
