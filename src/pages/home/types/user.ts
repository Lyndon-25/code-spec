// 用户相关类型定义
import type { ThemeMode } from "../constants/theme";

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  avatar: string;
  isActive: boolean;
  createdAt: Date;
}

export interface UserPreferences {
  language: string;
  timezone: string;
  notifications: boolean;
  theme: ThemeMode;
}

export type UserRole = "admin" | "editor" | "viewer";

// 可辨识联合类型示例
export type UserStatus =
  | { status: "active"; lastLoginAt: Date }
  | { status: "inactive"; suspendedAt: Date; reason: string }
  | { status: "pending"; verificationCode: string };
