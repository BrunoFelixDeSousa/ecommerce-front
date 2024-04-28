import { BannerShop } from "../../components/BannerShop";
import { Filter } from "../../components/Filter";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";
import { Products } from "../../components/Products";

export function Shop() {
  return (
    <>
      <Header />
      <BannerShop />
      <Filter />
      <Products buttonTypes="pagination" />
      <Info />
      <Footer />
    </>
  );
}
