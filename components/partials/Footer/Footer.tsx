import { FC } from "react";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles["footer-container"]}>&copy; ToyaKasai</footer>
  );
};

export default Footer;
