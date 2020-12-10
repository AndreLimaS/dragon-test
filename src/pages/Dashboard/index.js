import React from "react";
import { Container, Row } from "./styles";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";
import { DELETE_DRAGON, GET_DRAGON } from "../../services/api";

import dragon_img from "../../Assets/dragon.svg";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function LoginForm() {
  const [dados, setDados] = React.useState(null);
  const [id, setId] = React.useState(null);

  React.useEffect(() => {
    async function loadDragon() {
      const { url, options } = GET_DRAGON();
      const response = await fetch(url, options);
      const json = await response.json();
      setDados(json);
    }
    loadDragon();
  }, []);

  function handleDelete(item) {
    const { url, options } = DELETE_DRAGON(item);
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }

  if (dados === null) return null;
  return (
    <Container>
      <Row>
        {dados.map(({ id, name }) => (
          <ul key={id}>
            <img src={dragon_img} alt="" />
            <li>ID: {id}</li>
            <li>Nome: {name}</li>
            <li className="hover" onClick={() => setId(id)}>
              <EditIcon />
            </li>
            <li onClick={() => handleDelete(id)} className="hover">
              <DeleteForeverIcon />
            </li>
          </ul>
        ))}
      </Row>
      <Button>Cadastrar</Button>
      {id && <Modal id={id} />}
    </Container>
  );
}
