"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { useTheme } from "@/hooks";
import Button from "../Button";
import { Theme } from "@/_types_";

export default function Header() {
  const isAuth = true;
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = () => {
    router.push("/auth/login");
  };
  const handleRegister = () => {
    router.push("/auth/register");
  };

  return (
    <header
      className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.left}>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} />
          <input placeholder='Press $ to search for various stocks' />
        </div>
        <div className={styles["wrapper-btn"]}>
          <button type='button' title='Theme' onClick={toggleTheme}>
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </button>
          <button type='button' title='Message'>
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
          <button type='button' title='Notify'>
            <FontAwesomeIcon icon={faBell} />
            <sup className={styles["sub-info"]}>6</sup>
          </button>
        </div>
      </div>
      <div className={styles.right}>
        {isAuth ? (
          <>
            <Button
              title='Register'
              onClick={handleRegister}
              outline
              theme={theme as Theme}
            >
              Register
            </Button>
            <Button title='Login' onClick={handleLogin} theme={theme as Theme}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Image
              className={styles.avatar}
              src='/avatar.jpg'
              alt='avatar'
              width={28}
              height={28}
              loading='lazy'
            />
            <span>Duy Nhan</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </>
        )}
      </div>
    </header>
  );
}
