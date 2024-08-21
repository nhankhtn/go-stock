import Link from "next/link";
import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({
  children,
  to,
  href,
  leftIcon,
  rightIcon,
  onClick,
  className,
  disabled,
  active,
  ...passProps
}: ButtonProps) {
  let Comp: React.ElementType = "button";
  const props: React.HTMLProps<HTMLButtonElement> = {
    onClick,
    ...passProps,
  };

  const classes = `${styles.wrapper} ${className} ${
    disabled ? styles.disabled : ""
  } ${active ? styles.active : ""}`;

  if (href) {
    Comp = "a";
    props.href = href;
    props.target = "_blank";
  } else if (to) {
    Comp = Link;
    props.href = to;
  } else {
    props.type = "button";
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.title}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Comp>
  );
}
