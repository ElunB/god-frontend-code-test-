import React, { useEffect, useState } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { Carousel } from "./Carousel";

type CarData = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

export const Container = () => {
  const [cars, setCars] = useState<CarData[]>([]);

  //Kolla upp varför man ska göra såhär istället för att fetcha direkt i useeffect
  const fetchData = async () => {
    try {
      const response = await fetch("./api/cars.json", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setCars([...data]);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Carousel cars={cars} />
    </>
  );
};
