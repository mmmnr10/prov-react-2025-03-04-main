// 1. Popup (3p)
//
// Skapa en knapp "visa" på sidan. När man klickar på knappen ska en popup visas.
// Popup:en visar rubriken "En popup" och en stängknapp i en ruta.
// När man klickar på stängknappen ska popupen tas bort.

import React, { useState } from "react";

const Question1 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleShowPopup}>Visa</button>
      {showPopup && (
        <div>
          <h3>En pop Up knapp</h3>
          <button onClick={handleClosePopup}>Här finns en stäng knapp</button>
        </div>
      )}
    </div>
  );
};

export default Question1;
