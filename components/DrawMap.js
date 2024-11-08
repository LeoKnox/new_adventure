import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";

export default DrawMap = ({ width = 10, height = 10, x = 2, y = 3, sety }) => {
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
  const moveCharacter = (e) => {
    //let newy = (e.target.value = "right" ? y + 1 : y);
    let newy = y;
    switch (e.target.value) {
      case "right":
        newy++;
        break;
      case "left":
        newy--;
        break;
    }
    console.log(newy);
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div>{floorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    temp[newy] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    sety(newy);
    setMapState(tempRow);
    console.log("move");
  };
  const moveCharacterDown = () => {
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div>{floorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    temp[y] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x + 1] = temp;
    setMapState(tempRow);
    console.log("move");
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
      <button onClick={moveCharacterDown}>down</button>
    </>
  );
};
