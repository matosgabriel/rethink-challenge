import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Detran</h1>
      </Link>

      <nav className={styles.navigator}>
        <Link to="/">
          <span className={pathname === "/" ? styles.active : undefined}>
            Listagem
          </span>
        </Link>
        <Link to="/registration">
          <span
            className={pathname === "/registration" ? styles.active : undefined}
          >
            Cadastro
          </span>
        </Link>
      </nav>
    </header>
  );
}

export { Header };
