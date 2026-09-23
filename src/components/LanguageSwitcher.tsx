import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: 'English', sub: 'English', flag: '🌐' },
    { code: 'ur' as const, label: 'اردو', sub: 'Urdu', flag: '🇵🇰' },
    { code: 'sd' as const, label: 'سنڌي', sub: 'Sindhi', flag: '🇵🇰' },
  ];

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div
      className="relative inline-block text-slate-800"
      dir="ltr"
      style={{ direction: 'ltr' }}
    >
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-white/95 hover:bg-white text-slate-900 border border-slate-300/90 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md backdrop-blur-md transition-all active:scale-95"
          aria-expanded={isOpen}
          aria-haspopup="true"
          title="Select Language"
        >
          <span className="text-sm sm:text-base leading-none">{current.flag}</span>
          <span className="font-semibold text-xs sm:text-sm">{current.label}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <div className="absolute right-0 mt-1.5 w-40 bg-white rounded-xl shadow-2xl border border-slate-200 py-1 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    onLanguageChange(item.code);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between text-xs sm:text-sm transition-colors ${
                    lang === item.code
                      ? 'bg-emerald-50 text-emerald-950 font-bold border-l-4 border-[#005826]'
                      : 'hover:bg-slate-100 text-slate-700 font-medium'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.flag}</span>
                    <span>{item.label}</span>
                  </span>
                  {lang === item.code && <Check className="w-4 h-4 text-emerald-700" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
