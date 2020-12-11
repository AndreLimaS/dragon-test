import React from "react";
import { Container, Row } from "./styles";
import Button from "../../Components/Button";
import DragonList from "../DragonList";
import { DELETE_DRAGON, GET_DRAGON } from "../../services/api";

import dragon_img from "../../Assets/dragon.svg";
import SettingsIcon from "@material-ui/icons/Settings";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [dados, setDados] = React.useState(null);
  const [id, setId] = React.useState(null);

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
      <Row>
        <h1>Lista de Dragoes</h1>
        {dados.map(({ id, name }) => (
          <ul key={id}>
            <img src={dragon_img} alt="" />
            <li>ID: {id}</li>
            <li>Nome: {name}</li>
            <li className="hover" onClick={() => setId(id)}>
              <SettingsIcon />
            </li>
            <li onClick={() => handleDelete(id)} className="hover">
              <DeleteForeverIcon />
            </li>
          </ul>
        ))}
        <Link to="/dragon-create">
          <Button>Cadastrar</Button>
        </Link>
      </Row>
      {id && <DragonList id={id} />}
    </Container>
  );
}
