import { useState } from "react";
import { floorSVG, wallSVG } from "./svgData";
import DrawCharacer from "./DrawCharacter.js";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let width = 10;
  let height = 6;
  const [test, setTest] = useState([
    [wallSVG(), wallSVG()],
    [wallSVG(), wallSVG()],
  ]);
  const [x, setx] = useState([
    ["x", "y"],
    ["a", "b"],
  ]);
  const addCharacter = () => {
    // id="0:0"
    //document.getElementById([0, 0]).innerHTML = <DrawCharacter />;
    let temp = [...test];
    let newtemp = [...temp];
    newtemp[1][1] = "floorSVG()";
    setTest(newtemp);
    console.log(newtemp);
  };
  return (
    <>
      <button onClick={addCharacter}>character</button>
      {test}
      <table>
        <DrawMap width={width} height={height} />
      </table>
    </>
  );
};
