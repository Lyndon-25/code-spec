// 酒店设施排序和分组工具函数

import type { HotelFacility } from "../types/entities";

// 排序函数 - 使用动词开头
export const sortFacilitiesByName = (facilities: HotelFacility[]): HotelFacility[] => {
  return [...facilities].sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
};

export const sortFacilitiesByCategory = (facilities: HotelFacility[]): HotelFacility[] => {
  return [...facilities].sort((a, b) => a.category.localeCompare(b.category));
};

// 分组函数 - 使用动词开头
export const groupFacilitiesByCategory = (facilities: HotelFacility[]): Record<string, HotelFacility[]> => {
  return facilities.reduce(
    (groups, facility) => {
      const category = facility.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(facility);
      return groups;
    },
    {} as Record<string, HotelFacility[]>,
  );
};
