import { Page } from "../../models/page";

import styles from "./index.module.scss";

const Search = () => {
  const {
    state: { searchQuery },
    updateSearchQuery,
  } = Page.useContainer();

  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="搜索设施..."
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default Search;
