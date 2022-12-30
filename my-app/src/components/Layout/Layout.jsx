import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./style.module.css";

export const Layout = ({ children }) => (
  <>
    <Header />

    <main className={styles.container}> {children} </main>

    <Footer />
  </>
);
