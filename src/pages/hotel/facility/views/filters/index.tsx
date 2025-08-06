import { Page } from "../../models/page";

import styles from "./index.module.scss";

const Filters = () => {
  const {
    state: { currentFilter, viewMode },
    updateFilter,
    toggleViewMode,
    clearAllFilters,
  } = Page.useContainer();

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterSection}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={currentFilter.isAvailableOnly}
            onChange={(e) => updateFilter({ isAvailableOnly: e.target.checked })}
          />
          仅显示可用设施
        </label>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={currentFilter.hasFreeAccess}
            onChange={(e) => updateFilter({ hasFreeAccess: e.target.checked })}
          />
          免费使用
        </label>
      </div>

      <div className={styles.viewControls}>
        <button className={styles.viewToggle} onClick={toggleViewMode}>
          {viewMode === "grid" ? "列表视图" : "网格视图"}
        </button>

        <button className={styles.clearButton} onClick={clearAllFilters}>
          清空筛选
        </button>
      </div>
    </div>
  );
};

export default Filters;
