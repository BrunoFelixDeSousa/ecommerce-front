import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

export function ProductDetails() {
  const { id } = useParams();

  return (
    <>
      <Header />
      <div>
        <h2>Product Details</h2>
        <p>Product ID: {id}</p>
        {/* Exiba os detalhes do produto aqui */}
      </div>
    </>
  );
}

