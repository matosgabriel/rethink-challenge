import { FormEvent, useCallback, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { api } from "../../utils/api";
import styles from "./styles.module.css";

function Registration() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>();
  const [occupation, setOccupation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fillDate, setFillDate] = useState<string>();

  const navigate = useNavigate();

  const formSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        await api.post("/persons", {
          name,
          age,
          occupation,
          email,
          phone,
          fillDate: fillDate ? new Date(fillDate) : undefined, // Converting the string from input to a date
          id: uuidv4(), // Generating a new random universal unique identificator
        });

        // Success toastify message
        toast("Cadastro realizado com sucesso", {
          type: "success",
          theme: "dark",
          position: "bottom-center",
          style: { background: "var(--black-900)" },
        });
      } catch {
        // Error toastify message
        toast("Erro ao efetuar cadastro", {
          type: "error",
          theme: "dark",
          position: "bottom-center",
          style: { background: "var(--black-900)" },
        });
      }
    },
    [name, age, occupation, email, phone, fillDate]
  );

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1>Cadastro</h1>

        <form className={styles.form} onSubmit={formSubmit}>
          <div className={styles.input1}>
            <Input
              label="Nome"
              placeholder="Fulano"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.input2}>
            <Input
              label="Idade"
              placeholder="32"
              type="number"
              min={0}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              required
            />
          </div>
          <div className={styles.input3}>
            <Input
              label="Profissão"
              placeholder="Taxista"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              required
            />
          </div>
          <div className={styles.input4}>
            <Input
              label="Email"
              type="email"
              placeholder="fulano@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.input5}>
            <Input
              label="Telefone"
              placeholder="(31) 9 9999-9999"
              type="tel"
              pattern="\([0-9]{2}\) [0-9] [0-9]{4}-[0-9]{4}"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={styles.input6}>
            <Input
              label="Data de preenchimento"
              placeholder="01/01/2023"
              type="date"
              value={fillDate}
              onChange={(e) => setFillDate(e.target.value)}
              required
            />
          </div>

          <div className={styles.buttons}>
            <Button
              title="Cancelar"
              type="button"
              onClick={() => navigate("/")}
            />
            <Button title="Enviar" type="submit" />
          </div>
        </form>
      </main>
      <div className={styles.fillBox}></div>
    </div>
  );
}

export { Registration };
