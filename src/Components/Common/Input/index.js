import React from "react";
import { Container } from "./styles";

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></input>
      {error && <p className="error">{error}</p>}
    </Container>
  );
}
