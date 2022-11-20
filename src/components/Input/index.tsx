import React, { InputHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.css";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  inputRef?: React.LegacyRef<HTMLInputElement> | undefined;
}

function Input({ label, inputRef, ...rest }: InputProps) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input className={styles.input} ref={inputRef} {...rest} />
    </div>
  );
}

export { Input };
