// 编辑按钮组件 - 展示事件处理器命名规范
import { Page } from "../../models/page";

import styles from "./index.module.scss";

interface EditButtonProps {
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const EditButton = ({ variant = "primary", disabled = false }: EditButtonProps) => {
  const {
    state: { isLoading },
    editProfile,
  } = Page.useContainer();

  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={editProfile} disabled={disabled || isLoading}>
      {isLoading ? "更新中..." : "编辑资料"}
    </button>
  );
};

export default EditButton;
