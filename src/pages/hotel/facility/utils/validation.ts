// 酒店设施验证和判断工具函数

import type { HotelFacility, OperatingHours, WeeklySchedule } from "../types/entities";

// 验证函数 - 使用 is/has 前缀
export const isOpenNow = (hours: OperatingHours): boolean => {
  if (hours.isOpen24Hours) return true;

  if (!hours.schedule) return false;

  const now = new Date();
  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"] as const;
  const today = dayNames[now.getDay()] as keyof WeeklySchedule;
  const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

  const todaySchedule = hours.schedule[today];

  if (!todaySchedule.isOpen) return false;

  return currentTime >= (todaySchedule.openTime || "00:00") && currentTime <= (todaySchedule.closeTime || "23:59");
};

export const hasFreeAccess = (facility: HotelFacility): boolean => {
  return !facility.hasAdditionalFee;
};

export const isPopularFacility = (facility: HotelFacility): boolean => {
  // 基于设施特征判断是否为热门设施
  const popularKeywords = ["游泳池", "健身房", "SPA", "餐厅", "酒吧"];
  return popularKeywords.some((keyword) => facility.name.includes(keyword));
};
