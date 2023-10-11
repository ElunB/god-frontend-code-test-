import React, { useEffect, useState } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { CarouselItem } from "./CarouselItem";
import useSwipe from "../hooks/useSwipe";
import useCarouselNavigation from "../hooks/useCarouselNavigation";
import { ProductData } from "../../public/types/Product";

type Props = {
  products: ProductData[];
};

export const Carousel = ({ products }: Props) => {
  const { nextCard, previousCard, currentFirst, currentNext } =
    useCarouselNavigation(products);

  const { onTouchStart, onTouchMove } = useSwipe({
    nextAction: nextCard,
    previousAction: previousCard,
  });

  return (
    <section aria-label="product carousel" className="flex-col mt-24">
      <ul role="list" onTouchStart={onTouchStart} onTouchMove={onTouchMove}>
        {products?.map((product) => (
          <CarouselItem
            item={product}
            currentFirst={currentFirst}
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
          aria-disabled={currentNext >= products?.length}
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
  );
};
