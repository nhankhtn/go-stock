"use client";

import FormLogin from "@/components/FormLogin";
import styles from "@/styles/Login.module.scss";

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>GO STOCK</h1>
        <p className={styles.slogan}>Create a Go Stock account quickly</p>
      </div>
      <div className={styles.right}>
        <div className={styles["wrapper-form"]}>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
