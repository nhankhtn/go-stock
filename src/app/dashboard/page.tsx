"use client";

import { Theme } from "@/_types_";
import ChartSection from "@/components/ChartSection";
import Stats from "@/components/Stats";
import WatchList from "@/components/WatchList";
import { useTheme } from "@/hooks";
import styles from "@/styles/Dashboard.module.scss";

export default function Dashboard() {
  const { theme } = useTheme();
  return (
    <main
      className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}
    >
      <h1 className={styles.heading}>My Portfoliio</h1>
      <div className={styles["stats-overview"]}>
        <Stats theme={theme as Theme} />
      </div>
      <div className={styles["wrapper-content"]}>
        <div className={styles["chart-section"]}>
          {/* <ChartSection theme={theme as Theme} /> */}
        </div>
        <div className={styles.watchlist}>
          <WatchList />
        </div>
      </div>
    </main>
  );
}
