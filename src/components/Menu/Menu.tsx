import { title } from "process";
import Button from "../Button";
import styles from "./Menu.module.scss";

import { IMenu } from "@/_types_";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Menu({ items, theme, indexActive }: IMenu) {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Button
            alignTitle='left'
            to={item.to}
            leftIcon={item.icon}
            rightIcon={item.children && <FontAwesomeIcon icon={faCaretDown} />}
            theme={theme}
            className={styles["btn-menu-item"]}
            active={indexActive?.length === 1 && index === indexActive[0]}
          >
            {item.title}
          </Button>
          {item.children && (
            <div>
              {item.children.map((itemChildren, indexChildren) => (
                <Button
                  alignTitle='left'
                  to={itemChildren.to}
                  key={indexChildren}
                  className={styles["btn-child-menu-item"]}
                  active={
                    indexActive?.length === 2 &&
                    index === indexActive[0] &&
                    indexChildren === indexActive[1]
                  }
                >
                  {itemChildren.title}
                </Button>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
