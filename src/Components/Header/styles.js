import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  top: 0px;
  padding: 0 1rem;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    max-width: 50rem;
    margin: 0 auto;
  }

  .logo {
    padding: 0.5rem 0;
    width: 60px;
  }
`;
