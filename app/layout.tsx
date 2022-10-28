import { FC, ReactNode } from "react";

import Header from "../components/partials/Header/Header";
import Footer from "../components/partials/Footer/Footer";

import styles from "./layout.module.scss";

import "./globals.scss";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>Next13 tutorial</title>
        <meta name="description" content="Next13 tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className={styles["layout-container"]}>
          <Header />
          <main className={styles["main"]}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
