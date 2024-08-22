"use client";

import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";
import Menu from "../Menu";
import { menuConfig, menuNavigate } from "@/constants";
import { useTheme } from "@/hooks";
import { Theme } from "@/_types_";

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useTheme();

  return (
    <aside
      className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.heading}>
        <Image
          className={styles.logo}
          src='/logo.png'
          width={28}
          height={28}
          alt='Logo'
          loading='lazy'
        />
        <span className={styles.title}>GoStock</span>
      </div>
      <div className={styles.banner}>
        <div className={styles["left"]}>
          <p className={styles["title-banner"]}>TotalInvestment</p>
          <h2 className={styles.price}>
            $5380,90
            <FontAwesomeIcon className={styles["icon-eye"]} icon={faEyeSlash} />
          </h2>
        </div>
        <div className={styles["right"]}>
          +18,10%
          <FontAwesomeIcon className={styles["icon-up"]} icon={faArrowUp} />
        </div>
      </div>
      <div className={styles.navigate}>
        <Menu items={menuNavigate} theme={theme as Theme} />
      </div>
      <div className={styles["more-info"]}>
        <Menu items={menuConfig} theme={theme as Theme} />
      </div>
    </aside>
  );
}
