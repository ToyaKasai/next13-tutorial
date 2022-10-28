import { FC } from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles["header-container"]}>
      <p className={styles["title"]}>Next13 tutorial</p>
      <nav className={styles["navigation"]}>
        <Link className={styles["link"]} href="/">
          nav
        </Link>
        <Link className={styles["link"]} href="/">
          nav
        </Link>
        <Link className={styles["link"]} href="/">
          nav
        </Link>
      </nav>
    </header>
  );
};

export default Header;
