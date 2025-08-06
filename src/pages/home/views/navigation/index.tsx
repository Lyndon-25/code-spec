import { Page } from "../../models/page";

import styles from "./index.module.scss";

const Navigation = () => {
  const {
    state: { currentView },
    switchView,
  } = Page.useContainer();

  return (
    <div className={styles.navigation}>
      <button
        className={`${styles.navButton} ${currentView === "profile" ? styles.active : ""}`}
        onClick={() => switchView("profile")}
      >
        个人资料
      </button>
      <button
        className={`${styles.navButton} ${currentView === "settings" ? styles.active : ""}`}
        onClick={() => switchView("settings")}
      >
        设置
      </button>
    </div>
  );
};

export default Navigation;
