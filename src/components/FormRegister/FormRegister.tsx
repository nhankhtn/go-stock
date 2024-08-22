"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormRegister.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function FormRegister() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>REGISTER</h3>
      <div className={styles["form-item"]}>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' type='text' />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='username'>Username</label>
        <input name='username' id='username' type='text' />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='password'>Password</label>
        <div className={styles["password-wrapper"]}>
          <input
            name='password'
            id='password'
            type={showPassword ? "text" : "password"}
          />
          <button
            type='button'
            className={styles["toggle-password"]}
            onClick={(e) => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </button>
        </div>
      </div>
      {error && <span className={styles["message-error"]}>{error}</span>}
      <div className={styles["more-info"]}>
        <p>Do you have an account?</p>
        <a href='/auth/login'>Sign in</a>
      </div>
      <Button type='submit' title='Register' className={styles["btn-submit"]}>
        Register
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
