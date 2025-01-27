import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

let playData = {
  character: {
    1: [{ oldx: 3, newx: 3, tile: <DrawCharacter background={floorSVG()} /> }],
  },
  monster: {
    3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
  },
};
let mobData = {};
mobData = {
  3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
};

export const charUpdate = (
  newChar = {
    1: [{ oldx: 3, newx: 2, tile: <DrawCharacter background={floorSVG()} /> }],
  }
) => {
  console.log("charUpdate");
  playData.character = newChar;
  newChar[1][0].oldx = newChar[1][0].newx;
};

export const updateCharacter = (newData) => {
  console.log("update character");
  playData["character"] = newData;
  console.log(playData["character"]);
};
export const charLocation = (id = 1) => {
  console.log("char loc");
  return playData["character"];
};
export const changeLeft = () => {
  console.log("change left");
  let t = playData["character"];
  t[1][0].newx = t[1][0].oldx + 1;
  playData["character"] = t;
};

export const updateMonster = (direction = "up") => {
  let tempData = playData.monster;
  if (direction === "left") {
    tempData = {
      3: [
        {
          oldx: playData.monster[3][0].newx,
          newx: playData.monster[3][0].newx - 1,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
    };
  }
  if (direction === "up") {
    let a = Object.keys(playData.monster)[0];
    console.log("up");
    (tempData[a] = [
      {
        oldx: playData.monster[a][0].newx,
        newx: playData.monster[a][0].newx,
        tile: floorSVG(),
      },
    ]),
      (tempData[a - 1] = [
        {
          oldx: playData.monster[a][0].newx,
          newx: playData.monster[a][0].newx,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ]),
      (mobData = tempData);
  }
};

export const change = () => {
  console.log("change");
  let a = Object.keys(playData.monster)[1];
  delete playData.monster[a];
};

export const singleMonster = () => {
  console.log("mob data");
  return mobData;
};
