"use client";
import { useTheme } from "@/hooks";
import styles from "@/styles/Auth.module.scss";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}>
      <button
        type='button'
        title='Back'
        className={styles["btn-back"]}
        onClick={handleBack}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Back</span>
      </button>
      <button
        type='button'
        title='Theme'
        onClick={toggleTheme}
        className={styles["btn-theme"]}
      >
        {theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <h1 className={styles.title}>GO STOCK</h1>
      <>{children}</>
    </div>
  );
}
