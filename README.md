# Fuel Relief SMS Generator

An independent, modern, responsive, and highly accessible web application designed to help Pakistani citizens generate and send the exact SMS syntax required for the **9771 PM Fuel Subsidy Scheme** without syntax errors.

---

## 🌟 Key Features

1. **Default English & Fixed Language Switcher**:
   - Opens by default in **English (LTR)**.
   - Pinned at the **Top-Right Corner** with fixed positioning and high `z-index`, ensuring it never jumps or shifts when toggling between English (LTR), اردو (RTL), and سنڌي (RTL).

2. **Initial Disclaimer Popup (English by Default)**:
   - On page load, displays an accessible disclaimer modal:
     > **Important Notice / Disclaimer**: "This website is NOT an official government portal. It is an independent, free public utility created purely to help citizens format their registration and token SMS correctly. We do not store, save, or share any personal data."
   - Includes a clean **"I Understand"** button.

3. **Modern & Professional Hero Section**:
   - Headline: *"Check Eligibility & Generate 9771 SMS Instantly"*.
   - Highlights: **"100% Free SMS"**, **"Rs. 100/Litre Relief"**, **"2006+ Registered Vehicles"**.
   - Clean summary card with quota breakdown (Bikes 20L / Cars 30L) and 7-day token validity.

4. **Strict Registration SMS Syntax (No '#' Hashes)**:
   - Space-separated format:
     `REG [CNIC] [VEHICLE_NO] [PROVINCE_CODE] [DDMMYYYY]`
   - Continuous 8-digit date format (`DDMMYYYY`).
   - Generic placeholders: Vehicle `ABC-1234`, CNIC `4210112345671`.
   - Real-time pre-2006 vehicle registration year validation warning.

5. **Get Fuel Token Tab & Realistic 9771 Reply Card**:
   - Instant 1-click `TOK` command generation to 9771.
   - Realistic mock SMS reply card displaying the official format:
     ```text
     آپ کا ٹوکن: 34701XXXXX ہے
     آپ کی سواری کا نمبر: ABC-1234 ہے
     فیول: 5.00 لیٹر
     آپ کا ٹوکن 7 دن (17:19 24-Sep) تک قابل استعمال ہے
     ```

6. **Footer Credits & Social Links**:
   - Designed & Developed by **Sooraj Hamirani**.
   - Clickable **LinkedIn** and **GitHub** links opening in new tabs.

---

## 🛠️ Tech Stack

- **React 18** (Vite + TypeScript)
- **Tailwind CSS** (Pakistani Emerald Green theme)
- **Lucide React** (Icons)
- **Framer Motion** (Smooth transitions & animations)
- **canvas-confetti** (User feedback effects)
- **qrcode.react** (Mobile SMS scanning)

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🔒 Privacy Guarantee
This application operates **100% client-side**. No personal data or CNIC numbers are stored or transmitted.
