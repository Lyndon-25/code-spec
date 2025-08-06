// Mock 相关的通用工具函数

/**
 * 模拟 API 调用延迟
 * @param data 要返回的数据
 * @param delay 延迟时间（毫秒），默认 1000ms
 * @returns Promise，延迟后返回数据
 */
export const simulateApiCall = async <T>(data: T, delay = 1000): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return data;
};

/**
 * 模拟 API 错误
 * @param errorMessage 错误消息
 * @param delay 延迟时间（毫秒），默认 1000ms
 * @throws 延迟后抛出错误
 */
export const simulateApiError = async (errorMessage = "API Error", delay = 1000): Promise<never> => {
  await new Promise((resolve) => setTimeout(resolve, delay));
  throw new Error(errorMessage);
};

/**
 * 随机决定是否模拟失败
 * @param data 成功时返回的数据
 * @param failureRate 失败率（0-1），默认 0.1 (10%)
 * @param delay 延迟时间（毫秒），默认 1000ms
 * @returns Promise，可能成功也可能失败
 */
export const simulateRandomApiCall = async <T>(data: T, failureRate = 0.1, delay = 1000): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (Math.random() < failureRate) {
    throw new Error("Random API failure simulation");
  }

  return data;
};
