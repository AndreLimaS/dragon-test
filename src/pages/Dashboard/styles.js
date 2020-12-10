import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: rgba(138, 95, 234, 0.24);
  border-radius: 5px;
  margin: 3rem;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Row = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
    padding: 10px;
  }

  ul:hover {
    background: #bea0ff;
    transition: 0.2s;
  }
`;
