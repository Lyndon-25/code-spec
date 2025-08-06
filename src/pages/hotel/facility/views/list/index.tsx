import FacilityCard from "../../components/card";
import EmptyState from "../../components/empty-state";
import { Page } from "../../models/page";

import styles from "./index.module.scss";

const FacilityList = () => {
  const {
    state: { filteredFacilities, viewMode },
  } = Page.useContainer();

  return (
    <div className={styles.results}>
      <div className={styles.resultHeader}>
        <span className={styles.count}>找到 {filteredFacilities.length} 个设施</span>
      </div>

      {filteredFacilities.length > 0 ? (
        <div className={`${styles.facilityList} ${styles[viewMode]}`}>
          {filteredFacilities.map((facility) => (
            <FacilityCard key={facility.id} facilityId={facility.id} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default FacilityList;
