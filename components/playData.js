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
    ...playData["monster"],
    [charKey + direction]: [
      {
        oldx: playData["character"][charKey][0].oldx,
        newx: playData["character"][charKey][0].newx,
        tile: <DrawCharacter background={floorSVG()} />,
      },
    ],
  };
  t[charKey][0]["tile"] = floorSVG();
  playData["monster"] = t;
  //delete t[charKey];
};
export const deleteDown = (offSet = 1) => {
  console.log("delete down");
  let charKey = parseInt(Object.keys(playData["character"]) + offSet);
  delete playData["character"][charKey];
  console.log(playData["character"]);
};
export const changeLeft = (mod) => {
  let charKey = +Object.keys(playData["monster"])[0];
  playData["monster"][charKey][0].oldx = playData["monster"][charKey][0].newx;
  playData["monster"][charKey][0].newx =
    playData["monster"][charKey][0].newx + mod;
  return playData["monster"];
};
export const mobDown = (mod) => {
  console.log("mobDown");
  console.log(playData["monster"]);
  let charKey = +Object.keys(playData["monster"]);
  //console.log("md " + (charKey + mod));
  let temp = playData["monster"];
  console.log(temp);
  temp[charKey + mod] = playData["monster"][charKey];
  console.log(temp);
  temp[charKey][0].tile = wallSVG();
  temp[charKey] = temp;
  console.log(playData["monster"]);
  playData["monster"] = temp;
  //return playData["monster"];
  /*let blank = wallSVG();
  let gg = {
    3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],

    2: [{ oldx: 8, newx: 8, tile: [blank] }],
  };
  gg[2][0].tile = wallSVG();
  playData["monster"] = gg;*/
  //console.log("gg");
  console.log(playData["monster"]);
};

export const updateMonster = (dirx, diry = -1) => {
  console.log("update monster");
  dirx && changeLeft(dirx);
  diry && mobDown(diry);
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
