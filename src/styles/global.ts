import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #FFFFFF;
    --color-header: #000000;
    --color-text: #333333;
    --color-text-2: #3A3A3A;
    --color-text-3: #898989;
    --color-text-4: #B0B0B0;
    --color-text-5: #B88E2F;
    --color-circle-1: #E97171;
    --color-circle-2: #2EC1AC;

    --backgroud-sencodary: #FFF3E3;
    --backgroud-info: #FAF3EA;
    --backgroud-card: #F4F5F7

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
