import React from "react";
import { Container } from "./styles";

import { ReactComponent as Logo } from "../../Assets/dragon.svg";

export default function Header() {
  return (
    <Container>
      <header>
        <nav>
          <Logo className="logo" />
          <span>Dragon</span>
        </nav>
      </header>
    </Container>
  );
}
