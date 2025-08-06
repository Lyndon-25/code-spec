// 酒店设施相关常量 - 展示常量命名规范

import { FacilityCategory } from "../types/entities";

// 显示配置常量
export const FACILITY_DISPLAY_CONFIG = {
  itemsPerPage: 12,
  imageMaxSize: 2 * 1024 * 1024, // 2MB
  maxImagesPerFacility: 5,
  defaultViewMode: "grid" as const,
};

// 设施分类配置
export const FACILITY_CATEGORY_CONFIG = {
  [FacilityCategory.Recreation]: {
    displayName: "娱乐设施",
    icon: "🎮",
    color: "#28a745",
    description: "游泳池、健身房、游戏室等",
  },
  [FacilityCategory.Business]: {
    displayName: "商务设施",
    icon: "💼",
    color: "#007bff",
    description: "会议室、商务中心、打印服务等",
  },
  [FacilityCategory.Dining]: {
    displayName: "餐饮设施",
    icon: "🍽️",
    color: "#fd7e14",
    description: "餐厅、酒吧、咖啡厅等",
  },
  [FacilityCategory.Wellness]: {
    displayName: "康养设施",
    icon: "🧘",
    color: "#20c997",
    description: "SPA、按摩、桑拿等",
  },
  [FacilityCategory.Transport]: {
    displayName: "交通服务",
    icon: "🚗",
    color: "#6f42c1",
    description: "接送服务、租车、停车场等",
  },
  [FacilityCategory.Service]: {
    displayName: "客房服务",
    icon: "🛎️",
    color: "#dc3545",
    description: "洗衣、行李寄存、礼宾服务等",
  },
} as const;

// 营业时间常量
export const DEFAULT_OPERATING_HOURS = {
  isOpen24Hours: false,
  schedule: {
    monday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    tuesday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    wednesday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    thursday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    friday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    saturday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
    sunday: { isOpen: true, openTime: "08:00", closeTime: "22:00" },
  },
};

// 价格单位显示文本
export const PRICE_UNIT_LABELS = {
  perHour: "每小时",
  perDay: "每天",
  perPerson: "每人",
  oneTime: "一次性",
};

// 位置类型显示文本
export const LOCATION_TYPE_LABELS = {
  indoor: "室内",
  outdoor: "室外",
  rooftop: "屋顶",
};

// 验证规则常量
export const FACILITY_VALIDATION_RULES = {
  nameMinLength: 2,
  nameMaxLength: 50,
  descriptionMaxLength: 500,
  maxFeatures: 10,
  featureMaxLength: 30,
};
