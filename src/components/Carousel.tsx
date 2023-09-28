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

export const Carousel = ({ cars }: Props) => {
  return (
    <>
      <ul>
        {cars?.map((car) => (
          <li key={car.id} className="text-primary">
            <div
              className="flex-col p-16 tap-area"
              style={{
                width: "18rem",
              }}
            >
              <a
                aria-labelledby="card-heading-v90-recharge"
                className="mb-16 stack-4"
                data-tap-area-target
                href="#v90-recharge"
              >
                <p className="text-secondary micro font-medium uppercase">
                  Estte
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
                  alt="A electric Volvo V90 Recharge standing still on grey floor in a studio."
                  src={car.imageUrl}
                />
              </a>
              <div className="flex flex-wrap gap-x-24 justify-center">
                <a
                  aria-labelledby="card-heading-v90-recharge card-action-v90-learn"
                  className="button-text"
                  href="#learn"
                  id="card-action-v90-learn"
                >
                  Learn
                </a>
                <a
                  aria-labelledby="card-heading-v90-recharge card-action-v90-shop"
                  className="button-text"
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
      <IconButton
        aria-label="Close"
        color="neutral"
        iconName="navigation-chevronback"
        onClick={function noRefCheck() {}}
        variant="outlined"
      />
      <IconButton
        aria-label="Close"
        color="neutral"
        iconName="navigation-chevronforward"
        onClick={function noRefCheck() {}}
        variant="outlined"
      />
    </>
  );
};
