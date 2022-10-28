import { FC } from "react";

import styles from "./Heading.module.scss";

type HeadingProps = {
  title: string;
};

const Heading: FC<HeadingProps> = ({ title }) => {
  return <h1 className={styles["heading-container"]}>{title}</h1>;
};

export default Heading;
