import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel";

export type ProductData = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
  alt: string;
};

export const ProductContainer = () => {
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
  return (
    <>
      <Carousel products={products} />
    </>
  );
};
