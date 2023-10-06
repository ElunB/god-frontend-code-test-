import React, { useEffect, useState } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { CarouselItem } from "./CarouselItem";
import { ProductData } from "./ProductContainer";
import useSwipe from "../hooks/useSwipe";

type Props = {
  products: ProductData[];
};

export const Carousel = ({ products }: Props) => {
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

  const { onTouchStart, onTouchMove } = useSwipe({
    nextAction: nextCard,
    previousAction: previousCard,
  });

  return (
    <div className="container">
      <section aria-label="product carousel" className="flex-col mt-24">
        <ul role="list" onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
          {products?.map((product, index) => (
            <CarouselItem
              item={product}
              currentFirst={currentFirst}
              currentNext={currentNext}
              index={index}
              key={product.id}
            />
          ))}
        </ul>
        <div className="buttonWrapper flex-row self-end gap-8 mt-24 mr-16">
          <IconButton
            aria-label="Previous product"
            color="neutral"
            iconName="navigation-chevronback"
            onClick={() => previousCard()}
            variant="outlined"
            aria-disabled={currentFirst == 0}
          />
          <IconButton
            aria-label="Next product"
            color="neutral"
            iconName="navigation-chevronforward"
            onClick={() => nextCard()}
            variant="outlined"
            aria-disabled={currentNext >= products.length}
          />
        </div>
        <div className="dotList self-center m-24">
          {products?.map((product, index) => {
            return (
              <div
                key={product.id}
                aria-current={index == currentFirst ? "true" : "false"}
                className={index == currentFirst ? "dot dot-filled" : "dot"}
              ></div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
