import React, { useEffect, useState, useRef } from "react";
import { IconButton } from "@volvo-cars/react-icons";
// import { CaraouselItem } from "./Carousel";

type CarData = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

type Props = {
  cars: CarData[];
};

export const Carousel = ({ cars }: Props) => {
  const [currentNext, setcurrentNext] = useState(1); // Måste vara 1 i mobil
  const [currentFirst, setCurrentFirst] = useState(0);
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    const itemsPerSlide = window.innerWidth > 768 ? 4 : 1; // Lägg till fler storlekar
    console.log("itemsPerSlide", itemsPerSlide);
    setcurrentNext(itemsPerSlide);
  }, []);

  const nextCard = () => {
    if (currentNext < cars.length) {
      setcurrentNext((currentNext) => currentNext + 1); // + 4 max
      setCurrentFirst((currentFirst) => currentFirst + 1);
    }
  };

  const previousCard = () => {
    if (currentFirst > 0) {
      setcurrentNext((currentNext) => currentNext - 1); // Om det inte är 0
      setCurrentFirst((currentFirst) => currentFirst - 1); // Om det inte 0
    }
  };

  const handleTouchStart = (e: any) => {
    console.log("handle touchStart");

    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    console.log("handle touchMove");
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
      console.log("vänster svipe");
      // Vänster svep, gå till nästa bild
      nextCard();
    } else if (differenceX < -3) {
      console.log("höger svipe");
      // Höger svep, gå till föregående bild
      previousCard();
    }

    setStartX(null);
  };

  return (
    <div className="container flex-col">
      <ul
        role="list"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {cars?.map((car, index) => (
          <li
            key={car.id}
            className="carousel-item text-primary"
            style={{
              transform: `translate(-${currentFirst * 100}%)`,
              transition: `transform 0.3s ease`,
            }}
          >
            <div
              className={
                index < currentNext && index >= currentFirst
                  ? "flex-col tap-area active" // Gör inget just nu
                  : "flex-col tap-area"
              }
            >
              <a
                aria-labelledby="card-heading-v90-recharge"
                className="mb-16 stack-4"
                data-tap-area-target
                href="#v90-recharge"
              >
                <p className="text-secondary micro font-medium uppercase">
                  {car.bodyType}
                </p>
                <h3
                  className="body-16 text-secondary"
                  id="card-heading-v90-recharge"
                >
                  <span className="font-medium text-primary">
                    {car.modelName}
                  </span>{" "}
                  Plug-in Hybrid
                </h3>
                <img
                  alt="A electric Volvo V90 Recharge standing still on grey floor in a studio." // Vad bör det vara för alt-text?
                  src={car.imageUrl}
                />
              </a>
              <div className="flex flex-wrap gap-x-24 justify-center">
                <a
                  aria-labelledby="card-heading-v90-recharge card-action-v90-learn"
                  className="button-text text-accent-blue"
                  href="#learn"
                  id="card-action-v90-learn"
                >
                  Learn
                </a>
                <a
                  aria-labelledby="card-heading-v90-recharge card-action-v90-shop"
                  className="button-text text-accent-blue"
                  href="#shop"
                  id="card-action-v90-shop"
                >
                  Shop
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex-row self-end gap-8 p-16">
        <IconButton
          aria-label="Close"
          color="neutral"
          iconName="navigation-chevronback"
          onClick={() => previousCard()}
          variant="outlined"
          aria-disabled={currentFirst == 0}
        />
        <IconButton
          aria-label="Close"
          color="neutral"
          iconName="navigation-chevronforward"
          onClick={() => nextCard()}
          variant="outlined"
          aria-disabled={currentNext >= cars.length}
        />
      </div>
    </div>
  );
};
