import { Carousel } from "../src/components/Carousel";
import useProducts from "../src/hooks/useProducts";

function Home() {
  const { products } = useProducts();

  return (
    <div className="container">
      <Carousel products={products} />
    </div>
  );
}

export default Home;
