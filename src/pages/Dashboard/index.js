import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Exit } from "./styles";
import Button from "../../Components/Common/Button";
import { DELETE_DRAGON, GET_DRAGON } from "../../services/api";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PageviewIcon from "@material-ui/icons/Pageview";

export default function LoginForm() {
  const [dados, setDados] = React.useState(null);
  const [id, setId] = React.useState(null);
  const email = window.localStorage.getItem("email");
  const history = useHistory();

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

  function logoutUser() {
    window.localStorage.removeItem("email");
    history.push("/login");
  }

  if (dados === null) return null;
  orderName();
  return (
    <>
      <Exit onClick={logoutUser}>
        <Button>Sair</Button>
      </Exit>
      <Container>
        {email && `Olá ${email} `}
        <Row>
          <h1>Lista de Dragões</h1>
          <ul key={`id${id}`} style={{ background: "white" }}>
            <li>ID</li>
            <li>Nome</li>
            <li>Editar</li>
            <li>Excluir</li>
            <li>Visualizar</li>
          </ul>
          {dados.map(({ id, name }) => (
            <ul key={id}>
              <li>{id}</li>
              <li>{name}</li>
              <li onClick={() => setId(id)} className="hover">
                <Link to={`/dragon/edit/${id}`}>
                  <SettingsIcon />
                </Link>
              </li>
              <li onClick={() => handleDelete(id)} className="hover">
                <DeleteForeverIcon />
              </li>
              <li onClick={() => setId(id)} className="hover">
                <Link to={`/dragon/view/${id}`}>
                  <PageviewIcon />
                </Link>
              </li>
            </ul>
          ))}
          <Link to="/dragon/create">
            <Button>Cadastrar</Button>
          </Link>
        </Row>
      </Container>
    </>
  );
}
