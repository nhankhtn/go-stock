import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormResetPassword.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function FormResetPassword() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRePassword, setShowRePassword] = useState<boolean>(false);

  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>Reset password</h3>
      <div className={styles["form-item"]}>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' type='text' />
      </div>
      <div className={styles["form-item"]}>
        <label htmlFor='code'>Code</label>
        <div className={styles["wrap-code"]}>
          <input name='code' id='code' type='text' />{" "}
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
      <div className={styles["form-item"]}>
        <label htmlFor='re-password'>Re-enter password</label>
        <div className={styles["password-wrapper"]}>
          <input
            name='re-password'
            id='re-password'
            type={showRePassword ? "text" : "password"}
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
      <Button type='submit' title='Log in' className={styles["btn-submit"]}>
        Submit
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
