// 日期处理工具函数集合 - 展示工具函数命名规范

// 格式化函数 - 使用动词开头
export const formatDate = (date: Date, locale = "zh-CN"): string => {
  return date.toLocaleDateString(locale);
};

export const formatDateTime = (date: Date, locale = "zh-CN"): string => {
  return date.toLocaleString(locale);
};

export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) return "刚刚";
  if (diffInMinutes < 60) return `${diffInMinutes}分钟前`;
  if (diffInHours < 24) return `${diffInHours}小时前`;
  if (diffInDays < 7) return `${diffInDays}天前`;

  return formatDate(date);
};

// 验证函数 - 使用 is 前缀
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const isWeekend = (date: Date): boolean => {
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 = Sunday, 6 = Saturday
};

export const isFutureDate = (date: Date): boolean => {
  return date.getTime() > new Date().getTime();
};

// 计算函数 - 使用动词开头
export const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const calculateDaysBetween = (startDate: Date, endDate: Date): number => {
  const diffInMs = endDate.getTime() - startDate.getTime();
  return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
};

// 创建函数 - 使用动词开头
export const createDateRange = (startDate: Date, endDate: Date): Date[] => {
  const dates: Date[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};
