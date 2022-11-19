import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { toast } from "react-toastify";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <h1>ShowUsers</h1>

      <Button
        title="Entrar"
        onClick={() => {
          toast("Usuário adicionado com sucesso!", {
            theme: "dark",
            type: "success",
          });
        }}
      />

      <Input placeholder="Nome" />

      <Link to="registration">
        <button className={styles.button}>Ir para cadastro</button>
      </Link>
    </div>
  );
}

export { ShowUsers };
