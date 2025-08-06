// 主题相关常量定义 - 展示模拟枚举命名规范

// 模拟枚举：常量名和键名都用 PascalCase + as const
export const ThemeMode = {
  Light: "light",
  Dark: "dark",
  Auto: "auto",
} as const;

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];
