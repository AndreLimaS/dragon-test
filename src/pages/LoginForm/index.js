import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { listusers } from "../../services/apiUser";

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
      <section>
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUserName(target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />

          <button>Entrar</button>
        </form>

        <Link to="/criar">Cadastro</Link>
      </section>
    </Container>
  );
}
