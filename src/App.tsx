import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { GlobalStyle, Main } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <Categories />
      </Main>

      <GlobalStyle />
    </>
  );
}
