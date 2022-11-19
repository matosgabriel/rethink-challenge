import { Header } from "../../components/Header";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}></main>
    </div>
  );
}

export { ShowUsers };
