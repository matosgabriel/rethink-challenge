import { Header } from "../../components/Header";

import styles from "./styles.module.css";

function ShowUsers() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Profissão</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Data de preenchimento</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Nome">Gabriel</td>
              <td data-label="Idade">21</td>
              <td data-label="Profissão">Estudante</td>
              <td data-label="Email">gabriel@gmail.com</td>
              <td data-label="Telefone">(27) 9 9633-7304</td>
              <td data-label="Data de preenchimento">20/11/2022</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td data-label="Nome">Gabriel</td>
              <td data-label="Idade">21</td>
              <td data-label="Profissão">Estudante</td>
              <td data-label="Email">gabriel@gmail.com</td>
              <td data-label="Telefone">(27) 9 9633-7304</td>
              <td data-label="Data de preenchimento">20/11/2022</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td data-label="Nome">Gabriel</td>
              <td data-label="Idade">21</td>
              <td data-label="Profissão">Estudante</td>
              <td data-label="Email">gabriel@gmail.com</td>
              <td data-label="Telefone">(27) 9 9633-7304</td>
              <td data-label="Data de preenchimento">20/11/2022</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td data-label="Nome">Gabriel</td>
              <td data-label="Idade">21</td>
              <td data-label="Profissão">Estudante</td>
              <td data-label="Email">gabriel@gmail.com</td>
              <td data-label="Telefone">(27) 9 9633-7304</td>
              <td data-label="Data de preenchimento">20/11/2022</td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <div className={styles.fillBox}></div>
    </div>
  );
}

export { ShowUsers };
