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
  let temp = newChar;
  playData.character[1][0].oldx = playData.char[1][0].newx;
};

export const updateCharacter = (newData) => {
  console.log("update character");
  playData["character"] = newData;
  console.log(newData);
};
export const charLocation = (id = 1) => {
  console.log("char loc");
  return playData["character"];
};
export const changeDown = (direction = 1) => {
  console.log("change down");
  console.log(playData["character"]);
  let charKey = parseInt(Object.keys(playData["character"]));
  let t = {
    ...playData["character"],
    [charKey + direction]: [
      {
        oldx: playData["character"][charKey][0].oldx,
        newx: playData["character"][charKey][0].newx,
        tile: <DrawCharacter background={floorSVG()} />,
      },
    ],
  };
  t[charKey][0].tile = floorSVG();
  playData["character"] = t;
  //delete t[charKey];
};
export const deleteDown = (offSet = 1) => {
  console.log("delete down");
  let charKey = parseInt(Object.keys(playData["character"]) + offSet);
  delete playData["character"][charKey];
  console.log(playData["character"]);
};
export const changeLeft = () => {
  console.log("change left");
  console.log(playData["character"]);
  let charKey = parseInt(Object.keys(playData["character"]));
  let t = playData["character"];
  t[charKey][0].newx = t[charKey][0].oldx - 1;
  return t;
  //playData["character"] = t;
};
export const changeRight = () => {
  console.log("change right");
  let charKey = parseInt(Object.keys(playData["character"]));
  let t = playData["character"];
  t[charKey][0].newx = t[charKey][0].oldx + 1;
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
  return {
    3: [
      { oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> },
      { oldx: 6, newx: 5, tile: <DrawMonster background={floorSVG()} /> },
    ],
    1: [{ oldx: 3, newx: 2, tile: <DrawCharacter background={floorSVG()} /> }],
  };
};

export const singleMonster = () => {
  console.log("mob data");
  return mobData;
};
