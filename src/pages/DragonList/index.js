import React from "react";
import { GET_DETAILS_DRAGON, PUT_DRAGON } from "../../services/api";
import Button from "../../Components/Button";
import { Container } from "./styles";

export default function DragonList({ id }) {
  const [dados, setDados] = React.useState(null);

  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");

  React.useEffect(() => {
    async function loadDetals() {
      const { url, options } = GET_DETAILS_DRAGON(id);
      const response = await fetch(url, options);
      const json = await response.json();
      setDados(json);
    }
    loadDetals();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PUT_DRAGON(id, {
      name: name.value,
      type: type.value,
    });
    const response = await fetch(url, options);
    console.log(response);
  }

  if (dados === null) return null;
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <span>ID: {dados.id}</span>
        <span>Criado: {dados.createdAt}</span>
        <input
          type="text"
          id="name"
          value={dados.name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="text"
          id="type"
          value={dados.type}
          onChange={({ target }) => setType(target.value)}
        />
        <Button>Alterar</Button>
      </form>
    </Container>
  );
}
