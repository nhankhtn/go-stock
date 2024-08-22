import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormLogin.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function FormLogin() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>SIGN IN</h3>
      <div className={styles["form-item"]}>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' type='text' />
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
        <a href='/auth/reset/password'>Forgot password?</a>
        <a href='/auth/register'>Register</a>
      </div>
      <Button type='submit' title='Log in' className={styles["btn-submit"]}>
        Log in
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
