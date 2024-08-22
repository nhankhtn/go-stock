import Image from "next/image";
import styles from "./ChartSection.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import { title } from "process";
import Chart from "../Chart/Chart";
import { ICharSection } from "@/_types_";
import { useState } from "react";

const menu = [
  {
    title: "1Day",
  },
  {
    title: "2Day",
  },
  {
    title: "1Month",
  },
  {
    title: "3Month",
  },
  {
    title: "6Month",
  },
  {
    title: "1Year",
  },
  {
    title: "5Year",
  },
  {
    title: "All",
  },
];

export default function ChartSection({ theme = "light" }: ICharSection) {
  const [time, setTime] = useState<number>(0);

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles.heading}>
        <Image
          src='https://cdn1.iconfinder.com/data/icons/system-black-circles/512/apple-1024.png'
          alt='Apple'
          width={36}
          height={36}
        />
        <div className={styles.brand}>
          <h3 className={styles.name}>Apple Inc</h3>
          <span className={styles["short-name"]}>AAPL</span>
        </div>
        <div className={styles.info}>
          <div className={styles.stats}>
            <span className={styles.rate}>
              -1,10%
              <FontAwesomeIcon icon={faArrowDown} />
            </span>
            <strong className={styles.price}>$150,70</strong>
          </div>
          <div className={styles.date}>Last update at 14:30</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles["wrapper-btn"]}>
          {menu.map((item, index) => (
            <Button
              outline
              active={time === index}
              theme={theme}
              key={index}
              onClick={(e: any) => setTime(index)}
            >
              {item.title}
            </Button>
          ))}
        </div>
        <div className={styles["wrapper-chart"]}>
          <Chart />
        </div>
      </div>
    </div>
  );
}
