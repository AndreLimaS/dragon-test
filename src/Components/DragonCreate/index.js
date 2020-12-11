import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import useForm from "../../Hooks/useForm";
import { POST_DRAGON } from "../../services/api";
import { Container, Form } from "./styles";

export default function DragonCreate() {
  const name = useForm();
  const type = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = POST_DRAGON({
      name: name.value,
      type: type.value,
    });
    const response = await fetch(url, options);
    if (response.ok) {
      name.setValue("");
      type.setValue("");
    }
  }

  return (
    <Container>
      <h1>Cadastre um Dragao</h1>
      <Form>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" type="text" name="name" {...name} />
          <Input label="Tipo" type="text" name="type" {...type} />
          <Button>Cadastrar</Button>
        </form>
        <Link to="/home">
          <Button>Voltar</Button>
        </Link>
      </Form>
    </Container>
  );
}
