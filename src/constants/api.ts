// API 相关常量 - 展示常量命名规范

// 基本类型常量：使用 UPPER_SNAKE_CASE
export const API_TIMEOUT_MS = 10000;
export const MAX_RETRY_ATTEMPTS = 3;
export const DEFAULT_PAGE_SIZE = 20;

// API 配置对象常量：常量名 UPPER_SNAKE_CASE，属性 camelCase
export const API_CONFIG = {
  baseUrl: "https://api.example.com",
  timeout: API_TIMEOUT_MS,
  retryAttempts: MAX_RETRY_ATTEMPTS,
  defaultHeaders: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// API 端点常量
export const API_ENDPOINTS = {
  // 用户相关
  userProfile: "/api/v1/users/profile",
  userSettings: "/api/v1/users/settings",
  userAvatar: "/api/v1/users/avatar",

  // 认证相关
  login: "/api/v1/auth/login",
  logout: "/api/v1/auth/logout",
  refreshToken: "/api/v1/auth/refresh",

  // 酒店相关
  hotelList: "/api/v1/hotels",
  hotelDetail: "/api/v1/hotels/:id",
  hotelFacilities: "/api/v1/hotels/:id/facilities",
  hotelBooking: "/api/v1/hotels/:id/booking",
};

// HTTP 状态码枚举 (模拟枚举模式)
export const HttpStatus = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500,
} as const;

export type HttpStatus = (typeof HttpStatus)[keyof typeof HttpStatus];
