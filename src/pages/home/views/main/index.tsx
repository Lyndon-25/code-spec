// 主视图 - 按照容器-组件模式组装其他视图
import SettingsPlaceholder from "../../components/settings-placeholder";
import { Page } from "../../models/page";
import Navigation from "../navigation";
import Profile from "../profile";

import styles from "./index.module.scss";

const Main = () => {
  const {
    state: { currentView },
  } = Page.useContainer();

  return (
    <div className={styles.main}>
      <Navigation />

      <div className={styles.content}>
        {currentView === "profile" && <Profile />}
        {currentView === "settings" && <SettingsPlaceholder />}
      </div>
    </div>
  );
};

export default Main;
