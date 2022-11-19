import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input className={styles.input} {...rest} />
    </div>
  );
}

export { Input };
