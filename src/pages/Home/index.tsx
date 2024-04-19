import { Banner } from "../../components/Banner";
import { Categories } from "../../components/Categories";
import { Header } from "../../components/Header";
import { Products } from "../../components/Products";
import { Main } from "../../styles/global";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main>
        <Categories />
        <Products />
      </Main>
    </>
  );
}
