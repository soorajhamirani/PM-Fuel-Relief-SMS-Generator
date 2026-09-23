import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Check, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAppLang: Language;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Modal content strictly in English by default as requested
  const [modalLang, setModalLang] = useState<'en' | 'ur' | 'sd'>('en');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden space-y-4 max-h-[92vh] overflow-y-auto"
          dir={modalLang === 'en' ? 'ltr' : 'rtl'}
        >
          {/* Top Pakistani Green Stripe */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#005826]" />

          {/* Modal Header */}
          <div className="flex items-start justify-between gap-3 pt-1">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-xl shrink-0">
                <ShieldAlert className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-lang tracking-tight">
                  {modalLang === 'en'
                    ? 'Important Disclaimer'
                    : modalLang === 'ur'
                    ? 'ضروری نوٹس اور وضاحت (Important Disclaimer)'
                    : 'ضروري نوٽيس ۽ وضاحت (Important Disclaimer)'}
                </h3>
                <span className="text-[11px] font-semibold text-emerald-800 font-lang flex items-center gap-1 mt-0.5">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Public Assistance &amp; Free SMS Formatting Tool</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Language Switcher Tabs inside Modal for accessibility */}
          <div className="flex items-center justify-between bg-slate-100 p-1 rounded-xl text-xs font-semibold" dir="ltr">
            <div className="flex items-center gap-1.5 text-slate-500 px-2 text-[11px]">
              <Globe className="w-3.5 h-3.5" />
              <span>Language:</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setModalLang('en')}
                className={`px-3 py-1 rounded-lg transition-all ${
                  modalLang === 'en'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setModalLang('ur')}
                className={`px-3 py-1 rounded-lg transition-all font-lang ${
                  modalLang === 'ur'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                اردو
              </button>
              <button
                type="button"
                onClick={() => setModalLang('sd')}
                className={`px-3 py-1 rounded-lg transition-all font-lang ${
                  modalLang === 'sd'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                سنڌي
              </button>
            </div>
          </div>

          {/* Main Body Text (Strictly requested content) */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 leading-relaxed font-lang">
            {modalLang === 'en' && (
              <p className="font-normal text-slate-800 leading-relaxed">
                This is <strong>NOT</strong> an official Government of Pakistan website. This platform is independently developed solely for public assistance to help citizens generate the correct SMS format. We do not collect, store, or share any personal information or data.
              </p>
            )}

            {modalLang === 'ur' && (
              <p className="font-normal text-slate-800 leading-relaxed">
                یہ کوئی سرکاری (Government of Pakistan) ویب سائٹ <strong>نہیں</strong> ہے۔ یہ پلیٹ فارم مکمل طور پر عوامی رہنمائی اور درست ایس ایم ایس بنانے کی سہولت کے لیے آزادانہ طور پر تیار کیا گیا ہے۔ ہم کسی بھی شہری کا کوئی ذاتی ڈیٹا یا معلومات جمع یا محفوظ نہیں کرتے۔
              </p>
            )}

            {modalLang === 'sd' && (
              <p className="font-normal text-slate-800 leading-relaxed">
                هي ڪا به سرڪاري (Government of Pakistan) ويب سائيٽ <strong>ناهي</strong>. هي پليٽ فارم مڪمل طور تي عوامي رهنمائي ۽ درست ايس ايم ايس ٺاهڻ جي سهولت لاءِ آزادانه طور تيار ڪيو ويو آهي. اسان ڪنهن به شهري جو ڪو به ذاتي ڊيٽا گڏ يا محفوظ نٿا ڪريون.
              </p>
            )}
          </div>

          {/* Clear Action Button: "Agree to Continue" */}
          <div className="pt-1">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 px-5 bg-[#005826] hover:bg-[#00471e] active:bg-[#003816] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2 font-lang"
            >
              <Check className="w-5 h-5 text-amber-300" />
              <span>
                {modalLang === 'en'
                  ? 'Agree to Continue'
                  : modalLang === 'ur'
                  ? 'اتفاق کریں اور آگے بڑھیں (Agree to Continue)'
                  : 'متفق ٿيو ۽ اڳتي وڌو (Agree to Continue)'}
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
