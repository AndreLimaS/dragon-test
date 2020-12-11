import React from "react";
import Button from "../../Components/Button";
import useForm from "../../Hooks/useForm";
import Input from "../../Components/Input";

import { Container } from "./styles";
import { listusers } from "../../services/apiUser";
import background from "../../Assets/login.jpg";

export default function LoginForm({ history }) {
  const username = useForm("email");
  const password = useForm();
  const [dados, setDados] = React.useState("");

  React.useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const response = await listusers();
    setDados(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      username.value === dados[0].email &&
      Number(password.value) === dados[0].password
    )
      history.push("/home");
  }

  return (
    <Container>
      <img src={background} alt="" />
      <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <Input label="E-mail" type="email" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button>Entrar</Button>
        </form>
      </section>
    </Container>
  );
}
