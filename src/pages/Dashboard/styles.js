import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  margin: 5rem;

  img {
    width: 20px;
    height: 20px;
  }
  .hover:hover {
    color: white;
    transition: 0.3s;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 40rem) {
    margin: 2rem 0.5rem 0 0.5rem;
  }
`;

export const Row = styled.div`
  margin-top: 1rem;
  ul {
    display: flex;
    justify-content: space-around;
    background: rgba(138, 95, 234, 0.24);
    border-radius: 5px;
    padding: 10px;
    margin: 1rem 0 1rem 0;
  }
`;
