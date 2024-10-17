import { testSVG } from "./dungeonData";

export default PlayMap = () => {
  return (
    <>
      <p>Map</p>
      <svg>
      {testSVG()}
      </svg>
    </>
  );
};
