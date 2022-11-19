import { FormEvent, useCallback } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import styles from "./styles.module.css";

import { toast } from "react-toastify";
import { Header } from "../../components/Header";

function Registration() {
  const formSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();

    toast("Sucesso!", {
      type: "success",
      theme: "dark",
      position: "bottom-center",
      style: { background: "var(--black-900)" },
    });
    console.log("submit");
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1>Cadastro</h1>

        <form className={styles.form} onSubmit={formSubmit}>
          <div className={styles.input1}>
            <Input label="Nome" placeholder="Fulano" />
          </div>
          <div className={styles.input2}>
            <Input label="Idade" placeholder="32" type="number" min={0} />
          </div>
          <div className={styles.input3}>
            <Input label="Profissão" placeholder="Taxista" />
          </div>
          <div className={styles.input4}>
            <Input label="Email" placeholder="fulano@example.com" />
          </div>
          <div className={styles.input5}>
            <Input label="Telefone" placeholder="31 99101 7451" />
          </div>
          <div className={styles.input6}>
            <Input label="Data de preenchimento" placeholder="01/01/2023" />
          </div>

          <div className={styles.buttons}>
            <Button title="Cancelar" type="button" />
            <Button title="Enviar" type="submit" />
          </div>
        </form>
      </main>
    </div>
  );
}

export { Registration };
