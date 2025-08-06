import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>酒店设施</h1>
      <p className={styles.subtitle}>探索我们的丰富设施，享受完美住宿体验</p>
    </div>
  );
};

export default Header;
