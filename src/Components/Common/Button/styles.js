import styled from "styled-components";

export const Container = styled.div`
  button {
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #8a5fea;
    color: #fdfdfd;
    min-width: 8rem;
    max-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;
    margin-bottom: 1rem;
  }

  button:hover,
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px #cbb4ff, 0 0 0 4px #4e00fb;
  }
`;
