import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  min-width: 40vw;
  height: 90vh;
`;

export const Rows = styled.div`
  height: 20rem;
  background-color: #e3d9fa;
  padding: 2rem;
  margin: 4rem;
  border-radius: 5px;
  span {
    display: block;
    padding: 0.5rem 0 1rem 0;
  }
`;
