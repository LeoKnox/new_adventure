import { useState, useEffect, useCallback } from "react";
import { demonSVG, floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import { singleRoom } from "./dungeonData.js";
import { change, mapPos, charPos, mobPos } from "./playData.js";
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
  console.log("T");
  console.log(mapPos);
  const [charPos, setCharPos] = useState({ ...charPos, ...mapPos });
  //const [charPos, setCharPos] = useState(mapPos);
  const findPos = (x = 0, y = 0) => {
    //console.log("find pos");
    return charPos[`${x}:${y}`] ?? false;
  };
  const topLayer = useCallback(
    (rows = height, columns = width, defaultValue = warriorSVG()) => {
      //console.log("bottom layer");
      const blTemp = Array.from({ length: rows }, (t, i) => (
        <tr>
          {Array.from({ length: columns }, (u, j) => (
            <td>{findPos(i, j)}</td>
          ))}
        </tr>
      ));
      return blTemp;
    },
    [charPos]
  );

  return (
    <div>
      <label>
        <button onClick={() => setCharPos(change(charPos, 0, 1))}>right</button>
      </label>
      <label>
        <button onClick={() => setCharPos(change(charPos, 0, -1))}>left</button>
      </label>
      <label>
        <button onClick={() => setCharPos(change(charPos, 1, 0))}>down</button>
      </label>
      <label>
        <button onClick={() => setCharPos(change(charPos, -1, 0))}>up</button>
      </label>
      <label>
        <button onClick={() => setCharPos(change(charPos, 1, 1))}>mob</button>
      </label>
      <div className="outer">
        <table className="tableTwo">{topLayer()}</table>
        <table className="tableOne">{bottomLayer()}</table>
      </div>
    </div>
  );
};
