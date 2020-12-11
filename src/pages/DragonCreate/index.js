import React from "react";
import Button from "../../Components/Button";
import { Container } from "./styles";
import { POST_DRAGON } from "../../services/api";
import { Link } from "react-router-dom";

export default function DragonCreate() {
  const [name, setName] = React.useState("");
  const [type, setType] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_DRAGON({
      name: name.value,
      type: type.value,
    });
    const response = await fetch(url, options);
    if (response.ok) {
      setName("");
      setType("");
    }
  }

  return (
    <Container>
      <h1>Cadastre um Dragao</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor="type">Tipo</label>
        <input
          type="text"
          value={type}
          id="type"
          onChange={({ target }) => setType(target.value)}
        />
        <Button>Cadastrar</Button>
      </form>
      <Link to="/home">
        <Button>Voltar</Button>
      </Link>
    </Container>
  );
}
