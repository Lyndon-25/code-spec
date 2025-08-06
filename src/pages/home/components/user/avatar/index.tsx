// 用户头像组件 - 展示 components 直接消费 models 数据
import { Page } from "../../../models/page";

import styles from "./index.module.scss";

interface UserAvatarProps {
  size?: "small" | "medium" | "large";
}

const UserAvatar = ({ size = "medium" }: UserAvatarProps) => {
  // 直接从容器消费数据，避免 props 传递
  const {
    state: { user },
  } = Page.useContainer();

  if (!user) {
    return <div className={`${styles.avatar} ${styles[size]} ${styles.placeholder}`}>?</div>;
  }

  return (
    <img
      className={`${styles.avatar} ${styles[size]}`}
      src={user.avatar}
      alt={user.displayName}
      title={user.displayName}
    />
  );
};

export default UserAvatar;
