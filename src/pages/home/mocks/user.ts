// 用户模拟数据 - 用于开发和测试

import type { UserProfile, UserStatus } from "../types/user";

import { simulateApiCall } from "@/utils/mocks";

// Mock 数据定义
export const MOCK_USER_PROFILE: UserProfile = {
  id: "user123",
  displayName: "张三",
  email: "zhangsan@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=zhangsan",
  isActive: true,
  createdAt: new Date("2023-01-15"),
};

export const MOCK_USER_STATUS: UserStatus = {
  status: "active",
  lastLoginAt: new Date(),
};

// 多个测试用户数据
export const MOCK_USERS: UserProfile[] = [
  MOCK_USER_PROFILE,
  {
    id: "user456",
    displayName: "李四",
    email: "lisi@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisi",
    isActive: false,
    createdAt: new Date("2023-02-20"),
  },
  {
    id: "user789",
    displayName: "王五",
    email: "wangwu@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wangwu",
    isActive: true,
    createdAt: new Date("2023-03-10"),
  },
];

// 模拟获取用户数据的 API
export const mockGetUserData = async (userId: string) => {
  const user = MOCK_USERS.find((u) => u.id === userId) || {
    ...MOCK_USER_PROFILE,
    id: userId,
  };

  return simulateApiCall({
    user,
    status: MOCK_USER_STATUS,
  });
};
