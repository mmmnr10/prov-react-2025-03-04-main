// 5. Custom hook (3p)
// Flytta all logik som hanterar width och height in i en
// custom hook: useWindowSize

// useWindowSize ska returnera ett objekt med width, height och isMobile
// isMobile är true om fönstret är mindre än 600px bred.
import useWindowSize from "@/hooks/useWindowSize";
export default function Question5() {
  const { width, height, isMobile } = useWindowSize();

  return (
    <div>
      <p>Fönsterbredd: {width}px</p>
      <p>Fönsterhöjd: {height}px</p>
      <p>Mobile: {isMobile ? "True" : "False"}</p>
    </div>
  );
}
