import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { TabNav } from './components/TabNav';
import { RegistrationForm } from './components/RegistrationForm';
import { TokenRequestForm } from './components/TokenRequestForm';
import { SmsPreviewCard } from './components/SmsPreviewCard';
import { HowItWorks } from './components/HowItWorks';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { DisclaimerModal } from './components/DisclaimerModal';
import {
  Language,
  ActiveTab,
  RegistrationFormData,
  TokenFormData,
  ToastMessage,
} from './types';
import { translations } from './translations/translations';
import {
  generateRegistrationSms,
  generateTokenSms,
  isValidCnic,
  isEligibleYear,
} from './utils/smsHelper';

const INITIAL_REG_DATA: RegistrationFormData = {
  cnic: '',
  vehicleNumber: '',
  registrationDate: '',
  provinceCode: 'S',
  vehicleCategory: 'bike',
};

const INITIAL_TOKEN_DATA: TokenFormData = {
  cnic: '',
};

export const App: React.FC = () => {
  // Website opens by default in English (LTR) as requested
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<ActiveTab>('register');
  const [regData, setRegData] = useState<RegistrationFormData>(INITIAL_REG_DATA);
  const [tokenData, setTokenData] = useState<TokenFormData>(INITIAL_TOKEN_DATA);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Disclaimer popup state - opens on every page load & refresh
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(true);

  const handleDismissDisclaimer = () => {
    setIsDisclaimerOpen(false);
  };

  // Update HTML document attributes when language changes
  useEffect(() => {
    const isRtl = lang === 'ur' || lang === 'sd';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  const addToast = (type: 'success' | 'info' | 'warning', text: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Determine generated SMS payload based on active tab
  // Strict Pattern: REG [CNIC] [VEHICLE_NO] [PROVINCE_CODE] [DDMMYYYY]
  const smsBody =
    activeTab === 'register'
      ? generateRegistrationSms(regData)
      : activeTab === 'token'
      ? generateTokenSms(tokenData.cnic)
      : '';

  const isFormValid =
    activeTab === 'register'
      ? isValidCnic(regData.cnic) &&
        regData.vehicleNumber.trim().length >= 3 &&
        regData.registrationDate.trim().length > 0 &&
        isEligibleYear(regData.registrationDate) &&
        Boolean(regData.provinceCode)
      : true;

  const handleCopy = async () => {
    if (!smsBody) return;
    try {
      await navigator.clipboard.writeText(smsBody);
      setIsCopied(true);
      addToast('success', t.toastCopied);

      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#006633', '#f59e0b', '#22c55e'],
        });
      } catch {
        // Safe fallback
      }

      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      addToast('warning', 'Failed to copy to clipboard.');
    }
  };

  const handleFillDemo = () => {
    setRegData({
      cnic: '4210112345671',
      vehicleNumber: 'ABC-1234',
      registrationDate: '2014-05-20',
      provinceCode: 'S',
      vehicleCategory: 'bike',
    });
    addToast('info', t.toastDemoLoaded);
  };

  const handleReset = () => {
    setRegData(INITIAL_REG_DATA);
    addToast('info', t.toastCleared);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 text-slate-900 font-sans relative">
      {/* Pinned Fixed Top-Right Language Switcher (Stable across RTL & LTR) */}
      <LanguageSwitcher lang={lang} onLanguageChange={setLang} />

      {/* Top Header */}
      <Header lang={lang} activeTab={activeTab} />

      {/* Modern & Professional Hero Section */}
      <HeroSection lang={lang} />

      {/* Main Tab Switcher */}
      <TabNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        lang={lang}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'guide' ? (
            <motion.div
              key="guide-tab"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <HowItWorks lang={lang} />
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-7">
                {activeTab === 'register' && (
                  <RegistrationForm
                    formData={regData}
                    onChange={(updates) => setRegData((prev) => ({ ...prev, ...updates }))}
                    lang={lang}
                    onFillDemo={handleFillDemo}
                    onReset={handleReset}
                  />
                )}

                {activeTab === 'token' && (
                  <TokenRequestForm
                    tokenData={tokenData}
                    onChange={(updates) => setTokenData((prev) => ({ ...prev, ...updates }))}
                    lang={lang}
                  />
                )}
              </div>

              {/* Right Column: Sticky SMS Preview & Action Card */}
              <div className="lg:col-span-5 lg:sticky lg:top-6 space-y-3">
                <SmsPreviewCard
                  smsBody={smsBody}
                  lang={lang}
                  onCopy={handleCopy}
                  isCopied={isCopied}
                  isValid={isFormValid}
                />

                {/* Quick Guidance Notice under SMS preview */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 text-xs font-lang text-emerald-950 space-y-1">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <span>💡 {lang === 'ur' ? 'اہم یاد دہانی:' : lang === 'sd' ? 'ضروري يادگيري:' : 'Important Note:'}</span>
                  </div>
                  <p className="leading-relaxed text-slate-700">
                    {lang === 'ur'
                      ? 'میسج ہمیشہ اسی موبائل فون اور سم سے بھیجیں جو آپ کے اپنے شناختی کارڈ پر رجسٹرڈ ہو۔ دوسرے شخص کی سم سے بھیجا گیا میسج نادرا سے مسترد ہو سکتا ہے۔'
                      : lang === 'sd'
                      ? 'ميسيج هميشه ان ئي سم مان موڪليو جيڪا توهان جي سڃاڻپ ڪارڊ تي رجسٽر ٿيل هجي. ٻئي ماڻهو جي سم مان موڪليل ميسيج رد ٿي سگهي ٿو.'
                      : 'Always send the SMS from the SIM registered against your own CNIC. Messages sent from someone else’s SIM will be rejected by NADRA.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Page Load Trilingual Disclaimer Popup (Defaults to English) */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={handleDismissDisclaimer}
        currentAppLang={lang}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />

      {/* Footer with Developer Branding and Social Links */}
      <Footer lang={lang} />
    </div>
  );
};

export default App;
