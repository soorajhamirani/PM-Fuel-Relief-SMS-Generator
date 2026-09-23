import React, { useState } from 'react';
import { Send, Key, Fuel, Award, ChevronDown, HelpCircle, PhoneCall, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface HowItWorksProps {
  lang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: '1',
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <Send className="w-5 h-5 text-pakgreen-700" />,
      color: 'bg-emerald-100 text-pakgreen-800',
    },
    {
      num: '2',
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Key className="w-5 h-5 text-amber-700" />,
      color: 'bg-amber-100 text-amber-800',
    },
    {
      num: '3',
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <Fuel className="w-5 h-5 text-blue-700" />,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      num: '4',
      title: t.step4Title,
      desc: t.step4Desc,
      icon: <Award className="w-5 h-5 text-emerald-700" />,
      color: 'bg-emerald-100 text-emerald-800',
    },
  ];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  return (
    <div className="space-y-8">
      {/* 4-Step Process Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200/90 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-pakgreen-600 via-teal-500 to-relief-gold" />

        <div className="pb-4 mb-6 border-b border-slate-100">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-lang tracking-tight">
            {lang === 'ur'
              ? 'پیٹرول ریلیف حاصل کرنے کا 4 مرحلہ وار آسان طریقہ'
              : lang === 'sd'
              ? 'پيٽرول رليف وٺڻ جا 4 آسان مرحلا'
              : '4 Easy Steps to Avail Fuel Subsidy'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-lang mt-1">
            {lang === 'ur'
              ? 'کسی انٹرنیٹ کے بغیر براہِ راست پیٹرول پمپ پر سبسڈی حاصل کریں'
              : lang === 'sd'
              ? 'ڪنهن انٽرنيٽ کانسواءِ سڌو پمپ تان رعايت وٺو'
              : 'Redeem your Rs. 100/Litre subsidy directly at authorized fuel stations'}
          </p>
        </div>

        {/* Step cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-slate-50 hover:bg-slate-100/80 p-4 rounded-2xl border border-slate-200 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${step.color}`}>
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-white shadow-xs group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 font-lang mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 font-lang leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-pakgreen-700">
                <ShieldCheck className="w-3.5 h-3.5 inline ltr:mr-1 rtl:ml-1" />
                <span>{lang === 'ur' ? 'تصدیق شدہ' : lang === 'sd' ? 'تصديق ٿيل' : 'Verified Step'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200/90 relative overflow-hidden">
        <div className="pb-4 mb-4 border-b border-slate-100 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-pakgreen-700" />
          <h2 className="text-lg sm:text-xl font-black text-slate-900 font-lang">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-start flex items-center justify-between gap-3 text-sm sm:text-base font-bold text-slate-800 hover:text-pakgreen-900 font-lang transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-pakgreen-700' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 font-lang leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpline Notice */}
        <div className="mt-6 p-4 bg-pakgreen-50 rounded-2xl border border-pakgreen-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-pakgreen-700 text-white rounded-xl shadow-xs">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-pakgreen-950 font-lang">
                {lang === 'ur'
                  ? 'سرکاری ہیلپ لائن اور شکایات'
                  : lang === 'sd'
                  ? 'سرڪاري هيلپ لائن ۽ شڪايتون'
                  : 'Official Helpline & Inquiries'}
              </h4>
              <p className="text-xs text-pakgreen-800 font-lang">
                {lang === 'ur'
                  ? 'کسی بھی دشواری کی صورت میں 9771 پر ایس ایم ایس بھیجیں'
                  : lang === 'sd'
                  ? 'ڪنهن به مسئلي جي صورت ۾ 9771 تي ميسيج موڪليو'
                  : 'For assistance or quota verification, SMS 9771'}
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right rtl:sm:text-left">
            <span className="text-lg font-mono font-black text-pakgreen-900 bg-white px-3 py-1 rounded-xl border border-pakgreen-300 shadow-xs inline-block">
              SMS: 9771
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
