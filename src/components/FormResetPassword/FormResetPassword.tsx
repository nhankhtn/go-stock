import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormResetPassword.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useFormInput, useResetPassword } from "@/hooks";

export default function FormResetPassword() {
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
      <h3 className={styles.heading}>Reset password</h3>
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
        <label htmlFor='code'>Code</label>
        <div className={styles["wrap-code"]}>
          <input
            name='code'
            id='code'
            type='text'
            value={codeInput.value}
            onChange={codeInput.onChange}
          />
          <button
            type='button'
            title='Send code'
            className={styles["btn-send"]}
          >
            Send code
          </button>
        </div>
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='password'>New password</label>
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
      <div className={styles["form-item"]}>
        <label htmlFor='re-password'>Re-enter password</label>
        <div className={styles["password-wrapper"]}>
          <input
            name='re-password'
            id='re-password'
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
      <div className={styles["more-info"]}>
        <a href='/auth/reset/password'>Haven&apos;t received the code?</a>
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
