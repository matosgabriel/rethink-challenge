import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      {title}
    </button>
  );
}

export { Button };
