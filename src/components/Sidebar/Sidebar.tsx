"use client";

import styles from "./Sidebar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCaretDown,
  faChartSimple,
  faGear,
  faHouse,
  faNewspaper,
  faPhone,
  faUserGroup,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../Button/Button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.wrapper}>
      <div className={styles.heading}>
        <Image
          className={styles.logo}
          src='/logo.png'
          width={28}
          height={28}
          alt='Logo'
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
        <Button
          className={styles["btn-navigate"]}
          to='/'
          active={pathname === "/"}
          leftIcon={<FontAwesomeIcon icon={faHouse} />}
        >
          Home
        </Button>
        <Button
          className={styles["btn-navigate"]}
          to='/dashboard'
          active={pathname === "/dashboard"}
          leftIcon={<FontAwesomeIcon icon={faHouse} />}
        >
          Dashboard
        </Button>
        <Button
          className={styles["btn-navigate"]}
          to='/'
          active={pathname === "/"}
          leftIcon={<FontAwesomeIcon icon={faWallet} />}
        >
          Wallet
        </Button>
        <Button
          className={styles["btn-navigate"]}
          to='/'
          active={pathname === "/"}
          leftIcon={<FontAwesomeIcon icon={faNewspaper} />}
        >
          News
        </Button>
        <Button
          className={styles["btn-navigate"]}
          leftIcon={<FontAwesomeIcon icon={faChartSimple} />}
          rightIcon={<FontAwesomeIcon icon={faCaretDown} />}
        >
          Stock & fund
        </Button>
        <div className={styles["sub-navigate"]}>
          <Button className={styles["btn-sub-navigate"]} to='/'>
            Stock
          </Button>
          <Button className={styles["btn-sub-navigate"]} to='/'>
            Cryptocurrency
          </Button>
          <Button className={styles["btn-sub-navigate"]} to='/'>
            Mutual Fund
          </Button>
          <Button className={styles["btn-sub-navigate"]} to='/'>
            Gold
          </Button>
        </div>
      </div>
      <div className={styles["more-info"]}>
        <Button
          title='Our community'
          leftIcon={<FontAwesomeIcon icon={faUserGroup} />}
        >
          Our community
        </Button>
        <Button
          title='Settings'
          leftIcon={<FontAwesomeIcon icon={faGear} />}
          rightIcon={<span className={styles["sub-info"]}>6</span>}
        >
          Settings
        </Button>
        <Button
          title='Contact us'
          leftIcon={<FontAwesomeIcon icon={faPhone} />}
        >
          Contact us
        </Button>
      </div>
    </aside>
  );
}
