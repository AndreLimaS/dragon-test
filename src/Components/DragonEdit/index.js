import React from "react";
import { GET_DETAILS_DRAGON, PUT_DRAGON } from "../../services/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import useForm from "../../Hooks/useForm";

import { Container, Rows } from "./styles";

export default function DragonEdit() {
  const data = useForm();
  const { dragonId } = useParams();

  React.useEffect(() => {
    if (dragonId && data && !data.value) {
      async function loadDetails() {
        const { url, options } = GET_DETAILS_DRAGON(dragonId);
        const response = await fetch(url, options);
        const json = await response.json();
        data.setValue(json);
      }
      loadDetails();
    }
  }, [dragonId, data]);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PUT_DRAGON(dragonId, {
      name: data.value.name,
      type: data.value.type,
    });
    const response = await fetch(url, options);
    if (response.ok) alert("Dragão alterado com sucesso");
  }

  if (data && !data.value) return <div>carregando..</div>;
  return (
    <Container>
      <Rows>
        <h3>Editar - Dragão</h3>
        <form onSubmit={handleSubmit}>
          <span>ID: {data.value.id}</span>
          <span>Criado: {data.value.createdAt}</span>
          <Input
            type="text"
            name="name"
            {...data.value.name}
            value={data.value.name}
            onChange={({ target }) => {
              data.setValue({ ...data.value, name: target.value });
            }}
          />

          <Input
            type="text"
            name="type"
            {...data.value.type}
            value={data.value.type}
            onChange={({ target }) =>
              data.setValue({ ...data.value, type: target.value })
            }
          />
          <Button>Alterar</Button>
          <Link to="/home">
            <Button>← Voltar</Button>
          </Link>
        </form>
      </Rows>
    </Container>
  );
}
