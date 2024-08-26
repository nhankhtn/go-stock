"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "@/styles/Login.module.scss";
import Button from "@/components/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useFormInput, useLogin } from "@/hooks";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailInput = useFormInput("");
  const passwordInput = useFormInput("");
  const { handleLogin, error, isLoading } = useLogin();

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    handleLogin(emailInput.value.trim(), passwordInput.value.trim());
  };

  return (
    <form className={styles.wrapper}>
      <div className={styles.heading}>
        <h3>Sign in</h3>
        <p>Please fill in your basic info</p>
      </div>
      <div className={styles["fields"]}>
        <div className={styles["field-item"]}>
          <label htmlFor='email'>Email</label>
          <div className={styles["wrap-input"]}>
            <FontAwesomeIcon
              className={styles["icon-input"]}
              icon={faEnvelope}
            />
            <input
              name='email'
              id='email'
              type='text'
              placeholder='example@gmail.com'
              value={emailInput.value}
              onChange={emailInput.onChange}
            />
          </div>
        </div>
        <div className={styles["field-item"]}>
          <label htmlFor='password'>Password</label>
          <div className={styles["wrap-input"]}>
            <FontAwesomeIcon className={styles["icon-input"]} icon={faLock} />
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
      </div>
      <Button
        type='submit'
        title='Sign in'
        className={styles["btn-submit"]}
        onClick={handleSubmit}
      >
        Sign in
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
      <div className={styles["more-info"]}>
        <a href='/auth/reset/password'>Forgot password?</a>
        <a href='/auth/register'>Register</a>
      </div>
    </form>
  );
}
