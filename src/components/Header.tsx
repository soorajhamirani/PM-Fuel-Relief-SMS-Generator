import React, { useState } from 'react';
import { Volume2, VolumeX, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';
import { speakText, stopSpeaking } from '../utils/speechHelper';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  lang: Language;
  activeTab: string;
  onLanguageChange?: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, activeTab, onLanguageChange }) => {
  const t = translations[lang];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleToggleAudio = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      let narrative = '';
      if (lang === 'ur') {
        narrative = activeTab === 'register'
          ? 'فیول ریلیف میسج جنریٹر۔ 9771 پر میسج بھیجنا بالکل مفت ہے، 0 بیلنس پر بھی جائے گا۔ اپنا شناختی کارڈ نمبر، گاڑی کا رجسٹریشن نمبر، تاریخ اور صوبہ درج کریں۔ 2006 یا اس کے بعد رجسٹر ہونے والی گاڑیاں اہل ہیں۔'
          : activeTab === 'token'
          ? 'پیٹرول سبسڈی ٹوکن کوڈ حاصل کرنے کے لیے 9771 پر ٹی او کے (TOK) لکھ کر بھیجیں۔ یہ ٹوکن 7 دن تک کارآمد رہے گا۔'
          : 'پیٹرول ریلیف اسکیم میں موٹر سائیکل اور رکشہ کو 20 لیٹر، اور 800 سی سی کار کو 30 لیٹر ماہانہ 100 روپے سستا پیٹرول دیا جا رہا ہے۔';
      } else if (lang === 'sd') {
        narrative = activeTab === 'register'
          ? 'فيول رليف ميسيج جنريٽر. 9771 تي ايس ايم ايس بلڪل مفت آهي، 0 بيلنس تي به ويندو. سڃاڻپ ڪارڊ ۽ گاڏي جا تفصيل لکو. 2006 يا ان کان پوءِ واريون گاڏيون اهل آهن.'
          : activeTab === 'token'
          ? 'پيٽرول سبسڊي ٽوڪن حاصل ڪرڻ لاءِ 9771 تي ٽي او ڪي (TOK) لکي موڪليو. هي ٽوڪن 7 ڏينهن تائين ڪارآمد آهي.'
          : 'پيٽرول رليف اسڪيم ۾ موٽرسائيڪل کي 20 ليٽر، ۽ ڪار کي 30 ليٽر ماهوار 100 رپيا سستو پيٽرول ملندو.';
      } else {
        narrative = activeTab === 'register'
          ? 'Fuel Relief SMS Generator. SMS to 9771 is 100% free and works with zero balance. Enter your CNIC, vehicle number, date and province. Vehicles registered in 2006 or later are eligible.'
          : activeTab === 'token'
          ? 'To receive your fuel discount OTP code, send TOK to 9771. Each token is valid for 7 days.'
          : 'The PM Petrol Relief scheme provides 100 Rupees per liter subsidy. 20 Liters monthly quota for bikes and rickshaws, and 30 Liters for cars up to 800cc.';
      }

      speakText(
        narrative,
        lang,
        () => setIsPlayingAudio(true),
        () => setIsPlayingAudio(false)
      );
    }
  };

  return (
    <header className="bg-[#005826] text-white shadow-md border-b-2 border-emerald-800 relative select-none">
      {/* Top Bar for Official Notice */}
      <div className="bg-[#00471e] px-3 sm:px-4 py-1.5 text-xs border-b border-[#003d1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-x-3 gap-y-1">
          <div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 text-emerald-100 min-w-0">
            <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="font-semibold text-[11px] sm:text-xs">{t.govTitle}</span>
            <span className="text-emerald-300/60 hidden xs:inline">•</span>
            <span className="text-amber-200 font-bold text-[11px] sm:text-xs">{t.shortCodeNotice}</span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold text-emerald-100 bg-[#003816] px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-600/40 shrink-0">
            {t.freeSmsBadge}
          </span>
        </div>
      </div>

      {/* Main Header Container (dir="ltr" ensures Brand stays Left and Switcher stays Right) */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5" dir="ltr">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left Side: New Logo + "fuelrelief" Brand Title */}
          <div className="flex items-center gap-2 sm:gap-3.5 min-w-0 flex-1">
            {/* Uploaded PM Fuel Relief Logo */}
            <a
              href="/"
              className="flex items-center gap-2 sm:gap-3.5 group focus:outline-hidden min-w-0 flex-1"
              title="PM Fuel Relief - 9771 SMS Generator"
            >
              <div className="relative shrink-0 rounded-xl overflow-hidden shadow-md ring-1 ring-white/30 transition-transform group-hover:scale-105 bg-white px-2 py-1 sm:px-3 sm:py-1.5 flex items-center justify-center">
                <img
                  src="/pm-fuel-relief-logo.png"
                  alt="PM Fuel Relief - Government of Pakistan Initiative"
                  className="h-8 sm:h-11 md:h-12 w-auto max-w-[110px] sm:max-w-[180px] object-contain"
                  loading="eager"
                />
              </div>

              {/* Brand Typography & Badges */}
              <div className="flex flex-col text-left min-w-0 flex-1">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-white font-sans lowercase hidden sm:inline">
                    fuel<span className="text-amber-400">relief</span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-sans shadow-xs">
                    9771
                  </span>
                </div>
                <p
                  className="text-[10px] sm:text-xs text-emerald-100/90 font-medium font-lang leading-tight truncate max-w-[200px] xs:max-w-[260px] sm:max-w-none"
                  dir={lang === 'en' ? 'ltr' : 'rtl'}
                  title={t.appSubtitle}
                >
                  {t.appSubtitle}
                </p>
              </div>
            </a>
          </div>

          {/* Right Action Group: Audio Voice Helper Button & Language Switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <button
              onClick={handleToggleAudio}
              type="button"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl font-medium text-xs sm:text-sm transition-all active:scale-95 border ${
                isPlayingAudio
                  ? 'bg-amber-400 text-slate-900 border-amber-300 font-bold'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
              title={isPlayingAudio ? t.stopVoice : t.listenVoice}
              aria-label={isPlayingAudio ? t.stopVoice : t.listenVoice}
            >
              {isPlayingAudio ? (
                <VolumeX className="w-4 h-4 text-slate-900 shrink-0" />
              ) : (
                <Volume2 className="w-4 h-4 text-amber-300 shrink-0" />
              )}
              <span className="font-lang whitespace-nowrap hidden sm:inline">
                {isPlayingAudio ? t.stopVoice : t.listenVoice}
              </span>
            </button>

            {onLanguageChange && (
              <LanguageSwitcher lang={lang} onLanguageChange={onLanguageChange} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
