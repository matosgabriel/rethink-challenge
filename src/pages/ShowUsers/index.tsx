import { Link } from "react-router-dom";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <h1>ShowUsers</h1>

      <Link to="registration">
        <button className={styles.button}>Ir para cadastro</button>
      </Link>
    </div>
  );
}

export { ShowUsers };
