import React from "react";
import { GET_DETAILS_DRAGON, PUT_DRAGON } from "../../services/api";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import useForm from "../../Hooks/useForm";

import { Container } from "./styles";

export default function DragonView({ id }) {
  const [dados, setDados] = React.useState(null);
  const name = useForm();
  const type = useForm();

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
      <h3>Editar - Detalhes Dragao</h3>
      <form onSubmit={handleSubmit}>
        <span>ID: {dados.id}</span>
        <span>Criado: {dados.createdAt}</span>
        <Input type="text" name="name" {...name} />
        <Input type="text" name="type" {...type} />
        <Button>Alterar</Button>
      </form>
    </Container>
  );
}
