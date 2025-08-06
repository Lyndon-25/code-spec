// 用户相关常量定义 - 展示常量命名规范

// 基本类型常量：使用 UPPER_SNAKE_CASE
export const MAX_USERNAME_LENGTH = 50;
export const MIN_PASSWORD_LENGTH = 8;
export const DEFAULT_AVATAR_SIZE = 64;
export const SESSION_TIMEOUT_MS = 30 * 60 * 1000; // 30分钟

// 配置对象常量：常量名 UPPER_SNAKE_CASE，属性 camelCase
export const USER_VALIDATION_CONFIG = {
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  usernameMinLength: 3,
  usernameMaxLength: 50,
  passwordMinLength: 8,
  avatarMaxSize: 5 * 1024 * 1024, // 5MB
};

// 模拟枚举：常量名和键名都用 PascalCase + as const
export const UserRole = {
  Admin: "ADMIN",
  Editor: "EDITOR",
  Viewer: "VIEWER",
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

// 错误消息常量
export const USER_ERROR_MESSAGES = {
  requiredField: "此字段为必填项",
  invalidEmail: "邮箱格式不正确",
  passwordTooShort: "密码长度至少8位",
  usernameExists: "用户名已存在",
};
