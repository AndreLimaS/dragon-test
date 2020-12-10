import React from "react";
import { GET_DETAILS_DRAGON } from "../../services/api";
import { Container } from "./styles";

export default function Modal({ id }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    async function loadDetals() {
      const { url, options } = GET_DETAILS_DRAGON(id);
      const response = await fetch(url, options);
      const json = await response.json();
      setDados(json);
    }
    loadDetals();
  }, [id]);

  if (dados === null) return null;
  return (
    <Container>
      <ul key={dados.id}>
        <li>ID: {dados.id}</li>
        <li>Nome: {dados.name}</li>
        <li>Criado: {dados.createdAt}</li>
        <li>Tipo: {dados.type}</li>
      </ul>
    </Container>
  );
}
