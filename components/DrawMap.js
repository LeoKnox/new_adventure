import { useState, useEffect, useCallback, cloneElement } from "react";
import { demonSVG, floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import { singleRoom } from "./dungeonData.js";
import {
  charLocation,
  updateMonster,
  mobData,
  mapData,
  move,
} from "./playData.js";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

export default DrawMap = ({
  height = 10,
  width = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  const currMap = new Array(singleRoom().x)
    .fill()
    .map(() => <tr>{Array(singleRoom().y).fill(<td>{floorSVG()}</td>)}</tr>);

  const bottomLayer = useCallback(
    (rows = height, columns = width, defaultValue = floorSVG()) => {
      console.log("bottom layer");
      const blTemp = Array.from({ length: rows }, () => (
        <tr>
          {Array.from({ length: columns }, () => (
            <td>{defaultValue}</td>
          ))}
        </tr>
      ));
      return blTemp;
    },
    []
  );
  //const [charPos, setCharPos] = useState({ x: 1, y: 1 });
  const [charPos, setCharPos] = useState({ [`1:1`]: true });
  const findPos = (x = 0, y = 0) => {
    console.log("find pos");
    let temp = [{ [`${x}:${y}`]: true }];
    //console.log(temp);
    //console.log(charPos);
    let tempKey = x + ":" + y;
    charPos[0] ? console.log("red") : console.log("blue");
    if (charPos[0][temp]) {
      console.log(charPos[0][temp]);
      return charPos[0][temp];
    }
    //return tempKey == charPos.x + ":" + charPos.y ? true : false;
  };
  const topLayer = useCallback(
    (rows = height, columns = width, defaultValue = demonSVG()) => {
      console.log("bottom layer");
      const blTemp = Array.from({ length: rows }, (t, i) => (
        <tr>
          {Array.from({ length: columns }, (u, j) =>
            findPos(i, j) ? <td>{defaultValue}</td> : <td></td>
          )}
        </tr>
      ));
      return blTemp;
    },
    [charPos]
  );

  return (
    <div>
      <label>
        <button onClick={() => setCharPos({ x: charPos.x, y: charPos.y + 1 })}>
          right
        </button>
      </label>
      <label>
        <button onClick={() => setCharPos({ x: charPos.x, y: charPos.y - 1 })}>
          left
        </button>
      </label>
      <label>
        <button onClick={() => setCharPos({ x: charPos.x + 1, y: charPos.y })}>
          down
        </button>
      </label>
      <label>
        <button onClick={() => setCharPos({ x: charPos.x - 1, y: charPos.y })}>
          up
        </button>
      </label>
      <label>
        <button onClick={() => setCharPos({ x: charPos.x + 1, y: charPos.y })}>
          mob
        </button>
      </label>
      <div className="outer">
        <table className="tableTwo">{topLayer()}</table>
        <table className="tableOne">{bottomLayer()}</table>
      </div>
    </div>
  );
};
