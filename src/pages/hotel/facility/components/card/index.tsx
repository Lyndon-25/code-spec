import { Page } from "../../models/page";

import styles from "./index.module.scss";

interface FacilityCardProps {
  facilityId: string;
}

const FacilityCard = ({ facilityId }: FacilityCardProps) => {
  const {
    state: { filteredFacilities },
  } = Page.useContainer();

  const facility = filteredFacilities.find((f) => f.id === facilityId);

  if (!facility) return null;

  return (
    <div className={styles.facilityCard}>
      <div className={styles.cardImage}>
        <img src={facility.images[0]} alt={facility.name} />
        <div className={styles.categoryBadge}>{facility.category}</div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{facility.name}</h3>
        <p className={styles.cardDescription}>{facility.description}</p>

        <div className={styles.cardFeatures}>
          {facility.features.slice(0, 3).map((feature, index) => (
            <span key={index} className={styles.feature}>
              {feature}
            </span>
          ))}
          {facility.features.length > 3 && (
            <span className={styles.moreFeatures}>+{facility.features.length - 3} 更多</span>
          )}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.status}>
            <span className={`${styles.statusBadge} ${facility.isAvailable ? styles.available : styles.unavailable}`}>
              {facility.isAvailable ? "可用" : "维护中"}
            </span>
            {!facility.hasAdditionalFee && <span className={styles.freeBadge}>免费</span>}
          </div>

          {facility.priceInfo && (
            <div className={styles.price}>
              ¥{facility.priceInfo.amount} {facility.priceInfo.unit === "perPerson" ? "/人" : ""}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
