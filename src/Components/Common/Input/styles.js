import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
  input {
    border: 1px solid #eee;
    display: block;
    max-width: 50vw;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.3s;
    margin-bottom: 1rem;
    width: 100%;
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

  .error {
    color: #f31;
    font-size: 0.875rem;
  }
`;
