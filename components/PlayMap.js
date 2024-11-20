import { useState } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawCharacer from "./DrawCharacter.js";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let width = 10;
  let height = 6;
  const [test, setTest] = useState([
    [wallSVG(), wallSVG()],
    [wallSVG(), wallSVG()],
  ]);
  const [x, setx] = useState(1);
  const [y, sety] = useState(1);
  
  return (
    <>
      <table>
        <DrawMap
          width={width}
          height={height}
          x={x}
          y={y}
          sety={sety}
          setx={setx}
        />
      </table>
    </>
  );
};
