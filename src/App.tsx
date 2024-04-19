import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}
