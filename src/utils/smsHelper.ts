import { RegistrationFormData } from '../types';

/**
 * Automatically masks CNIC into 00000-0000000-0 format
 */
export function formatCnicInput(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 13);
  
  if (digits.length <= 5) {
    return digits;
  } else if (digits.length <= 12) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  } else {
    return `${digits.slice(0, 5)}-${digits.slice(5, 12)}-${digits.slice(12, 13)}`;
  }
}

/**
 * Returns raw 13 digits of CNIC
 */
export function getRawCnic(value: string): string {
  return value.replace(/\D/g, '');
}

/**
 * Validates whether CNIC has exactly 13 digits
 */
export function isValidCnic(value: string): boolean {
  const digits = getRawCnic(value);
  return digits.length === 13;
}

/**
 * Uppercases and cleans vehicle registration string
 */
export function formatVehicleNumber(value: string): string {
  return value.toUpperCase().replace(/\s+/g, '-').replace(/-+/g, '-');
}

/**
 * Formats date into 8 continuous digits (DDMMYYYY)
 * Example: 2014-05-20 -> 20052014
 */
export function formatContinuousDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3 && parts[0].length === 4) {
    const year = parts[0];
    const month = parts[1].padStart(2, '0');
    const day = parts[2].padStart(2, '0');
    return `${day}${month}${year}`;
  }
  const digits = dateStr.replace(/\D/g, '');
  if (digits.length === 8) {
    return digits;
  }
  return dateStr;
}

/**
 * Formats a Date object or YYYY-MM-DD input into standard DD-MM-YYYY format for visual reading
 */
export function formatDisplayDate(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3 && parts[0].length === 4) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return dateStr;
}

/**
 * Extracts year of registration to validate eligibility (2006 onward)
 */
export function getRegistrationYear(dateStr: string): number | null {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length === 3 && parts[0].length === 4) {
    return parseInt(parts[0], 10);
  }
  const digits = dateStr.replace(/\D/g, '');
  if (digits.length === 8) {
    return parseInt(digits.slice(4), 10);
  }
  return null;
}

/**
 * Eligibility rule: Vehicle must be registered in 2006 or later
 */
export function isEligibleYear(dateStr: string): boolean {
  const year = getRegistrationYear(dateStr);
  if (year === null) return true;
  return year >= 2006;
}

/**
 * Generates the official SMS string for 9771 Registration
 * STRICT Pattern: REG [CNIC] [VEHICLE_NO] [PROVINCE_CODE] [DDMMYYYY]
 * Example: REG 4210112345671 ABC-1234 S 20052014
 * NO hashes, NO special characters, strictly space-separated.
 */
export function generateRegistrationSms(data: RegistrationFormData): string {
  const cnic = getRawCnic(data.cnic);
  const vehicle = data.vehicleNumber.trim().toUpperCase();
  const prov = data.provinceCode;
  const date = formatContinuousDate(data.registrationDate);

  if (!cnic && !vehicle && !date) return '';

  return `REG ${cnic} ${vehicle} ${prov} ${date}`.trim();
}

/**
 * Generates the Token SMS string for 9771
 * Simple one-click "TOK" command
 */
export function generateTokenSms(_cnic?: string): string {
  return 'TOK';
}

/**
 * Cross-platform SMS URI scheme generator
 * iOS uses &body= while Android and RFC 5724 use ?body=
 */
export function getSmsUri(recipient: string, messageBody: string): string {
  const encodedBody = encodeURIComponent(messageBody);
  const isIOS = typeof navigator !== 'undefined' && 
    (/iPad|iPhone|iPod/.test(navigator.userAgent) || 
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  if (isIOS) {
    return `sms:${recipient}&body=${encodedBody}`;
  }
  return `sms:${recipient}?body=${encodedBody}`;
}

/**
 * WhatsApp share URL generator
 */
export function getWhatsAppShareUrl(message: string, headline?: string): string {
  const fullText = headline ? `${headline}\n\n${message}` : message;
  return `https://wa.me/?text=${encodeURIComponent(fullText)}`;
}
