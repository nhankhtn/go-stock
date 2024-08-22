"use client";

import FormRegister from "@/components/FormRegister";
import styles from "@/styles/Register.module.scss";

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>GO STOCK</h1>
        <p className={styles.slogan}>Create a Go Stock account quickly</p>
      </div>
      <div className={styles.right}>
        <div className={styles["wrapper-form"]}>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
