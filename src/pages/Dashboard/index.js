import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Common/Button";
import { DELETE_DRAGON, GET_DRAGON } from "../../services/api";

import SettingsIcon from "@material-ui/icons/Settings";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Container, Row } from "./styles";

export default function LoginForm() {
  const [dados, setDados] = React.useState(null);
  const [id, setId] = React.useState(null);
  const email = window.localStorage.getItem("email");

  React.useEffect(() => {
    loadDragon();
  }, []);

  async function loadDragon() {
    const { url, options } = GET_DRAGON();
    const response = await fetch(url, options);
    const json = await response.json();
    setDados(json);
  }

  async function handleDelete(item) {
    const { url, options } = DELETE_DRAGON(item);
    const response = await fetch(url, options);
    if (response.ok) loadDragon();
  }

  function orderName() {
    dados.sort(function (x, y) {
      let a = x.name.toUpperCase(),
        b = y.name.toUpperCase();
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }

  if (dados === null) return null;
  orderName();
  return (
    <Container>
      {email && `Olá ${email} `}
      <Row>
        <h1>Lista de Dragoes</h1>
        <ul key={`id${id}`} style={{ background: "white" }}>
          <li>ID</li>
          <li>Nome</li>
          <li>Editar</li>
          <li>Excluir</li>
        </ul>
        {dados.map(({ id, name }) => (
          <ul key={id}>
            <li>{id}</li>
            <li>{name}</li>
            <li className="hover" onClick={() => setId(id)}>
              <Link to={`/dragon/edit/${id}`}>
                <SettingsIcon />
              </Link>
            </li>
            <li onClick={() => handleDelete(id)} className="hover">
              <DeleteForeverIcon />
            </li>
          </ul>
        ))}
        <Link to="/dragon/create">
          <Button>Cadastrar</Button>
        </Link>
      </Row>
    </Container>
  );
}
