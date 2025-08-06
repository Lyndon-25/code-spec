// 全局基础按钮组件 - 展示组件命名和导出规范
import { ReactNode } from "react";

import styles from "./index.module.scss";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
