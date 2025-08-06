// 酒店设施相关类型定义 - 展示 TypeScript 编码规范

// 基础设施类型
export interface HotelFacility {
  id: string;
  name: string;
  description: string;
  category: FacilityCategory;
  isAvailable: boolean;
  hasAdditionalFee: boolean;
  priceInfo?: PriceInfo;
  images: string[];
  features: string[];
  location: FacilityLocation;
  operatingHours: OperatingHours;
  capacity?: number;
}

// 设施分类枚举
export const FacilityCategory = {
  Recreation: "recreation",
  Business: "business",
  Dining: "dining",
  Wellness: "wellness",
  Transport: "transport",
  Service: "service",
} as const;

export type FacilityCategory = (typeof FacilityCategory)[keyof typeof FacilityCategory];

// 价格信息类型
export interface PriceInfo {
  amount: number;
  currency: string;
  unit: "perHour" | "perDay" | "perPerson" | "oneTime";
  description?: string;
}

// 设施位置
export type FacilityLocation =
  | { type: "indoor"; floor: number; room?: string }
  | { type: "outdoor"; area: string; coordinates?: { lat: number; lng: number } }
  | { type: "rooftop"; description: string };

// 营业时间
export interface OperatingHours {
  isOpen24Hours: boolean;
  schedule?: WeeklySchedule;
  specialHours?: SpecialHours[];
}

export interface WeeklySchedule {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  isOpen: boolean;
  openTime?: string; // "08:00"
  closeTime?: string; // "22:00"
  breakTime?: {
    start: string;
    end: string;
  };
}

export interface SpecialHours {
  date: string; // "2024-01-01"
  description: string;
  isOpen: boolean;
  openTime?: string;
  closeTime?: string;
}

// 筛选条件类型
export interface FacilityFilter {
  categories: FacilityCategory[];
  isAvailableOnly: boolean;
  hasFreeAccess: boolean;
  location?: "indoor" | "outdoor" | "rooftop";
}

// API 响应类型
export type FacilityListResponse =
  | { status: "success"; data: HotelFacility[]; total: number }
  | { status: "error"; code: number; message: string }
  | { status: "loading" };
