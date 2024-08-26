"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faKey,
  faLock,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "@/styles/ResetPassword.module.scss";
import Button from "@/components/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useFormInput, useResetPassword } from "@/hooks";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);
  const emailInput = useFormInput("");
  const codeInput = useFormInput("");
  const passwordInput = useFormInput("");
  const rePasswordInput = useFormInput("");
  const { handleResetPassword, error, isLoading } = useResetPassword();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleResetPassword(
      emailInput.value.trim(),
      codeInput.value.trim(),
      passwordInput.value.trim(),
      rePasswordInput.value.trim()
    );
  };

  return (
    <form className={styles.wrapper}>
      <div className={styles.heading}>
        <h3>Reset password</h3>
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
              value={emailInput.value}
              onChange={emailInput.onChange}
            />
          </div>
        </div>
        <div className={styles["field-item"]}>
          <label htmlFor='code'>Code</label>
          <div className={styles["wrap-code"]}>
            <div className={styles["wrap-input"]}>
              <FontAwesomeIcon className={styles["icon-input"]} icon={faKey} />
              <input
                name='code'
                id='code'
                type='text'
                value={emailInput.value}
                onChange={emailInput.onChange}
              />
            </div>
            <button
              type='button'
              title='Send code'
              className={styles["btn-send"]}
            >
              Send code
            </button>
          </div>
        </div>
        <div className={styles["field-item"]}>
          <label htmlFor='password'>New password</label>
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
        <div className={styles["field-item"]}>
          <label htmlFor='re-password'>Re-enter password</label>
          <div className={styles["wrap-input"]}>
            <FontAwesomeIcon className={styles["icon-input"]} icon={faLock} />
            <input
              name='password'
              id='password'
              type={showRePassword ? "text" : "password"}
              value={rePasswordInput.value}
              onChange={rePasswordInput.onChange}
            />
            <button
              type='button'
              className={styles["toggle-password"]}
              onClick={(e) => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </button>
          </div>
        </div>
        {error && <span className={styles["message-error"]}>{error}</span>}
      </div>
      <div className={styles["more-info"]}>
        <p>Haven&apos;t received the code?</p>
        <button type='button' title='Resend codes'>
          Resend
        </button>
      </div>
      <Button
        type='submit'
        title='Log in'
        className={styles["btn-submit"]}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
