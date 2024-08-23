"use client";

import FormResetPassword from "@/components/FormResetPassword";
import { useTheme } from "@/hooks";
import styles from "@/styles/ResetPassword.module.scss";

export default function ResetPassword() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles["wrapper-form"]}>
        <FormResetPassword />
      </div>
    </div>
  );
}
