import React from "react";
import { Container, Row } from "./styles";

import dragon_img from "../../Assets/dragon.svg";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export default function LoginForm() {
  return (
    <Container>
      <Row>
        <ul>
          <img src={dragon_img} alt="" />
          <li>ID: 1</li>
          <li>Nome: Dragon</li>
          <EditIcon />
          <DeleteForeverIcon />
        </ul>
      </Row>
    </Container>
  );
}
