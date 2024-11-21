import { useState } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import {singleRoom} from "./dungeonData.js";
import DrawCharacer from "./DrawCharacter.js";
import DrawMap from "./DrawMap.js";

export default PlayMap = () => {
  let newMap = singleRoom(1)
  let width = newMap.width;
  let height = newMap.height;
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
