import { useState, useEffect, cloneElement } from "react";
import { demonSVG, floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
import { singleRoom } from "./dungeonData.js";
import {
  charLocation,
  updateMonster,
  singleMonster,
  mapData,
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
  const [char, setChar] = useState(charLocation());
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
    console.log(currMap);
    let temp = [...currMap];
    //let temp = [...mapState];
    console.log("locations");
    console.table(temp);
    temp[locations["player"].y][locations["player"].x] = warriorSVG();
    locations["monster"].map((mon) => (temp[mon.y][mon.x] = demonSVG()));
    setDataMove(temp);
  }, [locations]);

  const moveMob = (xval = -1) => {
    console.log("move mob");
    let change = updateMonster(0, -1);
    modifyTable(change);
  };

  const newMove = (x, y) => {
    let temp = locations;
    temp["player"].y = temp["player"].y + y;
    temp["player"].x = temp["player"].x + x;
    setLocations({ ...temp });
    console.log("red");
    console.log(dataMove);
  };
  const createWalls = () => {
    console.log("create walls");
    let z = 1;
    let elements = dataMove.map((s, t) =>
      t == z ? (s.foreach((u,v) => v==z ? <td>{demonSVG()}</td>} : u)) : s
    );
    //elements[1][1] = <td id="*">{warriorSVG()}</td>;
    console.log(elements);
    /*
    elements.push(<tr>{Array(singleRoom().y).fill(<td>{wallSVG()}</td>)}</tr>);
    const newElements = [<td>{wallSVG()}</td>];
    newElements.push([...dataMove, <td>{wallSVG()}</td>]);
    elements.push(newElements);
    elements.push(<tr>{Array(singleRoom().y).fill(<td>{wallSVG()}</td>)}</tr>);
    */
    return elements;
  };

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
        <button onClick={() => moveMob()}>mob</button>
      </label>
      <table>{createWalls()}</table>
    </div>
  );
};
