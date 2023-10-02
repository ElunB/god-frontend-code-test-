import React, { useEffect, useState } from "react";
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

const itemsPerSlide = 4;

export const Carousel = ({ cars }: Props) => {
  const [currentNextSlide, setCurrentNextSlide] = useState(4);
  const [currentFirst, setCurrentFirst] = useState(0);

  const nextCard = () => {
    if (currentNextSlide < cars.length) {
      setCurrentNextSlide((current) => current + 1); // + 4 max
      setCurrentFirst((current) => current + 1);
    }
  };

  const previousCard = () => {
    if (currentFirst > 0) {
      setCurrentNextSlide((current) => current - 1); // Om det inte är 0
      setCurrentFirst((current) => current - 1); // Om det inte 0
    }
  };

  return (
    <div className="container flex-col">
      <ul>
        {cars?.map((car, index) => (
          <li key={car.id} className="carousel-item text-primary">
            <div
              className={
                index < currentNextSlide && index >= currentFirst
                  ? "flex-col p-16 tap-area visible"
                  : "flex-col p-16 tap-area hidden"
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
          aria-disabled={currentNextSlide >= cars.length}
        />
      </div>
    </div>
  );
};
