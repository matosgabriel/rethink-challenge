import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <h1>ShowUsers</h1>

      <Button title="Entrar" />

      <Input placeholder="Nome" />

      <Link to="registration">
        <button className={styles.button}>Ir para cadastro</button>
      </Link>
    </div>
  );
}

export { ShowUsers };
