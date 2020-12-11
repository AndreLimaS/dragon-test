import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  img {
    display: block;
    width: 50vw;
    height: 100vh;
    object-fit: cover;
  }

  section {
    max-width: 35rem;
    padding: 3rem 1rem 1rem 1rem;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    justify-content: center;
    img {
      display: none;
    }
    section {
      justify-content: center;
    }
  }
`;
