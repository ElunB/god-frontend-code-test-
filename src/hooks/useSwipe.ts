import { useState } from "react";

type Props = {
  nextAction: () => void;
  previousAction: () => void;
};

export default function useSwipe({ nextAction, previousAction }: Props) {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e: any) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    if (!startX) return;
    // hämtar den aktuella horisontella positionen för beröringen
    const currentX = e.touches[0].clientX;
    //beräknar skillnaden i X-koordinater mellan startpunkten och den aktuella positionen.
    //Skillnaden representerar hur långt användaren har svept horisontellt från startpunkten.
    const differenceX = startX - currentX;

    //Avgör om användaren har svept tillräckligt långt åt vänster eller höger för att trigga en navigationsåtgärd.
    if (differenceX > 3) {
      console.log("vänster");
      // Vänster svep
      nextAction();
    } else if (differenceX < -3) {
      console.log("höger");
      // Höger svep,
      previousAction();
    }

    setStartX(null);
  };
  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
  };
}
