// 用户资料视图 - 展示视图组装模式
import EditButton from "../../components/edit-button";
import UserAvatar from "../../components/user/avatar";
import UserStatus from "../../components/user/status";
import { Page } from "../../models/page";
import { formatUserDisplayName } from "../../utils/format";

import styles from "./index.module.scss";

const Profile = () => {
  const {
    state: { user, isLoading },
  } = Page.useContainer();

  if (isLoading && !user) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <span>加载用户信息...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.error}>
        <span>无法加载用户信息</span>
      </div>
    );
  }

  return (
    <div className={styles.profile}>
      <div className={styles.header}>
        <UserAvatar size="large" />
        <div className={styles.info}>
          <h2 className={styles.name}>{formatUserDisplayName(user)}</h2>
          <p className={styles.email}>{user.email}</p>
          <UserStatus />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.field}>
          <label>用户ID</label>
          <span>{user.id}</span>
        </div>

        <div className={styles.field}>
          <label>注册时间</label>
          <span>{user.createdAt.toLocaleDateString("zh-CN")}</span>
        </div>

        <div className={styles.field}>
          <label>状态</label>
          <span className={user.isActive ? styles.active : styles.inactive}>{user.isActive ? "活跃" : "非活跃"}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <EditButton variant="primary" />
        <EditButton variant="secondary" disabled />
      </div>
    </div>
  );
};

export default Profile;
