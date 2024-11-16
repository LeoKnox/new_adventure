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
    let t = false;
    if (e == "up" || "down" || "right" || "left") {
      t = e;
    }
    console.log(t);
    switch (t || e.target.value) {
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
      default:
        console.log("tt" + e.target.value);
    }
  };
  return (
    <div onKeyPress={() => moveCharacter()}>
      {mapState.map((row) => (
        <tr>
          {row.map((tile) => (
            <td>{tile}</td>
          ))}
        </tr>
      ))}
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
      <td>
        <button value="up" onClick={(e) => moveCharacter(e)}>
          up
        </button>
      </td>
    </div>
  );
};
