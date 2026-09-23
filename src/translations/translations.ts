import { ProvinceOption } from '../types';

export const PROVINCES: ProvinceOption[] = [
  {
    code: 'S',
    name: { en: 'Sindh (S)', ur: 'سندھ (S)', sd: 'سنڌ (S)' },
    fullName: { en: 'Sindh Province', ur: 'صوبہ سندھ', sd: 'سنڌ صوبو' }
  },
  {
    code: 'P',
    name: { en: 'Punjab (P)', ur: 'پنجاب (P)', sd: 'پنجاب (P)' },
    fullName: { en: 'Punjab Province', ur: 'صوبہ پنجاب', sd: 'پنجاب صوبو' }
  },
  {
    code: 'K',
    name: { en: 'Khyber Pakhtunkhwa (K)', ur: 'خیبر پختونخوا (K)', sd: 'خيبر پختونخواھ (K)' },
    fullName: { en: 'Khyber Pakhtunkhwa', ur: 'صوبہ خیبر پختونخوا', sd: 'صوبو خيبر پختونخواھ' }
  },
  {
    code: 'B',
    name: { en: 'Balochistan (B)', ur: 'بلوچستان (B)', sd: 'بلوچستان (B)' },
    fullName: { en: 'Balochistan Province', ur: 'صوبہ بلوچستان', sd: 'بلوچستان صوبو' }
  },
  {
    code: 'I',
    name: { en: 'Islamabad (I)', ur: 'اسلام آباد (I)', sd: 'اسلام آباد (I)' },
    fullName: { en: 'Islamabad Capital Territory', ur: 'اسلام آباد وفاقی دارالحکومت', sd: 'اسلام آباد وفاقي گاديءَ جو هنڌ' }
  },
  {
    code: 'A',
    name: { en: 'Azad Kashmir (A)', ur: 'آزاد کشمیر (A)', sd: 'آزاد ڪشمير (A)' },
    fullName: { en: 'Azad Jammu & Kashmir', ur: 'آزاد جموں و کشمیر', sd: 'آزاد ڄمون ۽ ڪشمير' }
  },
  {
    code: 'G',
    name: { en: 'Gilgit-Baltistan (G)', ur: 'گلگت بلتستان (G)', sd: 'گلگت بلتستان (G)' },
    fullName: { en: 'Gilgit-Baltistan', ur: 'گلگت بلتستان', sd: 'گلگت بلتستان' }
  },
];

export const translations = {
  en: {
    appTitle: 'Fuel Relief SMS Generator',
    appSubtitle: 'Official SMS Syntax Helper for 9771 Fuel Subsidy Scheme',
    govTitle: 'PM Fuel Relief Initiative (9771)',
    shortCodeNotice: 'Send to 9771 (Free of Cost)',
    freeSmsBadge: '100% Free SMS',
    freeSmsSub: 'Works with 0 balance',
    reliefRateBadge: 'Rs. 100/Litre Relief',
    eligibleYearBadge: '2006+ Registered Vehicles',
    quotaBadgeBike: '20 Liters / Month',
    quotaBadgeCar: '30 Liters / Month',
    listenVoice: 'Audio Guide',
    stopVoice: 'Stop Audio',

    // Hero Section
    heroHeading: 'Check Eligibility & Generate 9771 SMS Instantly',
    heroSubheading: 'Easily format and send error-free registration & token messages for Pakistan’s 9771 Fuel Subsidy Scheme. Designed for motorcyclists, rickshaw drivers, and daily wage earners.',
    
    // Initial Disclaimer
    disclaimerHeading: 'Important Notice / Disclaimer',
    disclaimerBody: 'This website is NOT an official government portal. It is an independent, free public utility created purely to help citizens format their registration and token SMS correctly. We do not store, save, or share any personal data.',
    disclaimerAction: 'I Understand',

    // Quota Policy & 7-Day Expiry
    quotaPolicyTitle: 'Quota & 7-Day Token Rule:',
    quotaPolicyNotice: 'Token generated via "TOK" expires in 7 days (1 week). You can claim your monthly quota in convenient weekly installments (e.g., 5 Liters per week / Rs. 500 equivalent) for easy fuel refilling.',
    
    // Tabs
    tabRegister: '1. New Registration',
    tabToken: '2. Get Fuel Token (TOK)',
    tabGuide: '3. Scheme Guide & FAQs',

    // Registration Form
    regHeading: 'Register Your Vehicle for Subsidy',
    regSubheading: 'Enter your CNIC and vehicle details to generate the exact SMS for 9771.',
    cnicLabel: 'CNIC Number (13 Digits)',
    cnicPlaceholder: '4210112345671',
    cnicHint: 'Enter 13 digits without spaces. Hyphens format automatically.',
    cnicInvalid: 'Please enter a valid 13-digit Pakistani CNIC.',
    
    vehicleLabel: 'Vehicle Registration Number',
    vehiclePlaceholder: 'e.g. ABC-1234 or KHI-5678',
    vehicleHint: 'As mentioned on vehicle registration smart card / book.',
    vehicleInvalid: 'Please enter a valid vehicle registration number.',
    vehicleExamples: 'Examples: ABC-1234, KHI-5678, LEZ-22-1234',
    
    regDateLabel: 'Vehicle Registration Date',
    regDateHint: 'Date on registration document. Must be year 2006 or later.',
    regDateInvalid: 'Please choose a valid registration date.',
    yearWarning: 'Sirf 2006 ya uske baad register hone wali gariyan ahal hain (Only vehicles registered in 2006 or later are eligible).',
    
    provinceLabel: 'Province of Registration',
    provinceHint: 'Select the province where the vehicle was registered.',
    selectProvince: 'Select Province...',

    vehicleCategoryLabel: 'Vehicle Type & Monthly Quota',
    vehicleBikeTitle: 'Motorcycle / Rickshaw',
    vehicleBikeDesc: 'Monthly Quota: 20 Litres (Save Rs. 2,000 / month)',
    vehicleCarTitle: 'Car up to 800cc',
    vehicleCarDesc: 'Monthly Quota: 30 Litres (Save Rs. 3,000 / month)',

    fillDemoBtn: 'Fill Demo Data',
    clearBtn: 'Reset',

    // Token Tab
    tokenHeading: 'Get Monthly Fuel Token Code (TOK)',
    tokenSubheading: 'Already registered? Generate the instant "TOK" SMS to 9771 to get your fuel OTP code.',
    tokenInstantPrompt: 'Click below to generate the standard TOK message:',
    tokenSendDirect: 'SMS Command: TOK',
    tokenMockHeading: 'What 9771 Reply Looks Like',
    tokenMockLines: [
      'آپ کا ٹوکن: 34701XXXXX ہے',
      'آپ کی سواری کا نمبر: ABC-1234 ہے',
      'فیول: 5.00 لیٹر',
      'آپ کا ٹوکن 7 دن (17:19 24-Sep) تک قابل استعمال ہے'
    ],
    tokenMockLinesTranslated: [
      'Your Token: 34701XXXXX',
      'Vehicle Number: ABC-1234',
      'Fuel: 5.00 Litres',
      'Token is valid for 7 days (until 17:19 24-Sep)'
    ],

    // SMS Preview Card
    previewTitle: 'Official SMS Preview (Ready to Send)',
    previewRecipient: 'Send to:',
    previewRecipientVal: '9771 (Free Helpline)',
    previewMessageLabel: 'Generated SMS Body:',
    previewCharCount: 'characters',
    smsFormatExplanation: 'Pattern: REG [CNIC] [VEHICLE_NO] [PROVINCE_CODE] [DDMMYYYY] (e.g. REG 4210112345671 ABC-1234 S 20052014)',

    // Buttons
    btnSendSms: 'Send SMS via Phone',
    btnSendSmsSub: 'Opens native SMS app with 9771',
    btnCopyMessage: 'Copy SMS Text',
    btnShareWhatsapp: 'Share via WhatsApp',
    btnShowQr: 'Scan QR to Send',
    
    // QR Modal
    qrTitle: 'Scan to Send SMS from Any Mobile',
    qrSubtitle: 'Useful for pump attendants, counter staff, or friends assisting motorcycle riders.',
    qrClose: 'Close',

    // Toasts
    toastCopied: 'SMS text copied to clipboard successfully!',
    toastReadyToSend: 'Opening SMS app...',
    toastDemoLoaded: 'Sample demo data loaded (Year 2014 - Eligible)!',
    toastCleared: 'Form reset.',

    // How it works & FAQs
    step1Title: '1. Send SMS to 9771',
    step1Desc: 'Send registration syntax from the mobile SIM registered under your own CNIC.',
    step2Title: '2. Receive Token OTP',
    step2Desc: 'NADRA verifies your records and sends back a 6-digit OTP token valid for 7 days.',
    step3Title: '3. Visit Petrol Pump',
    step3Desc: 'Show the 6-digit code to the cashier / POS machine operator at the fuel station.',
    step4Title: '4. Enjoy Rs. 100/L Subsidy',
    step4Desc: 'Pay Rs. 100 less per liter. Refill weekly (5L/week) or up to your full monthly quota!',

    faqTitle: 'Frequently Asked Questions (عمومی سوالات)',
    faq1Q: 'Who is eligible for the PM Petrol Relief Scheme?',
    faq1A: 'Citizens owning a registered motorcycle, rickshaw, or car up to 800cc registered in year 2006 or later. The mobile SIM must be registered under the same CNIC.',
    faq2Q: 'Are there any SMS charges when sending to 9771?',
    faq2A: 'No! SMS to 9771 is 100% free across all telecom networks in Pakistan (Jazz, Zong, Telenor, Ufone) and works even with 0 balance.',
    faq3Q: 'How long is the TOK OTP valid and how does weekly quota work?',
    faq3A: 'Each token code received via TOK is valid for 7 days. You can consume your quota in convenient weekly installments (e.g., 5 Liters per week = Rs. 500 discount per visit).',
    faq4Q: 'What if my vehicle was registered before 2006?',
    faq4A: 'Under the official scheme policy, only vehicles registered in 2006 or onward in provincial excise records are eligible for subsidy.',

    footerDisclaim: 'Independent, free public utility SMS generator for the Government of Pakistan PM Petrol Relief Scheme (9771). No personal data is stored on our servers. Messages are sent directly from your phone.',
    copyright: 'Fuel Relief SMS Generator | Public Accessibility Tool',
  },
  ur: {
    appTitle: 'فیول ریلیف میسج جنریٹر',
    appSubtitle: '9771 پیٹرول سبسڈی اسکیم کے لیے درست ایس ایم ایس بنانے کا آسان طریقہ',
    govTitle: 'پی ایم فیول ریلیف اقدام (9771)',
    shortCodeNotice: '9771 پر ایس ایم ایس بھیجیں (بالکل مفت)',
    freeSmsBadge: '100% مفت ایس ایم ایس',
    freeSmsSub: '0 بیلنس پر بھی جائے گا',
    reliefRateBadge: '100 روپے فی لیٹر ریلیف',
    eligibleYearBadge: '2006 اور بعد کی گاڑیاں',
    quotaBadgeBike: '20 لیٹر ماہانہ کوٹہ',
    quotaBadgeCar: '30 لیٹر ماہانہ کوٹہ',
    listenVoice: 'آواز میں رہنمائی سنیں',
    stopVoice: 'آواز بند کریں',

    // Hero Section
    heroHeading: 'اہلیت چیک کریں اور فوری 9771 ایس ایم ایس بنائیں',
    heroSubheading: 'حکومتی پیٹرول ریلیف اسکیم کے لیے بغیر کسی غلطی کے فوری میسج تیار کریں۔ موٹر سائیکل، رکشہ سواروں اور عام شہریوں کے لیے نہایت آسان سہولت۔',

    // Initial Disclaimer
    disclaimerHeading: 'ضروری وضاحت اور نوٹس (Important Notice)',
    disclaimerBody: 'یہ ویب سائٹ کوئی سرکاری (گورنمنٹ) پورٹل نہیں ہے۔ یہ ایک آزاد، مفت عوامی سہولت ہے جو شہریوں کو رجسٹریشن اور ٹوکن ایس ایم ایس درست طریقے سے بنانے میں مدد فراہم کرتی ہے۔ ہم کوئی ذاتی ڈیٹا محفوظ نہیں کرتے۔',
    disclaimerAction: 'ٹھیک ہے، سمجھ آ گئی',
    
    // Quota Policy & 7-Day Expiry
    quotaPolicyTitle: 'کوٹہ اور 7 دن کی میعاد کا اصول:',
    quotaPolicyNotice: 'ٹوکن (TOK) کوڈ کی میعاد 7 دن (1 ہفتہ) ہے۔ آپ ماہانہ کوٹہ ہفتہ وار قسطوں میں بھی لے سکتے ہیں (مثلاً 5 لیٹر فی ہفتہ / 500 روپے ریلیف) تاکہ آسانی سے پیٹرول ڈلوایا جا سکے۔',

    // Tabs
    tabRegister: '1۔ نئی رجسٹریشن',
    tabToken: '2۔ فیول ٹوکن حاصل کریں (TOK)',
    tabGuide: '3۔ طریقہ کار اور سوالات',

    // Registration Form
    regHeading: 'سبسڈی کے لیے اپنی گاڑی رجسٹر کریں',
    regSubheading: 'شناختی کارڈ اور گاڑی کی معلومات درج کریں تاکہ 9771 کے لیے خودکار درست میسج تیار ہو۔',
    cnicLabel: 'قومی شناختی کارڈ نمبر (13 ہندسے)',
    cnicPlaceholder: '4210112345671',
    cnicHint: 'بغیر وقفہ 13 ہندسے لکھیں، ڈیش خود بخود لگ جائیں گے۔',
    cnicInvalid: 'براہ کرم درست 13 ہندسوں کا شناختی کارڈ نمبر درج کریں۔',
    
    vehicleLabel: 'گاڑی / بائیک کا رجسٹریشن نمبر',
    vehiclePlaceholder: 'مثال: ABC-1234 یا KHI-5678',
    vehicleHint: 'جو نمبر گاڑی کی ایکسائز رجسٹریشن بک یا سمارٹ کارڈ پر درج ہے۔',
    vehicleInvalid: 'براہ کرم گاڑی کا درست رجسٹریشن نمبر درج کریں۔',
    vehicleExamples: 'مثالیں: ABC-1234، KHI-5678، LEZ-22-1234',
    
    regDateLabel: 'گاڑی کی رجسٹریشن کی تاریخ',
    regDateHint: 'ایکسائز بک یا کارڈ پر درج تاریخ۔ گاڑی کا سال 2006 یا اس کے بعد کا ہونا لازمی ہے۔',
    regDateInvalid: 'براہ کرم رجسٹریشن کی درست تاریخ منتخب کریں۔',
    yearWarning: 'صرف 2006 یا اس کے بعد رجسٹر ہونے والی گاڑیاں اہل ہیں۔',
    
    provinceLabel: 'رجسٹریشن کا صوبہ',
    provinceHint: 'جس صوبے سے گاڑی رجسٹر ہوئی ہے وہ منتخب کریں۔',
    selectProvince: 'صوبہ منتخب کریں...',

    vehicleCategoryLabel: 'گاڑی کی قسم اور ماہانہ کوٹہ',
    vehicleBikeTitle: 'موٹر سائیکل / رکشہ',
    vehicleBikeDesc: 'ماہانہ کوٹہ: 20 لیٹر (ہر ماہ 2000 روپے کی بچت)',
    vehicleCarTitle: '800cc تک کی چھوٹی گاڑی',
    vehicleCarDesc: 'ماہانہ کوٹہ: 30 لیٹر (ہر ماہ 3000 روپے کی بچت)',

    fillDemoBtn: 'نمونہ ڈیٹا بھریں',
    clearBtn: 'صاف کریں',

    // Token Tab
    tokenHeading: 'ماہانہ پیٹرول سبسڈی ٹوکن کوڈ حاصل کریں (TOK)',
    tokenSubheading: 'اگر آپ پہلے سے رجسٹرڈ ہیں، تو 9771 پر TOK بھیج کر فوری ڈسکاؤنٹ او ٹی پی کوڈ حاصل کریں۔',
    tokenInstantPrompt: 'فوری 9771 میسج بنانے کے لیے نیچے دیے گئے بٹن پر کلک کریں:',
    tokenSendDirect: 'میسج کمانڈ: TOK',
    tokenMockHeading: '9771 سے موصول ہونے والا جوابی میسج کیسا ہوگا',
    tokenMockLines: [
      'آپ کا ٹوکن: 34701XXXXX ہے',
      'آپ کی سواری کا نمبر: ABC-1234 ہے',
      'فیول: 5.00 لیٹر',
      'آپ کا ٹوکن 7 دن (17:19 24-Sep) تک قابل استعمال ہے'
    ],
    tokenMockLinesTranslated: [
      'آپ کا ٹوکن: 34701XXXXX ہے',
      'آپ کی سواری کا نمبر: ABC-1234 ہے',
      'فیول: 5.00 لیٹر',
      'آپ کا ٹوکن 7 دن (17:19 24-Sep) تک قابل استعمال ہے'
    ],

    // SMS Preview Card
    previewTitle: 'تیار شدہ سرکاری ایس ایم ایس (میسج)',
    previewRecipient: 'کس نمبر پر بھیجنا ہے:',
    previewRecipientVal: '9771 (مفت ہیلپ لائن)',
    previewMessageLabel: 'تیار شدہ میسج:',
    previewCharCount: 'حروف',
    smsFormatExplanation: 'مستند فارمیٹ: REG [شناختی کارڈ] [گاڑی نمبر] [صوبہ کوڈ] [DDMMYYYY] (مثال: REG 4210112345671 ABC-1234 S 20052014)',

    // Buttons
    btnSendSms: 'موبائل سے ایس ایم ایس بھیجیں',
    btnSendSmsSub: 'فون کا میسج ایپ کھولے گا',
    btnCopyMessage: 'میسج کاپی کریں',
    btnShareWhatsapp: 'واٹس ایپ پر شیئر کریں',
    btnShowQr: 'کیو آر کوڈ اسکین کریں',
    
    // QR Modal
    qrTitle: 'دوسرے موبائل سے ایس ایم ایس بھیجنے کے لیے اسکین کریں',
    qrSubtitle: 'دکانداروں، پیٹرول پمپ عملے، یا بائیک سواروں کی مدد کے لیے مفید فیچر۔',
    qrClose: 'بند کریں',

    // Toasts
    toastCopied: 'میسج کامیابی سے کاپی ہو گیا ہے!',
    toastReadyToSend: 'ایس ایم ایس ایپ کھولی جا رہی ہے...',
    toastDemoLoaded: 'نمونہ ڈیٹا داخل کر دیا گیا (اہل گاڑی 2014)!',
    toastCleared: 'فارم صاف ہو گیا۔',

    // How it works & FAQs
    step1Title: '1۔ 9771 پر ایس ایم ایس بھیجیں',
    step1Desc: 'یہاں سے بنا کر اپنے شناختی کارڈ پر رجسٹرڈ سم سے میسج بھیجیں۔',
    step2Title: '2۔ 6 ہندسوں کا ٹوکن کوڈ پائیں',
    step2Desc: 'نادرا تصدیق کے بعد 7 دن کی میعاد کے ساتھ او ٹی پی کوڈ بھیجے گا۔',
    step3Title: '3۔ پیٹرول پمپ پر کوڈ دکھائیں',
    step3Desc: 'پیٹرول ڈلواتے وقت پی او ایس مشین والے کو یہ کوڈ بتائیں۔',
    step4Title: '4۔ 100 روپے فی لیٹر سستا پیٹرول لیں',
    step4Desc: 'ہفتہ وار 5 لیٹر یا ماہانہ 20 لیٹر تک ہر لیٹر پر 100 روپے بچائیں!',

    faqTitle: 'ضروری معلومات اور عام سوالات',
    faq1Q: 'پیٹرول ریلیف اسکیم کا کون اہل ہے؟',
    faq1A: 'وہ تمام شہری جن کے نام پر موٹر سائیکل، رکشہ یا 800cc تک گاڑی سال 2006 یا اس کے بعد رجسٹرڈ ہے، اور جن کی سم ان کے اپنے شناختی کارڈ پر ہے۔',
    faq2Q: 'کیا 9771 پر میسج بھیجنے کا کوئی خرچہ ہے؟',
    faq2A: 'جی نہیں! 9771 پر ایس ایم ایس تمام نیٹ ورکس پر بالکل مفت ہے اور صفر (0) بیلنس پر بھی کامیابی سے جاتا ہے۔',
    faq3Q: 'ٹوکن کوڈ کی میعاد کتنی ہوتی ہے اور ہفتہ وار قسط کا کیا طریقہ ہے؟',
    faq3A: 'TOK کوڈ کی میعاد 7 دن (1 ہفتہ) ہوتی ہے۔ آپ اپنا ماہانہ کوٹہ ہفتہ وار 5 لیٹر کی قسطوں میں بھی باآسانی لے سکتے ہیں۔',
    faq4Q: 'اگر گاڑی 2006 سے پہلے رجسٹرڈ ہو تو کیا ریلیف ملے گا؟',
    faq4A: 'سرکاری پالیسی کے مطابق صرف 2006 یا اس کے بعد ایکسائز میں رجسٹرڈ ہونے والی گاڑیاں ہی سبسڈی کی اہل ہیں۔',

    footerDisclaim: 'عوامی سہولت کے لیے بنایا گیا آزاد، غیر سرکاری پورٹل۔ کسی شہری کا ذاتی ڈیٹا ہمارے پاس محفوظ نہیں کیا جاتا۔ براہ راست آپ کے فون سے 9771 پر میسج جاتا ہے۔',
    copyright: 'فیول ریلیف میسج جنریٹر | عوامی خدمت کا منصوبہ',
  },
  sd: {
    appTitle: 'فيول رليف ميسيج جنريٽر',
    appSubtitle: '9771 پيٽرول سبسڊي اسڪيم لاءِ صحيح ايس ايم ايس ٺاهڻ جو آسان ذريعو',
    govTitle: 'پي ايم فيول رليف اسڪيم (9771)',
    shortCodeNotice: '9771 تي ايس ايم ايس موڪليو (مفت)',
    freeSmsBadge: '100% مفت ايس ايم ايس',
    freeSmsSub: '0 بيلنس تي به ويندو',
    reliefRateBadge: '100 رپيا في ليٽر رليف',
    eligibleYearBadge: '2006 يا پوءِ جون گاڏيون',
    quotaBadgeBike: '20 ليٽر مھينيو ڪوٽا',
    quotaBadgeCar: '30 ليٽر مھينيو ڪوٽا',
    listenVoice: 'آواز ۾ هدايتون ٻڌو',
    stopVoice: 'آواز بند ڪريو',

    // Hero Section
    heroHeading: 'اهليت چيڪ ڪريو ۽ فوري 9771 ايس ايم ايس ٺاهيو',
    heroSubheading: 'حڪومتي پيٽرول رليف اسڪيم لاءِ بغير ڪنهن غلطي جي ايس ايم ايس تيار ڪريو. موٽرسائيڪل، رڪشا سوارن ۽ عام ماڻهن لاءِ آسان ترين سهولت.',

    // Initial Disclaimer
    disclaimerHeading: 'ضروري وضاحت ۽ نوٽيس (Important Notice)',
    disclaimerBody: 'هي ويب سائيٽ ڪا به سرڪاري پورٽل ناهي. هي هڪ آزاد، مفت عوامي اوزار آهي جيڪو شهرين کي ايس ايم ايس درست طريقي سان ٺاهڻ ۾ مدد ڪري ٿو. اسان ڪنهن به شهري جو ذاتي ڊيٽا محفوظ نٿا ڪريون.',
    disclaimerAction: 'سمجهه ۾ اچي ويو',
    
    // Quota Policy & 7-Day Expiry
    quotaPolicyTitle: 'ڪوٽا ۽ 7 ڏينهن جي مدت جو اصول:',
    quotaPolicyNotice: 'ٽوڪن (TOK) ڪوڊ جي مدت 7 ڏينهن (1 هفتو) آهي. توهان مهيني جو ڪوٽا هفتيوار قسطن ۾ به کڻي سگهو ٿا (مثال: 5 ليٽر في هفتو / 500 رپيا رليف) ته جيئن آساني سان پيٽرول وجھائي سگهجي.',

    // Tabs
    tabRegister: '1. نئين رجسٽريشن',
    tabToken: '2. فيول ٽوڪن حاصل ڪريو (TOK)',
    tabGuide: '3. طريقيڪار ۽ سوال جواب',

    // Registration Form
    regHeading: 'سبسڊي لاءِ پنهنجي گاڏي رجسٽر ڪريو',
    regSubheading: 'پنهنجو قومي سڃاڻپ ڪارڊ ۽ گاڏي جا تفصيل لکو ته جيئن 9771 لاءِ درست ايس ايم ايس تيار ٿئي.',
    cnicLabel: 'قومي سڃاڻپ ڪارڊ نمبر (13 انگ)',
    cnicPlaceholder: '4210112345671',
    cnicHint: 'بغير اسپيس جي 13 انگ لکو، ڊيش پاڻمرادو لڳي ويندي.',
    cnicInvalid: 'مهرباني ڪري صحيح 13 انگن جو سڃاڻپ ڪارڊ نمبر لکو.',
    
    vehicleLabel: 'گاڏي / بائيڪ جو رجسٽريشن نمبر',
    vehiclePlaceholder: 'مثال: ABC-1234 يا KHI-5678',
    vehicleHint: 'جيڪو نمبر گاڏي جي رجسٽريشن ڪتاب يا سمارٽ ڪارڊ تي لکيل آهي.',
    vehicleInvalid: 'مهرباني ڪري گاڏي جو صحيح رجسٽريشن نمبر لکو.',
    vehicleExamples: 'مثالون: ABC-1234، KHI-5678، LEZ-22-1234',
    
    regDateLabel: 'گاڏي جي رجسٽريشن جي تاريخ',
    regDateHint: 'ايڪسائز ڪتاب تي لکيل تاريخ. گاڏي جو سال 2006 يا ان کان پوءِ هجڻ لازمي آهي.',
    regDateInvalid: 'مهرباني ڪري رجسٽريشن جي صحيح تاريخ چونڊيو.',
    yearWarning: 'صرف 2006 يا ان کان پوءِ رجسٽر ٿيل گاڏيون اهل آهن.',
    
    provinceLabel: 'رجسٽريشن جو صوبو',
    provinceHint: 'جنهن صوبي مان گاڏي رجسٽر ٿيل آهي اهو چونڊيو.',
    selectProvince: 'صوبو چونڊيو...',

    vehicleCategoryLabel: 'گاڏي جو قسم ۽ مهيني جو ڪوٽا',
    vehicleBikeTitle: 'موٽرسائيڪل / رڪشا',
    vehicleBikeDesc: 'مهيني جو ڪوٽا: 20 ليٽر (هر مهيني 2000 رپين جي بچت)',
    vehicleCarTitle: '800cc تائين ننڍي گاڏي',
    vehicleCarDesc: 'مهيني جو ڪوٽا: 30 ليٽر (هر مهيني 3000 رپين جي بچت)',

    fillDemoBtn: 'نمونو ڊيٽا ڀريو',
    clearBtn: 'صاف ڪريو',

    // Token Tab
    tokenHeading: 'مهيني جو فيول سبسڊي ٽوڪن ڪوڊ حاصل ڪريو (TOK)',
    tokenSubheading: 'جيڪڏهن توهان اڳ ۾ ئي رجسٽرڊ آهيو ته 9771 تي TOK موڪلي فوري او ٽي پي حاصل ڪريو.',
    tokenInstantPrompt: 'فوري 9771 ميسيج تيار ڪرڻ لاءِ هيٺين بٽڻ تي ڪلڪ ڪريو:',
    tokenSendDirect: 'ميسيج ڪمانڊ: TOK',
    tokenMockHeading: '9771 مان ايندڙ جوابي ميسيج ڪيئن نظر ايندو',
    tokenMockLines: [
      'آپ کا ٹوکن: 34701XXXXX ہے',
      'آپ کی سواری کا نمبر: ABC-1234 ہے',
      'فیول: 5.00 لیٹر',
      'آپ کا ٹوکن 7 دن (17:19 24-Sep) تک قابل استعمال ہے'
    ],
    tokenMockLinesTranslated: [
      'توهان جو ٽوڪن: 34701XXXXX آهي',
      'توهان جي سواري جو نمبر: ABC-1234 آهي',
      'فيول: 5.00 ليٽر',
      'توهان جو ٽوڪن 7 ڏينهن (17:19 24-Sep) تائين قابل استعمال آهي'
    ],

    // SMS Preview Card
    previewTitle: 'تيار ٿيل سرڪاري ايس ايم ايس',
    previewRecipient: 'ڪهڙي نمبر تي موڪلڻو آهي:',
    previewRecipientVal: '9771 (مفت هيلپ لائن)',
    previewMessageLabel: 'تيار ٿيل پيغام:',
    previewCharCount: 'اکر',
    smsFormatExplanation: 'مستند فارميٽ: REG [سڃاڻپ ڪارڊ] [گاڏي نمبر] [صوبو ڪوڊ] [DDMMYYYY] (مثال: REG 4210112345671 ABC-1234 S 20052014)',

    // Buttons
    btnSendSms: 'موبائل مان ايس ايم ايس موڪليو',
    btnSendSmsSub: 'فون جي ميسيج ايپ کولي ڇڏيندو',
    btnCopyMessage: 'ميسيج ڪاپي ڪريو',
    btnShareWhatsapp: 'واٽس ايپ تي شيئر ڪريو',
    btnShowQr: 'ڪيو آر ڪوڊ اسڪين ڪريو',
    
    // QR Modal
    qrTitle: 'ٻئي موبائل مان ايس ايم ايس موڪلڻ لاءِ اسڪين ڪريو',
    qrSubtitle: 'دڪاندارن، پمپ عملي، يا بائيڪ سوارن جي مدد لاءِ نهايت ڪارآمد فيچر.',
    qrClose: 'بند ڪريو',

    // Toasts
    toastCopied: 'پيغام ڪاميابيءَ سان ڪاپي ٿي ويو!',
    toastReadyToSend: 'ايس ايم ايس ايپ کولي پئي وڃي...',
    toastDemoLoaded: 'نمونو ڊيٽا داخل ڪيو ويو (سال 2014 اهل)!',
    toastCleared: 'فارم صاف ٿي ويو.',

    // How it works & FAQs
    step1Title: '1. 9771 تي ايس ايم ايس موڪليو',
    step1Desc: 'پنهنجي سڃاڻپ ڪارڊ تي رجسٽرڊ سم مان ميسيج موڪليو.',
    step2Title: '2. 6 انگن جو ٽوڪن ڪوڊ حاصل ڪريو',
    step2Desc: 'نادرا جي تصديق کان پوءِ 7 ڏينهن جي مدي سان او ٽي پي ڪوڊ ملندو.',
    step3Title: '3. پيٽرول پمپ تي ڪوڊ ڏيکاريو',
    step3Desc: 'پيٽرول وجھائڻ وقت پمپ جي ڪيشيئر کي اهو ڪوڊ ٻڌايو.',
    step4Title: '4. 100 رپيا في ليٽر سستو پيٽرول حاصل ڪريو',
    step4Desc: 'هفتيوار 5 ليٽر يا مهيني 20 ليٽر تائين هر ليٽر تي 100 رپيا رعايت وٺو!',

    faqTitle: 'ضروري معلومات ۽ عام سوال',
    faq1Q: 'پيٽرول رليف اسڪيم جو ڪير اهل آهي؟',
    faq1A: 'اهي سمورا شهري جن جي نالي تي موٽرسائيڪل، رڪشا يا 800cc گاڏي سال 2006 يا ان کان پوءِ رجسٽر ٿيل آهي، ۽ جن وٽ پنهنجي سم موجود آهي.',
    faq2Q: 'ڇا 9771 تي ميسيج موڪلڻ جو ڪو خرچ آهي؟',
    faq2A: 'نه! 9771 تي ايس ايم ايس بلڪل مفت آهي ۽ 0 بيلنس تي به ڪاميابي سان موڪلي سگهجي ٿو.',
    faq3Q: 'ٽوڪن ڪوڊ جي مدت ڪيتري هوندي آهي؟',
    faq3A: 'TOK ڪوڊ جي مدت 7 ڏينهن (1 هفتو) آهي. توهان پنهنجو مهيني جو ڪوٽا هفتيوار 5 ليٽر جي قسطن ۾ به کڻي سگهو ٿا.',
    faq4Q: 'جيڪڏهن گاڏي 2006 کان اڳ رجسٽر ٿيل هجي؟',
    faq4A: 'سرڪاري پاليسي موجب صرف 2006 يا ان کان پوءِ ايڪسائز ۾ رجسٽر ٿيل گاڏيون ئي سبسڊي لاءِ اهل آهن.',

    footerDisclaim: 'عوامي سهولت لاءِ ٺهيل آزاد پورٽل. اسان وٽ ڪنهن به شهري جو ڊيٽا محفوظ نٿو ٿئي. سڌو توهان جي موبائل مان 9771 تي ميسيج وڃي ٿو.',
    copyright: 'فيول رليف ميسيج جنريٽر | عوامي خدمت جو منصوبو',
  }
};
