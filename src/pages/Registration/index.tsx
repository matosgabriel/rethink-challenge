import { FormEvent, useCallback, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { v4 as uuidv4 } from "uuid";

import { api } from "../../utils/api";
import styles from "./styles.module.css";

interface Person {
  id: string;
  name: string;
  age: number;
  occupation: string;
  email: string;
  phone: string;
  fillDate: string;
}

function Registration() {
  const [search, setSearch] = useState<string>("");
  const [formSubmitionEnabled, setFormSubmitionEnabled] = useState(true);

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fillDate, setFillDate] = useState<string>("");

  const [persons, setPersons] = useState<Person[]>();
  const [filteredPersons, setFilteredPersons] = useState<Person[]>();

  // Load data of all registered persons
  useEffect(() => {
    api.get("/persons").then((response) => {
      setPersons(response.data);
      setFilteredPersons(response.data);
    });
  }, []);

  // Handle the search by a person name
  const handleSearch = useCallback(
    (searchValue: string) => {
      setSearch(searchValue);

      const findPersons = persons?.filter((person) =>
        person.name.toLowerCase().startsWith(searchValue.toLowerCase())
      );

      setFilteredPersons(findPersons);
    },
    [persons]
  );

  // Handle the selection of a person from search results
  const handleSelectPerson = useCallback((person: Person) => {
    setName(person.name);
    setAge(person.age.toString());
    setOccupation(person.occupation);
    setEmail(person.email);
    setPhone(person.phone);
    setFillDate(person.fillDate.split("T")[0]);

    setFormSubmitionEnabled(false);
  }, []);

  // Handle clear the form inputs and enable submit button
  const handleClearForm = useCallback(() => {
    setName("");
    setAge("");
    setOccupation("");
    setEmail("");
    setPhone("");
    setFillDate("");

    setFormSubmitionEnabled(true);
  }, []);

  // Handle form submit (insert a new person)
  const formSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const newPerson = {
          name,
          age: Number(age),
          occupation,
          email,
          phone,
          fillDate: fillDate ? new Date(fillDate) : undefined, // Converting the string from input to a date
          id: uuidv4(), // Generating a new random universal unique identificator
        };

        const { data: insertedPerson } = await api.post<Person>(
          "/persons",
          newPerson
        );
        console.log(insertedPerson);

        setPersons((prevState) => {
          return prevState ? [...prevState, insertedPerson] : [insertedPerson];
        });

        insertedPerson.name.startsWith(search) &&
          setFilteredPersons((prevState) => {
            return prevState
              ? [insertedPerson, ...prevState]
              : [insertedPerson];
          });

        // Success toastify notification
        toast("Cadastro realizado com sucesso", {
          type: "success",
          theme: "dark",
          position: "bottom-center",
          style: { background: "var(--black-900)" },
          progressStyle: { background: "var(--pear)" },
        });
      } catch {
        // Error toastify notification
        toast("Erro ao efetuar cadastro", {
          type: "error",
          theme: "dark",
          position: "bottom-center",
          style: { background: "var(--black-900)" },
        });
      }
    },
    [name, age, occupation, email, phone, fillDate, search]
  );

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.content}>
        <aside className={styles.searchBox}>
          <h1>Busca</h1>

          <Input
            placeholder="Fulano"
            label="Nome"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            type="search"
          />

          <div className={styles.searchResults}>
            {filteredPersons?.length === 0 ? (
              <h2>Sem resultados</h2>
            ) : (
              <ul>
                {search.length > 0
                  ? filteredPersons?.map((person) => {
                      return (
                        <li
                          key={person.id}
                          onClick={() => handleSelectPerson(person)}
                        >
                          {person.name}
                        </li>
                      );
                    })
                  : persons?.map((person) => {
                      return (
                        <li
                          key={person.id}
                          onClick={() => handleSelectPerson(person)}
                        >
                          {person.name}
                        </li>
                      );
                    })}
              </ul>
            )}
          </div>
        </aside>

        <main className={styles.main}>
          <h1>Dados{!formSubmitionEnabled && <span> de {name}</span>}</h1>

          <form className={styles.form} onSubmit={formSubmit}>
            <div className={styles.input1}>
              <Input
                label="Nome"
                placeholder="Fulano"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!formSubmitionEnabled}
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
                onChange={(e) => setAge(e.target.value)}
                disabled={!formSubmitionEnabled}
                required
              />
            </div>
            <div className={styles.input3}>
              <Input
                label="Profissão"
                placeholder="Taxista"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                disabled={!formSubmitionEnabled}
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
                disabled={!formSubmitionEnabled}
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
                disabled={!formSubmitionEnabled}
                required
              />
            </div>
            <div className={styles.input6}>
              <Input
                label="Data de preenchimento"
                placeholder="01/01/2023"
                type="date"
                value={fillDate}
                onChange={(e) => {
                  setFillDate(e.target.value);
                  console.log(e.target.value);
                }}
                disabled={!formSubmitionEnabled}
                required
              />
            </div>

            <div className={styles.buttons}>
              <Button title="Limpar" type="button" onClick={handleClearForm} />
              <Button
                title="Cadastrar"
                type="submit"
                disabled={!formSubmitionEnabled}
              />
            </div>
          </form>
        </main>
      </div>
      <div className={styles.fillBox}></div>
    </div>
  );
}

export { Registration };
