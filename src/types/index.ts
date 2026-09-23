export type Language = 'ur' | 'sd' | 'en';

export type ProvinceCode = 'S' | 'P' | 'K' | 'B' | 'A' | 'G' | 'I';

export interface ProvinceOption {
  code: ProvinceCode;
  name: {
    en: string;
    ur: string;
    sd: string;
  };
  fullName: {
    en: string;
    ur: string;
    sd: string;
  };
}

export type VehicleCategory = 'bike' | 'car';

export interface RegistrationFormData {
  cnic: string;
  vehicleNumber: string;
  registrationDate: string;
  provinceCode: ProvinceCode;
  vehicleCategory: VehicleCategory;
}

export interface TokenFormData {
  cnic: string;
}

export type ActiveTab = 'register' | 'token' | 'guide';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  text: string;
}
