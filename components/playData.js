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
export const changeLeft = (mod) => {
  console.log("change left");
  return({
  3: [{ oldx: 0, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
})
};
export const changeRight = () => {
  let charKey = parseInt(Object.keys(playData["monster"]));
  let t = playData["monster"];
  t[charKey][0].newx = t[charKey][0].oldx + mod;
  console.log(playData["monster"]);
  playData["monster"] = t;
  //playData["character"] = t;
};

export const updateMonster = (dirx = -1, diry = 0) => {
  console.log("update monster");
  dirx && changeLeft(dirx);
  return playData["monster"];
};

export const change = () => {
  console.log("change");
  console.log(playData["character"]);
  return playData["character"];
};

export const singleMonster = () => {
  console.log("mob data");
  return mobData;
};
