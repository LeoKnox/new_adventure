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
  const addCharacter = (row = "1", column = 0) => {
    // id="0:0"
    //document.getElementById([0, 0]).innerHTML = <DrawCharacter />;
    let temp = [...test];
    let newtemp = [...test[row]];
    newtemp[column] = floorSVG();
    temp[row] = newtemp;
    setTest(temp);
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
