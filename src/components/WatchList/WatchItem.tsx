import Image from "next/image";
import styles from "./WatchList.module.scss";
import { formatNumber } from "@/utils";
import { IWatchItem } from "@/_types_";

export default function WatchItem({
  logo,
  shortName,
  name,
  totalShares,
  totalReturn,
}: IWatchItem) {
  return (
    <div className={styles["wrapper-item"]}>
      <Image src={logo} alt={name} width={28} height={28} />
      <div className={styles.brand}>
        <h3 className={styles["short-name"]}>{shortName}</h3>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.data}>
        <span className={styles.price}>{totalShares}</span>
        <span
          className={`${styles.rate} ${
            totalReturn >= 0 ? styles.up : styles.down
          }`}
        >
          {formatNumber(totalReturn)}
        </span>
      </div>
    </div>
  );
}
