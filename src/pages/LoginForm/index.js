import React from "react";
import Button from "../../Components/Button";

import { Container } from "./styles";
import { listusers } from "../../services/apiUser";
import background from "../../Assets/login.jpg";

export default function LoginForm({ history }) {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    if (username === dados[0].email && Number(password) === dados[0].password) {
      history.push("/criar");
    }
  }

  return (
    <Container>
      <img src={background} alt="" />
      <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={username}
            id="email"
            onChange={({ target }) => setUserName(target.value)}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button>Entrar</Button>
        </form>
      </section>
    </Container>
  );
}
