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
    return <DrawMonster background={floorSVG()} />;
  };

  const modifyTable = ({ newx = 8, newy = 2 }) => {
    console.log("modify table");
    let temp = [];
    temp = [
      ...temp,
      { x: 8, y: 2, mob: <DrawMonster background={floorSVG()} /> },
    ];
    console.log(temp.mob);
    let tempMap = [...mapState];
    let tempRow = [...mapState[2]];
    tempRow[8] = temp[0].mob;
    tempMap[2] = tempRow;
    setMapState(tempMap);
  };
  const moveVert = (newx) => {
    console.log("move vertically");
  };
  moveSide = (newy) => {
    console.log("move sideways");
  };
  const moveCharacter = (e) => {
    console.log("move character");
    let temp = {};
    let i = 2;
    let j = 8;
    temp[i] = { ...temp, [j]: <DrawMonster background={floorSVG()} /> };
    console.log(temp);
    let tempMap = [...mapState];
    let tempRow = [...mapState[i]];
    tempRow[j] = temp[i].mob;
    tempMap[i] = tempRow;
    setMapState(tempMap);
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
        <button onClick={moveCharacter}>mob</button>
      </td>
    </div>
  );
};
