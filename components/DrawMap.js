import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";

export default DrawMap = ({
  width = 10,
  height = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  const [mapState, setMapState] = useState(() => {
    let temp = [];
    let tempRow = [];
    for (let x = 0; x < 10; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    for (let x = 0; x < 6; x++) {
      tempRow.push(wallSVG());
      for (let y = 0; y < 8; y++) {
        tempRow.push(floorSVG());
      }
      tempRow.push(wallSVG());
      temp.push(tempRow);
      tempRow = [];
    }
    for (let x = 0; x < 10; x++) {
      tempRow.push(wallSVG());
    }
    temp.push(tempRow);
    tempRow = [];
    return temp;
  });

  const addCharacter = (x, y) => {
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    setMapState(tempRow);
  };
  const moveDown = (newx, newy) => {
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div>{floorSVG()}</div>
      </td>
    );
    console.log(tempRow);
    console.log(temp);
    tempRow[x] = temp;

    temp = [...mapState[newx]];
    temp[y] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[newx] = temp;
    setMapState(tempRow);
    setx(newx);
    console.log("I've moved");
  };
  const moveCharacter = (e) => {
    const characterMove = {
      down: moveDown(1 + x, y),
      up: moveDown(x - 1, y),
    };
    return characterMove[e.target.value];
  };
  return (
    <>
      {mapState.map((row) => (
        <tr>
          {row.map((tile) => (
            <td>{tile}</td>
          ))}
        </tr>
      ))}
      <td>
        <button onClick={() => addCharacter(x, y)}>cc</button>
      </td>
      <td>
        <button value="right" onClick={(e) => moveCharacter(e)}>
          right
        </button>
      </td>
      <td>
        <button value="left" onClick={(e) => moveCharacter(e)}>
          left
        </button>
      </td>
      <td>
        <button value="down" onClick={(e) => moveCharacter(e)}>
          down
        </button>
      </td>
      <button value="up" onClick={(e) => moveCharacter(e)}>
        up
      </button>
    </>
  );
};
