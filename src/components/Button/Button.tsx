import Link from "next/link";
import React from "react";

import styles from "./Button.module.scss";
import { IButton } from "@/_types_";

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
  outline,
  alignTitle = "center",
  theme = "light",
  ...passProps
}: IButton) {
  let Comp: React.ElementType = "button";
  const props: React.HTMLProps<HTMLButtonElement> = {
    onClick,
    ...passProps,
  };

  const classes = `${styles.wrapper} ${className} ${
    disabled ? styles.disabled : ""
  } ${active ? styles.active : ""} ${outline ? styles.outline : ""} ${
    theme === "dark" ? styles.dark : ""
  }`;

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
      <span className={styles.title} style={{ textAlign: alignTitle }}>
        {children}
      </span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Comp>
  );
}
