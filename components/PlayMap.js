import { floorSVG, wallSVG } from "./svgData";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let width = 10;
  let height = 6;
  const addCharacter = () => {
    // id="0:0"
    console.log("added character");
  };
  return (
    <>
      <button onClick={addCharacter}>character</button>
      <table>
        <DrawMap width={width} height={height} />
      </table>
    </>
  );
};
