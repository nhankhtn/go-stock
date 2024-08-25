"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormRegister.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useFormInput, useRegister, useTheme } from "@/hooks";

export default function FormRegister() {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailInput = useFormInput("");
  const usernameInput = useFormInput("");
  const passwordInput = useFormInput("");
  const { handleRegister, error, isLoading } = useRegister();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleRegister(
      emailInput.value.trim(),
      usernameInput.value.trim(),
      passwordInput.value.trim()
    );
  };

  return (
    <form
      className={`${styles.wrapper} ${theme === "dark" ? styles.dark : ""}`}
    >
      <h3 className={styles.heading}>REGISTER</h3>
      <div className={styles["form-item"]}>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          id='email'
          type='text'
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          id='username'
          type='text'
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='password'>Password</label>
        <div className={styles["password-wrapper"]}>
          <input
            name='password'
            id='password'
            type={showPassword ? "text" : "password"}
            value={passwordInput.value}
            onChange={passwordInput.onChange}
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
        <a href='/auth/login'>Do you have an account?</a>
        <a href='/auth/login'>Sign in</a>
      </div>
      <Button
        type='submit'
        title='Register'
        className={styles["btn-submit"]}
        onClick={handleSubmit}
      >
        Register
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
