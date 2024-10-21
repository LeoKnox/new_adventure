import { floorSVG, wallSVG } from "./svgData";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let width = 10;
  let height = 8
  return (
    <>
      <p>Map</p>
      <table>
        <DrawMap width={width} height={height} />
      </table>
    </>
  );
};
