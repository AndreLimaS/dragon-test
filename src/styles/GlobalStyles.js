import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 95vh;
    padding-top: 1rem;
  }
  body {
    font: 18px 'Roboto', sans-serif;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  button, input {
  display: block;
  font-size: 1rem;
  color: #333;
}
  a{
    text-decoration: none;
    color: #333;
  }

`;
