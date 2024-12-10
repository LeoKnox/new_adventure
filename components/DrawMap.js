import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import { updateMonster, singleMonster } from "./playData.js";
import DrawMonster from "./DrawMonster.js";

export default DrawMap = ({
  width = 10,
  height = 10,
  x = 2,
  y = 3,
  sety,
  setx,
}) => {
  let mobs = singleMonster();
  const [mobGroup, setMobGroup] = useState([]);
  const [character, setCharacter] = useState({});
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
    console.log(mapState);
    console.log("moblist update");
  }, []);

  useEffect(() => {
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    temp = [...mapState[mobs.y]];
    temp[mobs.x] = <DrawMonster background={floorSVG()} />;
    tempRow[mobs.y] = temp;
    setMapState(tempRow);
    const onKeyDown = (e) => {
      if (e.key === "w") {
        moveCharacter("up");
      } else if (e.key === "s") {
        moveCharacter("down");
      } else if (e.key === "d") {
        moveCharacter("right");
      } else if (e.key === "a") {
        moveCharacter("left");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [x, y]);

  const tempTest = () => {
    return <DrawMonster background={wallSVG()} />;
  };

  const modifyTable = ({ newx = 8, newy = 2 }) => {
    console.log("modify table");
    let temp = {};
    let i = 3;
    let j = 8;
    let newMapState = [...mapState];
    let newMapRow = [];
    //let k = 9;
    temp[newy] = { ...temp, [newx]: <DrawMonster background={floorSVG()} /> };
    temp[i] = { ...temp, [j]: wallSVG() };
    temp[i] = { ...temp, 9: wallSVG() };
    let tempData = <DrawMonster background={floorSVG()} />;
    //temp[i][k].push(wallSVG());
    console.log(temp);
    Object.keys(temp).forEach((id, data) => {
      newMapRow = [...newMapState[id]];
      newMapRow[6] = wallSVG();
    });
    console.log(newMapState);
    setMapState(temp);
  };
  const moveVert = (newx) => {
    console.log("move vertically");
  };
  moveSide = (newy) => {
    console.log("move sideways");
  };
  const moveCharacter = (e) => {
    console.log("move character");
  };
  return (
    <div onKeyDown={() => moveCharacter()}>
      {mapState.map((row) => (
        <tr>
          {row.map((tile) => (
            <td>{tile}</td>
          ))}
        </tr>
      ))}
      <td>
        <button onClick={() => moveCharacter("right")}>right</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("left")}>left</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("down")}>down</button>
      </td>
      <td>
        <button onClick={() => moveCharacter("up")}>up</button>
      </td>
      <td>
        <button onClick={modifyTable}>mob</button>
      </td>
    </div>
  );
};
