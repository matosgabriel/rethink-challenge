import { Header } from "../../components/Header";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.listing}></div>
      </main>

      <div className={styles.fillBox}></div>
    </div>
  );
}

export { ShowUsers };
