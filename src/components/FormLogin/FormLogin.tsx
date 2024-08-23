import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import styles from "./FormLogin.module.scss";
import Button from "../Button";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useFormInput, useLogin } from "@/hooks";

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const emailInput = useFormInput("");
  const passwordInput = useFormInput("");
  const { handleLogin, error, isLoading } = useLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLogin(emailInput.value.trim(), passwordInput.value.trim());
  };

  return (
    <form className={styles.wrapper}>
      <h3 className={styles.heading}>SIGN IN</h3>
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
        <a href='/auth/reset/password'>Forgot password?</a>
        <a href='/auth/register'>Register</a>
      </div>
      <Button
        type='submit'
        title='Log in'
        className={styles["btn-submit"]}
        onClick={handleSubmit}
      >
        Log in
      </Button>
      {isLoading && (
        <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
      )}
    </form>
  );
}
