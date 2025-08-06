// 页面主逻辑容器 - 展示容器-组件模式
import { useState, useEffect } from "react";
import { createContainer } from "unstated-next";

import { mockGetUserData } from "../mocks/user";
import type { UserProfile, UserStatus } from "../types/user";
import { validateUserProfile } from "../utils/validation";

const usePageContainer = () => {
  // 状态管理
  const [user, setUser] = useState<UserProfile | null>(null);
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState<"profile" | "settings">("profile");

  // 业务逻辑：获取用户数据
  const fetchUserData = async (userId: string) => {
    setIsLoading(true);
    try {
      // 使用 mock API 获取用户数据
      const { user: mockUser, status: mockStatus } = await mockGetUserData(userId);

      setUser(mockUser);
      setUserStatus(mockStatus);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 业务逻辑：更新用户资料
  const updateUserProfile = async (updates: Partial<UserProfile>) => {
    if (!user) return;

    const validation = validateUserProfile({ ...user, ...updates });
    if (!validation.isValid) {
      console.error("Validation failed:", validation.errors);
      return false;
    }

    setIsLoading(true);
    try {
      // 模拟 API 调用
      await new Promise((resolve) => setTimeout(resolve, 800));
      setUser({ ...user, ...updates });
      return true;
    } catch (error) {
      console.error("Failed to update user:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // 业务逻辑：编辑用户资料
  const editProfile = async () => {
    if (!user) return false;

    const updates = {
      displayName: "张三（已编辑）",
    };

    const success = await updateUserProfile(updates);

    if (success) {
      console.log("用户资料编辑成功");
    }

    return success;
  };

  // 切换视图
  const switchView = (view: "profile" | "settings") => {
    setCurrentView(view);
  };

  // 初始化时获取用户数据
  useEffect(() => {
    fetchUserData("user123");
  }, []);

  // 导出结构规范：state 对象在前，方法按长度排序（长度相同按字母排序）
  return {
    state: {
      user,
      isLoading,
      userStatus,
      currentView,
    },
    switchView,
    editProfile,
    fetchUserData,
    updateUserProfile,
  };
};

export const Page = createContainer(usePageContainer);
