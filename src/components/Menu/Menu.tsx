import { title } from "process";
import Button from "../Button";
import styles from "./Menu.module.scss";

import { IMenu } from "@/_types_";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ items, theme }: IMenu) {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <>
          <Button
            alignTitle='left'
            to={item.to}
            leftIcon={item.icon}
            rightIcon={item.children && <FontAwesomeIcon icon={faCaretDown} />}
            key={index}
            theme={theme}
            className={styles["btn-menu-item"]}
          >
            {item.title}
          </Button>
          {item.children && (
            <div>
              {item.children.map((childrenItem, index) => (
                <Button
                  alignTitle='left'
                  to={childrenItem.to}
                  key={index}
                  className={styles["btn-child-menu-item"]}
                >
                  {childrenItem.title}
                </Button>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
