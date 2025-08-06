// 酒店设施筛选和搜索工具函数

import { FACILITY_CATEGORY_CONFIG } from "../constants/display";
import type { HotelFacility, FacilityFilter, FacilityCategory } from "../types/entities";

// 筛选函数 - 使用动词开头
export const filterFacilities = (facilities: HotelFacility[], filter: FacilityFilter): HotelFacility[] => {
  return facilities.filter((facility) => {
    // 分类筛选
    if (filter.categories.length > 0 && !filter.categories.includes(facility.category)) {
      return false;
    }

    // 可用性筛选
    if (filter.isAvailableOnly && !facility.isAvailable) {
      return false;
    }

    // 免费访问筛选
    if (filter.hasFreeAccess && facility.hasAdditionalFee) {
      return false;
    }

    // 位置筛选
    if (filter.location && facility.location.type !== filter.location) {
      return false;
    }

    return true;
  });
};

// 搜索函数 - 使用动词开头
export const searchFacilities = (facilities: HotelFacility[], query: string): HotelFacility[] => {
  if (!query.trim()) return facilities;

  const lowerQuery = query.toLowerCase();

  return facilities.filter((facility) => {
    return (
      facility.name.toLowerCase().includes(lowerQuery) ||
      facility.description.toLowerCase().includes(lowerQuery) ||
      facility.features.some((feature) => feature.toLowerCase().includes(lowerQuery)) ||
      (FACILITY_CATEGORY_CONFIG as Record<FacilityCategory, any>)[facility.category]?.displayName
        .toLowerCase()
        .includes(lowerQuery)
    );
  });
};
