import React from "react";
import { GET_DETAILS_DRAGON, PUT_DRAGON } from "../../services/api";
import { useParams } from "react-router";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import useForm from "../../Hooks/useForm";

import { Container } from "./styles";

export default function DragonEdit() {
  const [data, setData] = React.useState(null);
  const name = useForm();
  const type = useForm();
  const { dragonId } = useParams();

  console.log("asdasd" + dragonId);
  React.useEffect(() => {
    if (dragonId) {
      async function loadDetails() {
        const { url, options } = GET_DETAILS_DRAGON(dragonId);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
      }
      loadDetails();
    }
  }, [dragonId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PUT_DRAGON(dragonId, {
      name: name.value,
      type: type.value,
    });
    const response = await fetch(url, options);
    console.log(response);
  }

  if (data === null) return <div>carregando..</div>;
  return (
    <Container>
      <h3>Editar - Detalhes Dragao</h3>
      <form onSubmit={handleSubmit}>
        <span>ID: {data.id}</span>
        <span>Criado: {data.createdAt}</span>
        <Input type="text" name="name" {...name} />
        <Input type="text" name="type" {...type} />
        <Button>Alterar</Button>
      </form>
    </Container>
  );
}
