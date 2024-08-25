import Image from "next/image";

import styles from "./Stats.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "@/utils";
import { IStatsCard } from "@/_types_";
import ChartBasic from "../ChartBasic";

export default function StatsCard({
  logo,
  name,
  totalShares,
  totalReturn,
  theme,
}: IStatsCard) {
  return (
    <div
      className={`${styles["stats-card"]} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <div className={styles["stats-header"]}>
        <Image
          src={logo}
          alt={name}
          className={styles.logo}
          width={28}
          height={28}
        />
        <h3 className={styles.name}>{name}</h3>
        <div className={styles["chart"]}>
          <ChartBasic />
        </div>
      </div>
      <div className={styles["stats-body"]}>
        <div className={styles["item-content"]}>
          <span className={styles.title}> Total Shares:</span>
          <span className={styles.data}>{totalShares}</span>
        </div>
        <div className={styles["item-content"]}>
          <span className={styles.title}> Total Return: </span>
          <span
            className={`${styles.data} ${
              totalReturn >= 0 ? styles.up : styles.down
            }`}
          >
            {formatNumber(totalReturn)}
            {totalReturn >= 0 ? (
              <FontAwesomeIcon
                className={`${styles["icon-up-down"]} l-icon`}
                icon={faArrowUp}
              />
            ) : (
              <FontAwesomeIcon
                className={`${styles["icon-up-down"]} l-icon`}
                icon={faArrowDown}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
