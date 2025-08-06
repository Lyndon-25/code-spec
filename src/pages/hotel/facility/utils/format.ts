// 酒店设施格式化工具函数

import { PRICE_UNIT_LABELS } from "../constants/display";
import type { HotelFacility, OperatingHours, PriceInfo } from "../types/entities";

// 格式化函数 - 使用动词开头
export const formatFacilityPrice = (priceInfo: PriceInfo): string => {
  const { amount, currency, unit } = priceInfo;
  const unitLabel = PRICE_UNIT_LABELS[unit];

  if (currency === "CNY") {
    return `¥${amount} ${unitLabel}`;
  }

  return `${amount} ${currency} ${unitLabel}`;
};

export const formatOperatingHours = (hours: OperatingHours): string => {
  if (hours.isOpen24Hours) {
    return "24小时营业";
  }

  if (!hours.schedule) {
    return "营业时间待定";
  }

  // 简化显示：如果每天都一样，只显示一个时间段
  const scheduleEntries = Object.values(hours.schedule);
  const firstSchedule = scheduleEntries[0];

  const allSame = scheduleEntries.every(
    (schedule) =>
      schedule.isOpen === firstSchedule.isOpen &&
      schedule.openTime === firstSchedule.openTime &&
      schedule.closeTime === firstSchedule.closeTime,
  );

  if (allSame && firstSchedule.isOpen) {
    return `${firstSchedule.openTime} - ${firstSchedule.closeTime}`;
  }

  return "营业时间请咨询前台";
};

export const formatFacilityLocation = (facility: HotelFacility): string => {
  const { location } = facility;

  switch (location.type) {
    case "indoor":
      return `${location.floor}楼${location.room ? ` ${location.room}` : ""}`;
    case "outdoor":
      return `室外 ${location.area}`;
    case "rooftop":
      return `屋顶 ${location.description}`;
    default:
      return "位置待定";
  }
};
