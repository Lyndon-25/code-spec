// 用户状态组件 - 展示联合类型的使用
import { Page } from "../../../models/page";
import { formatLastLoginTime } from "../../../utils/format";

import styles from "./index.module.scss";

const UserStatus = () => {
  const {
    state: { userStatus, isLoading },
  } = Page.useContainer();

  if (isLoading || !userStatus) {
    return <div className={styles.loading}>加载中...</div>;
  }

  // 使用可辨识联合类型进行类型安全的条件渲染
  switch (userStatus.status) {
    case "active":
      return (
        <div className={`${styles.status} ${styles.active}`}>
          <span className={styles.indicator} />
          活跃用户 · {formatLastLoginTime(userStatus.lastLoginAt)}
        </div>
      );

    case "inactive":
      return (
        <div className={`${styles.status} ${styles.inactive}`}>
          <span className={styles.indicator} />
          暂停使用 · {userStatus.reason}
        </div>
      );

    case "pending":
      return (
        <div className={`${styles.status} ${styles.pending}`}>
          <span className={styles.indicator} />
          待验证 · 验证码: {userStatus.verificationCode}
        </div>
      );

    default: {
      // 穷尽性检查
      const _exhaustiveCheck: never = userStatus;
      throw new Error(`Unhandled user status: ${_exhaustiveCheck}`);
    }
  }
};

export default UserStatus;
