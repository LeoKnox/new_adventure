import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import {
  changeDown,
  changeLeft,
  changeRight,
  charUpdate,
  charLocation,
  deleteDown,
  updateMonster,
  singleMonster,
  change,
  updateCharacter,
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
  let mobs = singleMonster();
  const [pagetest, setpagetest] = useState(warriorSVG());
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
    console.log("ue keydown");
    const onKeyDown = (e) => {
      if (e.key === "w") {
        //moveCharacter("up");
      } else if (e.key === "s") {
        //moveCharacter("down");
      } else if (e.key === "d") {
        let temp = {
          1: [
            {
              oldx: 1,
              newx: 2,
              tile: (
                <td>
                  <div style={{ position: "absolute", opacity: "60%" }}>
                    {floorSVG()}
                  </div>
                  <div style={{ position: "relative" }}>{warriorSVG()}</div>
                </td>
              ),
            },
          ],
        };
        modifyTable(temp);
      } else if (e.key === "a") {
        //moveCharacter("left");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    console.log("draw character");
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = char;
    tempRow[x] = temp;
    let chartemp = charLocation();
    for (let ct in chartemp) {
      mobs[ct] = chartemp[ct];
    }
    modifyTable(mobs);
  }, []);

  const moveMob = () => {
    console.log("move mob");
    let change = changeLeft();
    modifyTable(change);
    //modifyTable(updateMonster());
  };

  const modifyTable = (
    objMove = {
      3: [
        {
          oldx: 8,
          newx: 7,
          tile: <DrawMonster background={wallSVG()} />,
        },
      ],
    }
  ) => {
    console.log("modify table");
    let newGrid = [...mapState];
    let newRow = [];
    for (index in objMove) {
      newRow = [...mapState[index]];
      objMove[parseInt(index)].map((child) => {
        newRow[child.oldx] = floorSVG();
        newRow[child.newx] = child.tile;
        newGrid[index] = newRow;
      });
    }
    setMapState(newGrid);
  };

  const newChange = () => {
    console.log("new change");
    changeDown();
    temp = charLocation();
    modifyTable(change());
    deleteDown();
  };
  return (
    <div>
      {mapState.map((row) => (
        <tr>
          {row.map((tile) => (
            <td>{tile}</td>
          ))}
        </tr>
      ))}
      <td>
        <button onClick={console.log("button")}>right</button>
      </td>
      <td>
        <button onClick={console.log("button")}>left</button>
      </td>
      <td>
        <button onClick={() => newChange()}>down</button>
      </td>
      <td>
        <button onClick={console.log("button")}>up</button>
      </td>
      <td>
        <button onClick={() => moveMob()}>mob</button>
      </td>
      {pagetest}
    </div>
  );
};
