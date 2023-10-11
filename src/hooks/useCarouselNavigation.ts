import { useState, useEffect } from "react";
import { ProductData } from "../../public/types/Product";

export default function useCarouselNavigation(products: ProductData[]) {
  const [currentNext, setcurrentNext] = useState(1);
  const [currentFirst, setCurrentFirst] = useState(0);

  useEffect(() => {
    const itemsPerSlide = window.innerWidth > 768 ? 4 : 1;
    setcurrentNext(itemsPerSlide);
  }, []);

  const nextCard = () => {
    if (currentNext < products.length) {
      setcurrentNext((currentNext) => currentNext + 1);
      setCurrentFirst((currentFirst) => currentFirst + 1);
    }
  };

  const previousCard = () => {
    if (currentFirst > 0) {
      setcurrentNext((currentNext) => currentNext - 1);
      setCurrentFirst((currentFirst) => currentFirst - 1);
    }
  };

  return {
    currentFirst,
    currentNext,
    nextCard,
    previousCard,
  };
}
