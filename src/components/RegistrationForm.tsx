import React from 'react';
import {
  CreditCard,
  Car,
  Calendar,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RotateCcw,
  Bike
} from 'lucide-react';
import { RegistrationFormData, Language, ProvinceCode } from '../types';
import { translations, PROVINCES } from '../translations/translations';
import {
  formatCnicInput,
  isValidCnic,
  isEligibleYear,
  getRegistrationYear,
} from '../utils/smsHelper';

interface RegistrationFormProps {
  formData: RegistrationFormData;
  onChange: (newData: Partial<RegistrationFormData>) => void;
  lang: Language;
  onFillDemo: () => void;
  onReset: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  onChange,
  lang,
  onFillDemo,
  onReset,
}) => {
  const t = translations[lang];

  const isCnicValid = isValidCnic(formData.cnic);
  const isVehicleValid = formData.vehicleNumber.trim().length >= 3;
  const isDateValid = formData.registrationDate.trim().length > 0;
  const regYear = getRegistrationYear(formData.registrationDate);
  const isYearEligible = isEligibleYear(formData.registrationDate);
  const isProvinceValid = Boolean(formData.provinceCode);

  const handleCnicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCnicInput(e.target.value);
    onChange({ cnic: formatted });
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.toUpperCase();
    onChange({ vehicleNumber: cleaned });
  };

  const handleVehicleChipClick = (prefix: string) => {
    if (!formData.vehicleNumber) {
      onChange({ vehicleNumber: prefix });
    } else {
      onChange({ vehicleNumber: `${prefix}${formData.vehicleNumber.replace(/^[A-Z]+-?/, '')}` });
    }
  };

  return (
    <article aria-labelledby="registration-heading" className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 space-y-6">
      {/* Header & Quick Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-lang tracking-tight">
            {t.regHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-lang mt-0.5">
            {t.regSubheading}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onFillDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-bold transition-all active:scale-95 font-lang"
            title="Auto-fill sample test data"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>{t.fillDemoBtn}</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl text-xs font-semibold transition-all active:scale-95 font-lang"
            title="Reset form"
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span>{t.clearBtn}</span>
          </button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Field 1: CNIC Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="cnic-input" className="block text-sm sm:text-base font-bold text-slate-800 font-lang">
              {t.cnicLabel} <span className="text-red-500">*</span>
            </label>
            {formData.cnic.length > 0 && (
              <span className={`text-xs font-bold flex items-center gap-1 font-lang ${isCnicValid ? 'text-emerald-700' : 'text-amber-700'}`}>
                {isCnicValid ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'ur' ? 'شناختی کارڈ مکمل' : lang === 'sd' ? 'سڃاڻپ ڪارڊ پورو' : 'Valid 13 Digits'}</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>{13 - formData.cnic.replace(/\D/g, '').length} {lang === 'ur' ? 'ہندسے باقی' : lang === 'sd' ? 'انگ باقي' : 'digits left'}</span>
                  </>
                )}
              </span>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3.5 rtl:pr-3.5 pointer-events-none text-slate-400">
              <CreditCard className="w-5 h-5 text-pakgreen-800" />
            </div>
            <input
              id="cnic-input"
              type="text"
              inputMode="numeric"
              pattern="[0-9\-]*"
              autoComplete="off"
              value={formData.cnic}
              onChange={handleCnicChange}
              placeholder={t.cnicPlaceholder}
              maxLength={15}
              className={`w-full ltr:pl-11 rtl:pr-11 ltr:pr-4 rtl:pl-4 py-3 bg-slate-50 border rounded-xl text-base sm:text-lg font-mono font-bold tracking-wider text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                formData.cnic.length > 0 && !isCnicValid
                  ? 'border-amber-400 focus:ring-amber-300'
                  : isCnicValid
                  ? 'border-emerald-500 focus:ring-emerald-300 bg-emerald-50/20'
                  : 'border-slate-300 focus:ring-pakgreen-300 focus:border-pakgreen-700'
              }`}
            />
          </div>
          <p className="text-xs text-slate-500 font-lang mt-1">
            {t.cnicHint}
          </p>
        </div>

        {/* Field 2: Vehicle Registration Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="vehicle-input" className="block text-sm sm:text-base font-bold text-slate-800 font-lang">
              {t.vehicleLabel} <span className="text-red-500">*</span>
            </label>
            {isVehicleValid && (
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 font-lang">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>OK</span>
              </span>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3.5 rtl:pr-3.5 pointer-events-none text-slate-400">
              <Car className="w-5 h-5 text-pakgreen-800" />
            </div>
            <input
              id="vehicle-input"
              type="text"
              autoCapitalize="characters"
              autoComplete="off"
              value={formData.vehicleNumber}
              onChange={handleVehicleChange}
              placeholder={t.vehiclePlaceholder}
              className={`w-full ltr:pl-11 rtl:pr-11 ltr:pr-4 rtl:pl-4 py-3 bg-slate-50 border rounded-xl text-base sm:text-lg font-mono font-bold tracking-wide uppercase text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                isVehicleValid
                  ? 'border-emerald-500 focus:ring-emerald-300 bg-emerald-50/20'
                  : 'border-slate-300 focus:ring-pakgreen-300 focus:border-pakgreen-700'
              }`}
            />
          </div>

          {/* Quick city prefix chips to ease typing */}
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-500 font-lang">
              {lang === 'ur' ? 'شہر منتخب کریں:' : lang === 'sd' ? 'شهر چونڊيو:' : 'Quick Prefix:'}
            </span>
            {['ABC-', 'KHI-', 'LEZ-', 'ICT-', 'RI-', 'PES-', 'QTA-'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleVehicleChipClick(code)}
                className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 hover:bg-pakgreen-100 hover:text-pakgreen-900 text-slate-700 rounded-lg border border-slate-200 transition-colors"
              >
                {code}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 font-lang mt-1">
            {t.vehicleHint}
          </p>
        </div>

        {/* 2-Column Row: Registration Date & Province */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Field 3: Vehicle Registration Date with 2006 Year Validation */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="reg-date-input" className="block text-sm sm:text-base font-bold text-slate-800 font-lang">
                {t.regDateLabel} <span className="text-red-500">*</span>
              </label>
              {isDateValid && isYearEligible && (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 font-lang">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'ur' ? `اہل (${regYear})` : lang === 'sd' ? `اهل (${regYear})` : `Eligible (${regYear})`}</span>
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3.5 rtl:pr-3.5 pointer-events-none text-slate-400">
                <Calendar className="w-5 h-5 text-pakgreen-800" />
              </div>
              <input
                id="reg-date-input"
                type="date"
                min="2006-01-01"
                value={formData.registrationDate}
                onChange={(e) => onChange({ registrationDate: e.target.value })}
                className={`w-full ltr:pl-11 rtl:pr-11 ltr:pr-4 rtl:pl-4 py-3 bg-slate-50 border rounded-xl text-sm sm:text-base font-semibold text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                  isDateValid && !isYearEligible
                    ? 'border-amber-500 focus:ring-amber-200 bg-amber-50/30'
                    : isDateValid && isYearEligible
                    ? 'border-emerald-500 focus:ring-emerald-200'
                    : 'border-slate-300 focus:ring-pakgreen-200 focus:border-pakgreen-700'
                }`}
              />
            </div>

            {/* Validation Warning for Pre-2006 vehicles */}
            {isDateValid && !isYearEligible && (
              <div className="mt-2 p-3 bg-amber-50 border border-amber-300 rounded-xl flex items-start gap-2.5 text-xs text-amber-900 font-lang font-semibold">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-950">{t.yearWarning}</p>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    {lang === 'ur'
                      ? `منتخب شدہ سال ${regYear} ہے۔ کم از کم سال 2006 یا اس کے بعد کا ہونا ضروری ہے۔`
                      : lang === 'sd'
                      ? `چونڊيل سال ${regYear} آهي. گهٽ ۾ گهٽ سال 2006 يا ان کان پوءِ هجڻ گهرجي.`
                      : `Selected year is ${regYear}. Vehicle registration must be 2006 or newer.`}
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-slate-500 font-lang mt-1">
              {t.regDateHint}
            </p>
          </div>

          {/* Field 4: Province Code Selection */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="province-select" className="block text-sm sm:text-base font-bold text-slate-800 font-lang">
                {t.provinceLabel} <span className="text-red-500">*</span>
              </label>
              {isProvinceValid && (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 font-lang">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Code: {formData.provinceCode}</span>
                </span>
              )}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3.5 rtl:pr-3.5 pointer-events-none text-slate-400">
                <MapPin className="w-5 h-5 text-pakgreen-800" />
              </div>
              <select
                id="province-select"
                value={formData.provinceCode}
                onChange={(e) => onChange({ provinceCode: e.target.value as ProvinceCode })}
                className="w-full ltr:pl-11 rtl:pr-11 ltr:pr-4 rtl:pl-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm sm:text-base font-semibold text-slate-900 transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-pakgreen-200 focus:border-pakgreen-700 font-lang"
              >
                {PROVINCES.map((prov) => (
                  <option key={prov.code} value={prov.code}>
                    {prov.name[lang]} - {prov.fullName[lang]} ({prov.code})
                  </option>
                ))}
              </select>
            </div>
            <p className="text-xs text-slate-500 font-lang mt-1">
              {t.provinceHint}
            </p>
          </div>
        </div>

        {/* Field 5: Vehicle Type Radio / Cards */}
        <div>
          <label className="block text-sm sm:text-base font-bold text-slate-800 font-lang mb-2">
            {t.vehicleCategoryLabel} <span className="text-red-500">*</span>
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Option 1: Bike / Rickshaw */}
            <div
              onClick={() => onChange({ vehicleCategory: 'bike' })}
              className={`cursor-pointer rounded-xl p-3.5 border-2 transition-all flex items-start gap-3 ${
                formData.vehicleCategory === 'bike'
                  ? 'border-pakgreen-700 bg-pakgreen-50/60 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${
                formData.vehicleCategory === 'bike'
                  ? 'bg-pakgreen-700 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                <Bike className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base font-lang">
                    {t.vehicleBikeTitle}
                  </h4>
                  <input
                    type="radio"
                    name="vehicleCategory"
                    checked={formData.vehicleCategory === 'bike'}
                    onChange={() => onChange({ vehicleCategory: 'bike' })}
                    className="w-4 h-4 text-pakgreen-700 focus:ring-pakgreen-600"
                  />
                </div>
                <p className="text-xs font-semibold text-pakgreen-900 mt-0.5 font-lang">
                  {t.vehicleBikeDesc}
                </p>
              </div>
            </div>

            {/* Option 2: Car up to 800cc */}
            <div
              onClick={() => onChange({ vehicleCategory: 'car' })}
              className={`cursor-pointer rounded-xl p-3.5 border-2 transition-all flex items-start gap-3 ${
                formData.vehicleCategory === 'car'
                  ? 'border-pakgreen-700 bg-pakgreen-50/60 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${
                formData.vehicleCategory === 'car'
                  ? 'bg-pakgreen-700 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                <Car className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base font-lang">
                    {t.vehicleCarTitle}
                  </h4>
                  <input
                    type="radio"
                    name="vehicleCategory"
                    checked={formData.vehicleCategory === 'car'}
                    onChange={() => onChange({ vehicleCategory: 'car' })}
                    className="w-4 h-4 text-pakgreen-700 focus:ring-pakgreen-600"
                  />
                </div>
                <p className="text-xs font-semibold text-pakgreen-900 mt-0.5 font-lang">
                  {t.vehicleCarDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
