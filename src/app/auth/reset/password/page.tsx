"use client";

import FormResetPassword from "@/components/FormResetPassword";
import styles from "@/styles/ResetPassword.module.scss";

export default function ResetPassword() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1 className={styles.title}>GO STOCK</h1>
        <p className={styles.slogan}>Create a Go Stock account quickly</p>
      </div>
      <div className={styles.right}>
        <div className={styles["wrapper-form"]}>
          <FormResetPassword />
        </div>
      </div>
    </div>
  );
}
