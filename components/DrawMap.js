import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";

export default DrawMap = ({ width = 10, height, x = 10 }) => {
  const [mapState, setMapState] = useState(() => {
    let temp = [];
    let tempRow = [];
    for (let x = 0; x < 10; x++) {
      tempRow.push("*");
    }
    temp.push(tempRow);
    tempRow = [];
    for (let x = 0; x < 6; x++) {
      tempRow.push("*");
      for (let y = 0; y < 8; y++) {
        tempRow.push("+");
      }
      tempRow.push("*");
      temp.push(tempRow);
      tempRow = [];
    }
    for (let x = 0; x < 10; x++) {
      tempRow.push("*");
    }
    temp.push(tempRow);
    tempRow = [];
    return temp;
  });

  const addCharacter = (row, column) => {
    let tempRow = [...mapState];
    let temp = [...mapState[row]];
    temp[column] = "^";
    tempRow[row] = temp;
    console.log(tempRow);
    setMapState(tempRow);
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
      <button onClick={() => addCharacter(2, 3)}>cc</button>
      <tr>
        {[...Array(width + 2)].map((z, i) => (
          <>
            <td id={i}>{wallSVG()}</td>
          </>
        ))}
      </tr>
      {[...Array(height)].map((y, i) => (
        <tr>
          <td> {wallSVG()}</td>
          {[...Array(width)].map((z, ii) => (
            <>
              <td id={[i, ii]}>{floorSVG()}</td>
            </>
          ))}
          <td> {wallSVG()}</td>
        </tr>
      ))}
      <tr>
        {[...Array(width + 2)].map((z, i) => (
          <>
            <td>{wallSVG()}</td>
          </>
        ))}
      </tr>
    </>
  );
};
