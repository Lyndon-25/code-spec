// 酒店设施页面主逻辑容器 - 展示领域分组架构
import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";

import { generateMockFacilities } from "../mocks/facilities";
import type { HotelFacility, FacilityFilter } from "../types/entities";
import { filterFacilities, searchFacilities } from "../utils/filters";
import { sortFacilitiesByName } from "../utils/sorting";

import { simulateApiCall } from "@/utils/mocks";

const usePageContainer = () => {
  // 状态管理
  const [facilities, setFacilities] = useState<HotelFacility[]>([]);
  const [filteredFacilities, setFilteredFacilities] = useState<HotelFacility[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState<FacilityFilter>({
    categories: [],
    isAvailableOnly: false,
    hasFreeAccess: false,
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 业务逻辑：获取设施数据
  const fetchFacilities = async (_hotelId: string) => {
    setIsLoading(true);
    try {
      // 模拟 API 调用 - 在生产环境中替换为真实 API
      const facilitiesData = await simulateApiCall(generateMockFacilities());

      setFacilities(facilitiesData);
      applyFiltersAndSearch(facilitiesData, currentFilter, searchQuery);
    } catch (error) {
      console.error("Failed to fetch facilities:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 业务逻辑：应用筛选和搜索
  const applyFiltersAndSearch = (facilitiesList: HotelFacility[], filter: FacilityFilter, query: string) => {
    let result = facilitiesList;

    // 应用筛选条件
    if (filter.categories.length > 0 || filter.isAvailableOnly || filter.hasFreeAccess || filter.location) {
      result = filterFacilities(result, filter);
    }

    // 应用搜索
    if (query.trim()) {
      result = searchFacilities(result, query);
    }

    // 排序
    result = sortFacilitiesByName(result);

    setFilteredFacilities(result);
  };

  // 业务逻辑：更新筛选条件
  const updateFilter = (newFilter: Partial<FacilityFilter>) => {
    const updatedFilter = { ...currentFilter, ...newFilter };
    setCurrentFilter(updatedFilter);
    applyFiltersAndSearch(facilities, updatedFilter, searchQuery);
  };

  // 业务逻辑：更新搜索条件
  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
    applyFiltersAndSearch(facilities, currentFilter, query);
  };

  // 业务逻辑：切换视图模式
  const toggleViewMode = () => {
    setViewMode(viewMode === "grid" ? "list" : "grid");
  };

  // 业务逻辑：清空所有筛选
  const clearAllFilters = () => {
    const emptyFilter: FacilityFilter = {
      categories: [],
      isAvailableOnly: false,
      hasFreeAccess: false,
    };
    setCurrentFilter(emptyFilter);
    setSearchQuery("");
    applyFiltersAndSearch(facilities, emptyFilter, "");
  };

  // 初始化时获取数据
  useEffect(() => {
    fetchFacilities("hotel-123");
  }, []);

  // 导出结构规范：state 对象在前，方法按长度排序（长度相同按字母排序）
  return {
    state: {
      viewMode,
      isLoading,
      facilities,
      searchQuery,
      currentFilter,
      filteredFacilities,
    },
    updateFilter,
    toggleViewMode,
    clearAllFilters,
    fetchFacilities,
    updateSearchQuery,
  };
};

export const Page = createContainer(usePageContainer);
