"use client";

import FormRegister from "@/components/FormRegister";
import { useTheme } from "@/hooks";
import styles from "@/styles/Register.module.scss";

export default function Register() {
  const { theme } = useTheme();

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={styles["wrapper-form"]}>
        <FormRegister />
      </div>
    </div>
  );
}
