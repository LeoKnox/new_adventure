import { useState, useEffect, useCallback } from "react";
import { demonSVG, floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import { changeMob, changePlayer, playerPos, mobPos } from "./playData.js";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

export default DrawMap = ({ height = 10, width = 10 }) => {
  const [charPos, setCharPos] = useState(playerPos);
  const [evilPos, setEvilPos] = useState(mobPos);
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

  const findPos = (x = 0, y = 0) => {
    return (charPos[`${x}:${y}`] || evilPos[`${x}:${y}`]) ?? false;
  };
  const topLayer = useCallback(
    (rows = height, columns = width) => {
      console.log("top layer");
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

  const changeMap = (x, y) => {
    setCharPos(changePlayer(charPos, x, y));
    setEvilPos(changeMob(evilPos, x, y, charPos));
  };

  return (
    <div>
      {Object.keys(charPos)}
      <br />
      {evilPos[0]}
      <label>
        <button onClick={() => changeMap(0, 1)}>right</button>
      </label>
      <label>
        <button onClick={() => changeMap(0, -1)}>left</button>
      </label>
      <label>
        <button onClick={() => changeMap(1, 0)}>down</button>
      </label>
      <label>
        <button onClick={() => changeMap(-1, 0)}>up</button>
      </label>
      <label>
        <button onClick={() => changeMap(1, 1)}>mob</button>
      </label>
      <div className="outer">
        <table className="tableTwo">{topLayer()}</table>
        <table className="tableOne">{bottomLayer()}</table>
      </div>
    </div>
  );
};
