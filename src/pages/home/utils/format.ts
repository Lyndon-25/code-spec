// 页面专用格式化工具 - 展示函数命名规范
import type { UserProfile } from "../types/user";

// 格式化函数 - 使用动词开头
export const formatUserDisplayName = (profile: UserProfile): string => {
  const trimmedName = profile.displayName?.trim();
  return trimmedName || profile.email.split("@")[0] || profile.email;
};

export const formatLastLoginTime = (lastLoginAt: Date): string => {
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - lastLoginAt.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) return "刚刚";
  if (diffInHours < 24) return `${diffInHours}小时前`;

  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays}天前`;
};
