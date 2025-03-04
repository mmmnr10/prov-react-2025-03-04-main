// 3. Buttons (3p)
// Skapa två komponenter: Button och ButtonWithChildren.
// Button ska ha en prop `title` som anger rubriken på knappen.
// ButtonWithChildren ska använda children för att visa texten i knappen.
// Båda komponenter ska ha en prop `onClick` som kallas när man klickar på knappen.
// Använd båda komponenterna på sidan. När man klickar på Button-knappen ska
// det skrivas ut "klick på Button" på sidan.
// När man klickar på ButtonWithChildren-knappen
// ska det skrivas ut "klick på ButtonWithChildren".

import React from "react";

const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

const ButtonWithChildren = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

const Question3 = () => {
  const handleButtonClick = () => {
    alert("klicka på Button");
  };

  const handleButtonWithChildrenClick = () => {
    alert("klicka på ButtonWithChildren");
  };

  return (
    <div>
      <Button title="Button" onClick={handleButtonClick} />
      <ButtonWithChildren onClick={handleButtonWithChildrenClick}>
        ButtonWithChildren
      </ButtonWithChildren>
    </div>
  );
};

export default Question3;
