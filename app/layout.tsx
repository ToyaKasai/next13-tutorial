import { FC, ReactNode } from "react";

import Footer from "../components/partials/Footer/Footer";
import Header from "../components/partials/Header/Header";

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
        <Header />
        <main className={styles["main-container"]}>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
