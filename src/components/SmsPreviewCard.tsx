import React, { useState } from 'react';
import {
  Send,
  Copy,
  Check,
  Share2,
  QrCode,
  Info,
  CheckCircle,
  X,
  Phone,
  MessageCircle
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Language } from '../types';
import { translations } from '../translations/translations';
import { getSmsUri, getWhatsAppShareUrl } from '../utils/smsHelper';

interface SmsPreviewCardProps {
  smsBody: string;
  lang: Language;
  onCopy: () => void;
  isCopied: boolean;
  isValid: boolean;
}

export const SmsPreviewCard: React.FC<SmsPreviewCardProps> = ({
  smsBody,
  lang,
  onCopy,
  isCopied,
  isValid,
}) => {
  const t = translations[lang];
  const [showQrModal, setShowQrModal] = useState(false);

  const recipient = '9771';
  const smsUri = getSmsUri(recipient, smsBody);
  const whatsappUrl = getWhatsAppShareUrl(
    `PM Petrol Relief SMS for 9771:\n${smsBody}`,
    lang === 'ur'
      ? 'وزیر اعظم پیٹرول ریلیف میسج کوڈ:'
      : lang === 'sd'
      ? 'وزيراعظم پيٽرول رليف ايس ايم ايس ڪوڊ:'
      : 'PM Petrol Relief SMS format for 9771:'
  );

  return (
    <section aria-label="SMS Preview" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-4">
      {/* Header of SMS Preview Card */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-pakgreen-100 text-pakgreen-800 rounded-xl">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 font-lang">
              {t.previewTitle}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium font-lang">
              <span>{t.previewRecipient}</span>
              <span className="font-mono font-bold text-pakgreen-800 bg-pakgreen-50 px-2 py-0.5 rounded-md border border-pakgreen-200">
                {recipient}
              </span>
              <span className="text-emerald-700 font-bold text-[11px]">
                ({lang === 'ur' ? 'مفت' : lang === 'sd' ? 'مفت' : 'Free'})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Authentic Mobile SMS Screen Simulator */}
      <div className="bg-slate-100 rounded-2xl p-3 sm:p-4 border border-slate-200 shadow-inner">
        <div className="max-w-md mx-auto space-y-2">
          {/* Mobile Chat Header Bar (Looks like real Messages App) */}
          <div className="bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-pakgreen-700 text-white font-bold flex items-center justify-center text-xs">
                97
              </div>
              <div>
                <span className="font-bold text-slate-900 block leading-tight">9771</span>
                <span className="text-[10px] text-slate-400">PM Petrol Relief</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
              <Phone className="w-3.5 h-3.5" />
              <span>SIM 1</span>
            </div>
          </div>

          {/* Time Separator */}
          <div className="text-center py-1">
            <span className="text-[11px] text-slate-400 bg-slate-200/80 px-2.5 py-0.5 rounded-full font-sans">
              Today • 9771 SMS
            </span>
          </div>

          {/* Realistic Green Outgoing SMS Chat Balloon */}
          <div className="ltr:ml-auto rtl:mr-auto max-w-[95%] bg-pakgreen-700 text-white rounded-2xl rounded-tr-xs rtl:rounded-tr-2xl rtl:rounded-tl-xs p-3.5 shadow-sm space-y-2">
            <div className="font-mono text-base sm:text-lg font-bold tracking-wide break-all select-all leading-relaxed ltr:text-left rtl:text-right" dir="ltr">
              {smsBody || (
                <span className="text-emerald-100 font-sans text-sm italic font-normal">
                  {lang === 'ur'
                    ? 'فارم پُر کرنے کے بعد میسج یہاں تیار ہوگا...'
                    : lang === 'sd'
                    ? 'فارم ڀرڻ کان پوءِ ميسيج هتي تيار ٿيندو...'
                    : 'Fill details to generate exact SMS...'}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-white/20 text-[11px] text-emerald-100">
              <span className="flex items-center gap-1">
                {isValid && smsBody.length > 0 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>{lang === 'ur' ? 'بھیجنے کے لیے تیار' : lang === 'sd' ? 'موڪلڻ لاءِ تيار' : 'Ready to Send'}</span>
                  </>
                ) : (
                  <span className="text-amber-200">
                    {lang === 'ur' ? 'مطلوبہ خانے پُر کریں' : lang === 'sd' ? 'ضروري خانا ڀريو' : 'Fill required fields'}
                  </span>
                )}
              </span>
              <span>
                {smsBody.length} {t.previewCharCount}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Strict Syntax Explanation Box */}
      <div className="flex items-start gap-2 text-xs text-slate-600 font-lang bg-slate-50 p-3 rounded-xl border border-slate-200">
        <Info className="w-4 h-4 text-pakgreen-800 shrink-0 mt-0.5" />
        <span className="leading-relaxed">{t.smsFormatExplanation}</span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2.5 pt-1">
        {/* Primary Action: Send SMS via native app */}
        <a
          href={smsUri}
          className="w-full tap-target bg-pakgreen-700 hover:bg-pakgreen-800 active:bg-pakgreen-900 text-white font-bold text-base sm:text-lg rounded-xl px-5 py-3.5 flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99] transition-all font-lang"
          aria-label={t.btnSendSms}
        >
          <Send className="w-5 h-5 text-amber-300" />
          <div className="flex flex-col items-center">
            <span>{t.btnSendSms}</span>
            <span className="text-[11px] font-normal text-emerald-100 font-sans">
              ({t.btnSendSmsSub})
            </span>
          </div>
        </a>

        {/* Secondary Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Copy Button */}
          <button
            type="button"
            onClick={onCopy}
            className={`tap-target flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border font-lang active:scale-95 ${
              isCopied
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
            }`}
          >
            {isCopied ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>{lang === 'ur' ? 'کاپی ہو گیا!' : lang === 'sd' ? 'ڪاپي ٿي ويو!' : 'Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-600" />
                <span>{t.btnCopyMessage}</span>
              </>
            )}
          </button>

          {/* WhatsApp Share Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] border border-[#25D366]/30 transition-all font-lang active:scale-95"
          >
            <Share2 className="w-4 h-4 text-[#25D366]" />
            <span>{t.btnShareWhatsapp}</span>
          </a>

          {/* QR Code Button */}
          <button
            type="button"
            onClick={() => setShowQrModal(true)}
            className="tap-target flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-all font-lang active:scale-95"
          >
            <QrCode className="w-4 h-4 text-slate-700" />
            <span>{t.btnShowQr}</span>
          </button>
        </div>
      </div>

      {/* QR Code Modal for Scanning */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-xl border border-slate-200 relative text-center space-y-4">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 ltr:right-4 rtl:left-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h4 className="text-lg font-bold text-slate-900 font-lang">
                {t.qrTitle}
              </h4>
              <p className="text-xs text-slate-500 font-lang mt-1">
                {t.qrSubtitle}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 inline-block shadow-inner">
              <QRCodeSVG
                value={smsUri}
                size={200}
                level="M"
                includeMargin={true}
              />
            </div>

            <div className="text-xs text-slate-700 font-mono bg-slate-100 p-2.5 rounded-lg break-all">
              {smsBody}
            </div>

            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 bg-pakgreen-800 hover:bg-pakgreen-900 text-white rounded-xl font-bold text-sm font-lang transition-colors"
            >
              {t.qrClose}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
