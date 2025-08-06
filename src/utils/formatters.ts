// 格式化工具函数集合 - 展示函数命名规范

// 货币格式化
export const formatCurrency = (amount: number, currency = "CNY", locale = "zh-CN"): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
};

// 数字格式化
export const formatNumber = (value: number, locale = "zh-CN"): string => {
  return new Intl.NumberFormat(locale).format(value);
};

export const formatPercentage = (value: number, locale = "zh-CN"): string => {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
};

// 文件大小格式化
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 B";

  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

// 文本格式化
export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);

  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return phone;
};

export const formatCardNumber = (cardNumber: string): string => {
  const cleaned = cardNumber.replace(/\s/g, "");
  const match = cleaned.match(/.{1,4}/g);

  return match ? match.join(" ") : cardNumber;
};

// 文本处理
export const truncateText = (text: string, maxLength: number, suffix = "..."): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
};

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
