import { useEffect, useState } from "react";
import { ProductData } from "../../public/types/Product";

export default function useProducts() {
  const [products, setProducts] = useState<ProductData[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("./api/cars.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setProducts([...data]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    products,
  };
}
