import React from 'react';
import { ShieldCheck, Fuel, Linkedin, Github } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="mt-16 bg-slate-900 text-slate-400 border-t border-slate-800 py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        {/* Top Info Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-800 rounded-xl text-amber-300">
              <Fuel className="w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-bold text-base font-lang block">
                {t.appTitle}
              </span>
              <span className="text-xs text-slate-400">
                9771 PM Fuel Subsidy SMS Tool
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-800/50">
            <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" />
            <span className="font-lang">100% Client-side • Zero Data Retention</span>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="text-xs text-slate-400 leading-relaxed font-lang text-center sm:text-start">
          <p>{t.footerDisclaim}</p>
        </div>

        {/* Branding, Developer Credits & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800/80 gap-4 text-xs">
          <div className="text-slate-400 font-medium text-center sm:text-start">
            <span className="text-slate-300 font-semibold">Designed & Developed by </span>
            <span className="text-white font-bold text-sm">Sooraj Hamirani</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/soorajhamirani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-[#0A66C2] transition-all duration-200 group active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span className="font-semibold text-xs">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/soorajhamirani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-700 hover:border-slate-500 transition-all duration-200 group active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span className="font-semibold text-xs">GitHub</span>
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-center text-[11px] text-slate-500 font-lang pt-1">
          <span>{t.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
