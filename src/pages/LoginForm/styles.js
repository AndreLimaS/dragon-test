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

  input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.3s;
    margin-bottom: 1rem;
  }

  input:focus,
  input:hover {
    outline: none;
    border-color: #4e00fb;
    background: white;
    box-shadow: 0 0 0 3px #cbb4ff;
  }

  label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: 0.5rem;
    margin-top: 2rem;
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
