import { floorSVG, wallSVG } from "./svgData";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let x = 10;
  return (
    <>
      <p>Map</p>
      <DrawMap />
    </>
  );
};
