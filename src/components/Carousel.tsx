import React, { useEffect, useState, useRef } from "react";
import { IconButton } from "@volvo-cars/react-icons";
import { CarouselItem } from "./CarouselItem";
import { ProductData } from "./ProductContainer";

type Props = {
  products: ProductData[];
};

export const Carousel = ({ products }: Props) => {
  const [currentNext, setcurrentNext] = useState(1);
  const [currentFirst, setCurrentFirst] = useState(0);
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    const itemsPerSlide = window.innerWidth > 768 ? 4 : 1; // Lägg till fler storlekar
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

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    // Ändra any
    if (!startX) return;
    // hämtar vi den aktuella horisontella positionen för beröringen
    const currentX = e.touches[0].clientX;
    //beräknar skillnaden i X-koordinater mellan startpunkten och den aktuella positionen.
    //Skillnaden representerar hur långt användaren har svept horisontellt från startpunkten.
    const differenceX = startX - currentX;

    //Avgör om användaren har svept tillräckligt långt åt vänster eller höger för att trigga en navigationsåtgärd.
    if (differenceX > 3) {
      // Vad är rätt siffra här?
      // Vänster svep, gå till nästa bild
      nextCard();
    } else if (differenceX < -3) {
      // Höger svep, gå till föregående bild
      previousCard();
    }

    setStartX(null);
  };

  return (
    <div className="container flex-col mt-24">
      <section aria-labelledby="carouselheading">
        <h3 id="carouselheading" className="visuallyhidden">
          Our car models
        </h3>
        <ul
          role="list"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {products?.map((product) => (
            <CarouselItem
              item={product}
              currentFirst={currentFirst}
              key={product.id}
            />
          ))}
        </ul>
      </section>
      <div className="buttonWrapper flex-row self-end gap-8 mt-24 mr-16">
        <IconButton
          aria-label="Previous car"
          color="neutral"
          iconName="navigation-chevronback"
          onClick={() => previousCard()}
          variant="outlined"
          aria-disabled={currentFirst == 0}
        />
        <IconButton
          aria-label="Next car"
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
              className={index == currentFirst ? "dot dot-filled" : "dot"}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
