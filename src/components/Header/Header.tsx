"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faEnvelope,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import styles from "./Header.module.scss";
import { useRouter } from "next/navigation";
import { useTheme } from "@/hooks";
import Button from "../Button";
import { IHeader, Theme } from "@/_types_";
import useProfile from "@/hooks/useProfile";
import { useEffect, useRef } from "react";

export default function Header({ isOpenSidebar, setOpenSidebar }: IHeader) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { user } = useProfile();
  const btnMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (btnMenuRef.current?.style.display !== "none") {
      setOpenSidebar(!isOpenSidebar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <button
          type='button'
          title='Menu'
          className={styles["btn-menu"]}
          ref={btnMenuRef}
          onClick={() => setOpenSidebar(!isOpenSidebar)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} className='m-icon' />
          <input placeholder='Press $ to search for various stocks' />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles["wrapper-btn"]}>
          <button type='button' title='Theme' onClick={toggleTheme}>
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} className='l-icon' />
            ) : (
              <FontAwesomeIcon icon={faSun} className='l-icon' />
            )}
          </button>
          <button type='button' title='Message'>
            <FontAwesomeIcon icon={faEnvelope} className='l-icon' />
          </button>
          <button type='button' title='Notify'>
            <FontAwesomeIcon icon={faBell} className='l-icon' />
            <sup className={styles["sub-info"]}>6</sup>
          </button>
        </div>
        <div className={styles["user-info"]}>
          {!user ? (
            <>
              <Button
                title='Register'
                onClick={handleRegister}
                outline
                theme={theme as Theme}
                className={styles["btn-login"]}
              >
                Register
              </Button>
              <Button
                title='Login'
                onClick={handleLogin}
                theme={theme as Theme}
                className={styles["btn-login"]}
              >
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
      </div>
    </header>
  );
}
