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
  width = 10,
  height = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  const currMap = new Array(singleRoom().x)
    .fill()
    .map(() => <tr>{Array(singleRoom().y).fill(<td>{floorSVG()}</td>)}</tr>);
  const [dataMove, setDataMove] = useState(currMap);
  const [locations, setLocations] = useState(mapData);
  const [mabData, setMabData] = useState(mobData);
  const [mapState, setMapState] = useState(() => {
    let temp = [];
    let tempRow = [];
    for (let x = 0; x < width + 2; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    for (let x = 0; x < height; x++) {
      tempRow.push(wallSVG());
      for (let y = 0; y < width; y++) {
        tempRow.push(floorSVG());
      }
      tempRow.push(wallSVG());
      temp.push(tempRow);
      tempRow = [];
    }
    for (let x = 0; x < width + 2; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    return temp;
  });

  useEffect(() => {
    console.log("locations");
    let temp = [...currMap];
    temp[locations["player"].y][locations["player"].x] = warriorSVG();
    locations["monster"].map((mon) => (temp[mon.y][mon.x] = demonSVG()));
    setDataMove(temp);
  }, [locations]);

  const moveMob = (xval = -1) => {
    console.log("move mob");
    let change = updateMonster(0, -1);
    modifyTable(change);
  };

  const confirm = (t, v) => {
    console.log("confirm");
    if (mabData.hasOwnProperty(t) && mabData[t].hasOwnProperty(v)) {
      return mabData[t][v];
    } else {
      return false;
    }
  };
  const newMove = (x, y) => {
    console.log("newmove");
    //let temp = move(x, y, mabData);
    console.log("temp");
    console.log(move(x, y, mabData));
    setMabData(move(x, y, mabData));
    /*let temp = { ...mabData };
    Object.keys(temp).forEach(function (data, index) {
      console.log(data);
      console.log(temp[index]);
      console.log(temp[index][data]);
    });*/
    //console.log(temp);
    //setMabData(temp);
  };
  const createWalls = useCallback(() => {
    console.log("create walls");
    let cw = dataMove.map((s, t) => (
      <tr>
        {s.props.children.map((u, v) => (
          <td>{confirm(t, v) || u}</td>
        ))}
      </tr>
    ));
    return cw;
  }, [dataMove, mabData]);
  const bottomLayer = useCallback(
    (rows = 4, columns = 4, defaultValue = floorSVG()) => {
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
  const [charPos, setCharPos] = useState({ x: 1, y: 1 });
  const findPos = (x = 0, y = 0) => {
    console.log("find pos");
    let tempKey = String(x + ":" + y);
    //let tempKey = `i${x}${y}`;
    console.log(tempKey);
    let tempMap = [charPos.x + ":" + charPos.y];
    console.log(tempMap[0][tempKey]);
    return tempKey == "1:1" ? true : false;
    //return tempMap[0][tempKey].props.children && false;
  };
  const topLayer = useCallback(
    (rows = 4, columns = 4, defaultValue = demonSVG()) => {
      console.log("bottom layer");
      console.log(findPos());
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
        <button onClick={() => newMove(1, 0)}>right</button>
      </label>
      <label>
        <button onClick={() => newMove(-1, 0)}>left</button>
      </label>
      <label>
        <button onClick={() => newMove(0, 1)}>down</button>
      </label>
      <label>
        <button onClick={() => newMove(0, -1)}>up</button>
      </label>
      <label>
        <button onClick={() => setCharPos("2:2")}>mob</button>
      </label>
      <table>{createWalls()}</table>
      <div className="outer">
        <table className="tableTwo">{topLayer()}</table>
        <table className="tableOne">{bottomLayer()}</table>
      </div>
    </div>
  );
};
