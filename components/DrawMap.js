import { useState, useEffect, useCallback } from "react";
import { demonSVG, floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import { changeMob, changePlayer, playerPos, mobPos } from "./playData.js";
import { singleRoom } from "./dungeonData.js";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

export default DrawMap = ({ height = 10, width = 10 }) => {
  const [charPos, setCharPos] = useState(playerPos);

  const [currRoom, setCurrRoom] = useState(1);
  height = singleRoom(currRoom).height;
  width = singleRoom(currRoom).width;
  const [evilPos, setEvilPos] = useState(singleRoom(currRoom).monsters);
  const charFunc = { 0: warriorSVG(), 1: demonSVG() };
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
    [currRoom, evilPos]
  );

  const findPos = (x = 0, y = 0) => {
    return (charPos[`${x}:${y}`] || charFunc[evilPos[`${x}:${y}`]]) ?? false;
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
      () => setEvilPos(singleRoom(currRoom).monsters);
      return blTemp;
    },
    [charPos, currRoom]
  );

  const changeMap = (x, y) => {
    let temp = changePlayer(charPos, x, y);
    evilPos[Object.keys(temp)[0]] ? alert("true") : setCharPos(temp);
    setEvilPos(changeMob(evilPos, x, y, charPos));
  };

  return (
    <div>
      {Object.keys(charPos)}
      <br />
      {Object.entries(evilPos).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))}
      <p>{currRoom}</p>
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
        <button onClick={() => setCurrRoom(2)}>mob</button>
      </label>
      <div className="outer">
        <table className="tableTwo">{topLayer()}</table>
        <table className="tableOne">{bottomLayer()}</table>
      </div>
    </div>
  );
};
