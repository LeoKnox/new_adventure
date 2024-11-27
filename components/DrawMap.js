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
    let temp = singleMonster();
    console.log(temp);
    setMobGroup([{x:temp.x, y:temp.y}])
  },[])
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

  const modifyTable = ({ newx, newy = 2 }) => {
    mobs = singleMonster();
    console.log(singleMonster());
    let tempRow = [...mapState];
    let temp = [...mapState[mobs.y]];
    if (mobs.y != newy) {
      console.log("modify y");
      temp[mobs.x] = (
        <td>
          <div>{floorSVG()}</div>
        </td>
      );
      tempRow[mobs.y] = temp;
      temp = [...mapState[newy]];
      temp[newx] = <DrawMonster background={floorSVG()} />;
    }
    if (mobs.x != newx) {
      console.log("modify x");
      temp[mobs.x] = (
        <td>
          <div>{floorSVG()}</div>
        </td>
      );
      temp[newx] = <DrawMonster background={floorSVG()} />;
    }
    console.log(mobs.x + "x" + newx);
    console.log(mobs.y + "y" + newy);
    updateMonster(newy);
    tempRow[newy] = temp;
    setMapState(tempRow);
  };
  const moveVert = (newx) => {
    let tempRow = [...mapState];
    console.log(newx);
    console.log("red");
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div>{floorSVG()}</div>
      </td>
    );
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
  };
  moveSide = (newy) => {
    let tempRow = [...mapState];
    let temp = [...mapState[x]];
    temp[y] = (
      <td>
        <div>{floorSVG()}</div>
      </td>
    );
    temp[newy] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    tempRow[x] = temp;
    setMapState(tempRow);
    sety(newy);
  };
  const moveCharacter = (e) => {
    let t = null;
    if (e == "up" || "down" || "right" || "left") {
      t = e;
    }
    console.log(t);
    switch (t) {
      case "up":
        moveVert(x - 1);
        break;
      case "down":
        moveVert(x + 1);
        break;
      case "right":
        moveSide(y + 1);
        break;
      case "left":
        moveSide(y - 1);
        break;
    }
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
