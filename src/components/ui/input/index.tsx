// 全局输入框组件
import styles from "./index.module.scss";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "password" | "number";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  hasError?: boolean;
  label?: string;
  errorMessage?: string;
}

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
  size = "medium",
  disabled = false,
  hasError = false,
  label,
  errorMessage,
}: InputProps) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={`${styles.input} ${styles[size]} ${hasError ? styles.error : ""}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
