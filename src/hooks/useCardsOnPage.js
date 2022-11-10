import { useEffect, useState } from "react";

export default function useCardsOnPage() {
  const [cardsOnPage, setCardsOnPage] = useState(1);
  useEffect(() => {
    let timeout;
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        switch (true) {
          case width < 768:
            setCardsOnPage(1);
            break;
          case width < 1024:
            setCardsOnPage(2);
            break;
          default:
            setCardsOnPage(3);
        }
      }, 0);
    });
  }, []);

  return cardsOnPage;
}
