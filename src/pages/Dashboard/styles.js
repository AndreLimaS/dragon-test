import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  margin: 3rem;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
  .hover:hover {
    color: white;
    transition: 0.3s;
    transform: scale(1.2);
  }
`;

export const Row = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    background: rgba(138, 95, 234, 0.24);
    margin-bottom: 0.5rem;
    border-radius: 5px;
    padding: 10px;
  }
`;
