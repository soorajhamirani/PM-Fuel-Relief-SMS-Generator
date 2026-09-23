import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, KeyRound, HelpCircle } from 'lucide-react';
import { ActiveTab, Language } from '../types';
import { translations } from '../translations/translations';

interface TabNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  lang: Language;
}

export const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange, lang }) => {
  const t = translations[lang];

  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'register',
      label: t.tabRegister,
      icon: <UserPlus className="w-5 h-5 shrink-0" />,
      badge: lang === 'ur' ? 'پہلی بار' : lang === 'sd' ? 'پهرين دفعي' : 'First Time',
    },
    {
      id: 'token',
      label: t.tabToken,
      icon: <KeyRound className="w-5 h-5 shrink-0" />,
      badge: lang === 'ur' ? 'رجسٹرڈ صارفین' : lang === 'sd' ? 'رجسٽرڊ ماڻهو' : 'Monthly OTP',
    },
    {
      id: 'guide',
      label: t.tabGuide,
      icon: <HelpCircle className="w-5 h-5 shrink-0" />,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pt-3 pb-1">
      <div className="bg-slate-200/80 p-1.5 rounded-2xl flex flex-col sm:flex-row gap-1.5 shadow-inner border border-slate-300/70">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative flex-1 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm sm:text-base font-bold transition-all tap-target ${
                isActive
                  ? 'text-pakgreen-950 shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-white rounded-xl shadow-md border border-slate-200/90"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-pakgreen-800' : 'text-slate-500'}`}>
                {tab.icon}
              </span>
              <span className="relative z-10 font-lang font-bold whitespace-nowrap">
                {tab.label}
              </span>
              {tab.badge && (
                <span
                  className={`relative z-10 hidden md:inline-flex text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-pakgreen-100 text-pakgreen-800'
                      : 'bg-slate-300 text-slate-700'
                  }`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
