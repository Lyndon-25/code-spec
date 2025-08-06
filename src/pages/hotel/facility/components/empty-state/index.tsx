import { Page } from "../../models/page";

import styles from "./index.module.scss";

const EmptyState = () => {
  const { clearAllFilters } = Page.useContainer();

  return (
    <div className={styles.emptyState}>
      <h3>未找到匹配的设施</h3>
      <p>请尝试调整搜索条件或筛选选项</p>
      <button className={styles.resetButton} onClick={clearAllFilters}>
        重置筛选条件
      </button>
    </div>
  );
};

export default EmptyState;
