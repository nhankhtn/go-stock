"use client";

import styles from "@/styles/Auth.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <button
        type='button'
        title='Back'
        className={styles["btn-back"]}
        onClick={handleBack}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        <span>Back</span>
      </button>
      <div className={styles.wrapper}>
        <div className={styles["wrapper-form"]}>
          {children}
          <div className={styles["wrap-btns"]}>
            <div className={styles["social-btns"]}>
              <div className={styles["btn-wrap"]}>
                <button type='button' title='Email'>
                  <i className='ti-email'></i>
                </button>
                <span className={styles.name}>Email</span>
              </div>
              <div className={styles["btn-wrap"]}>
                <button type='button' title='Facebook'>
                  <i className='ti-facebook'></i>
                </button>
                <span className={styles.name}>Facebook</span>
              </div>
              <div className={styles["btn-wrap"]}>
                <button type='button' title='Instagram'>
                  <i className='ti-instagram'></i>
                </button>
                <span className={styles.name}>Instagram</span>
              </div>
            </div>
            <div className={styles["btn-term"]}>
              <input type='checkbox' />
              <p>
                By signing up I agree with <a href='/'>term and conditions</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>
            <h2>Sign Up</h2>
            <p>Using your social media account</p>
          </div>
          <div className={styles["social-btns"]}>
            <div className={styles["btn-wrap"]}>
              <button type='button' title='Email'>
                <i className='ti-email'></i>
              </button>
              <span className={styles.name}>Email</span>
            </div>
            <div className={styles["btn-wrap"]}>
              <button type='button' title='Facebook'>
                <i className='ti-facebook'></i>
              </button>
              <span className={styles.name}>Facebook</span>
            </div>
            <div className={styles["btn-wrap"]}>
              <button type='button' title='Instagram'>
                <i className='ti-instagram'></i>
              </button>
              <span className={styles.name}>Instagram</span>
            </div>
          </div>
          <div className={styles["btn-term"]}>
            <input type='checkbox' />
            <p>
              By signing up I agree with <a href='/'>term and conditions</a>
            </p>
          </div>
          <div className={styles.footing}>Create account</div>
        </div>
      </div>
    </div>
  );
}
