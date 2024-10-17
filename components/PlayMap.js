import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
  return (
    <>
      <p>Map</p>
      {floorSVG()}
      {wallSVG()}
    </>
  );
};
