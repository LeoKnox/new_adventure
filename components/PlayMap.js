import { floorSVG, wallSVG } from "./svgData";
import DrawCharacer from "./DrawCharacter.js";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let width = 10;
  let height = 6;
  const addCharacter = () => {
    // id="0:0"
    document.getElementById("0:0").innerHTML = { DrawCharacter };
    console.log("added character");
  };
  return (
    <>
      <button onClick={addCharacter}>character{wallSVG()}</button>
      <table>
        <DrawMap width={width} height={height} />
      </table>
    </>
  );
};
