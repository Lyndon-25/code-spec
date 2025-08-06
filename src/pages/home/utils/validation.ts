// 页面专用验证工具 - 展示函数命名规范
import { USER_VALIDATION_CONFIG, USER_ERROR_MESSAGES } from "../constants/user";
import type { UserProfile } from "../types/user";

// 验证结果类型
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

// 布尔值返回的验证函数 - 使用 is 前缀
export const isValidEmail = (email: string): boolean => {
  return USER_VALIDATION_CONFIG.emailPattern.test(email);
};

export const isValidUsername = (username: string): boolean => {
  const { usernameMinLength, usernameMaxLength } = USER_VALIDATION_CONFIG;
  return username.length >= usernameMinLength && username.length <= usernameMaxLength;
};

export const hasValidPassword = (password: string): boolean => {
  return password.length >= USER_VALIDATION_CONFIG.passwordMinLength;
};

// 验证函数 - 使用动词开头
export const validateUserProfile = (profile: Partial<UserProfile>): ValidationResult => {
  const errors: Record<string, string> = {};

  if (!profile.displayName?.trim()) {
    errors.displayName = USER_ERROR_MESSAGES.requiredField;
  }

  if (!profile.email) {
    errors.email = USER_ERROR_MESSAGES.requiredField;
  } else if (!isValidEmail(profile.email)) {
    errors.email = USER_ERROR_MESSAGES.invalidEmail;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
