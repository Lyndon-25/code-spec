// 酒店设施主视图 - 按照容器-组件模式组装其他视图
import { Page } from "../../models/page";
import Filters from "../filters";
import Header from "../header";
import FacilityList from "../list";
import Search from "../search";

import styles from "./index.module.scss";

const Main = () => {
  const {
    state: { isLoading },
  } = Page.useContainer();

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <span>加载设施信息...</span>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.controls}>
        <Search />
        <Filters />
      </div>

      <FacilityList />
    </div>
  );
};

export default Main;
