import React from "react";
import { GET_DETAILS_DRAGON } from "../../services/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";

import { Container, Rows } from "./styles";

export default function DragonView() {
  const [dados, setDados] = React.useState(null);
  const { dragonId } = useParams();

  React.useEffect(() => {
    async function loadDetals() {
      const { url, options } = GET_DETAILS_DRAGON(dragonId);
      const response = await fetch(url, options);
      const json = await response.json();
      setDados(json);
    }
    loadDetals();
  }, [dragonId]);

  if (dados === null) return null;
  return (
    <Container>
      <Rows>
        <h3>Detalhes Dragão</h3>
        <span>ID: {dados.id}</span>
        <span>Criado: {dados.createdAt}</span>
        <span>Nome: {dados.name}</span>
        <span>Tipo: {dados.type}</span>
        <Link to="/home">
          <Button>Voltar</Button>
        </Link>
      </Rows>
    </Container>
  );
}
