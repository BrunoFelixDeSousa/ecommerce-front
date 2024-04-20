import { Banner } from "../../components/Banner";
import { Categories } from "../../components/Categories";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
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
      <Info />
      <Footer />
    </>
  );
}
