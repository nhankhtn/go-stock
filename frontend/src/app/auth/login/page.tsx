"use client";

import FormLogin from "@/components/FormLogin";
import { useTheme } from "@/hooks";
import styles from "@/styles/Login.module.scss";

export default function Register() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles["wrapper-form"]}>
        <FormLogin />
      </div>
    </div>
  );
}
