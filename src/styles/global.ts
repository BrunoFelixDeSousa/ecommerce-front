import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --color-header: #000000;
    --color-text: #333333;

    --backgroud-sencodary: #FFF3E3;

  }
    
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
    
  body {
    background-color: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  a, ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
`;
