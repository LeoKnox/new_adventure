import { floorSVG, wallSVG, warriorSVG, warr } from "./svgData";
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
let ourX = 3;
let mobData = {};
let currMap = [
  [floorSVG(), floorSVG()],
  [floorSVG(), floorSVG()],
];

mobData = {
  3: [{ oldx: 8, newx: 8, tile: warr }],
  //3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
};

export const newMap = () => {
  let x = [];
  let y = [];
  for (let i = 0; i < playData.character[1][0].oldx; i++) {
    x.push([floorSVG(), floorSVG()]);
  }
  console.log("x");
  console.log(x);
  return x;
};

export const mapData = { x: 0, y: 0 };
export const roomData = new Array(3).fill().map(() => Array(2).fill(floorSVG()));

export const addChar = (i) => {
  console.log("map data" + i);
  console.table(mapData);
  let temp = [...mapData];
  temp[i][0] = "warriorSVG()";
  return temp;
};

export const move = () => {
  console.log("move");
  temp = mapData;
  temp.y = temp.y++;
  mapData = temp;
  console.log(mapData);
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
  let t = deepCopy(playData["monster"]);
  t[charKey][0]["tile"] = floorSVG();
  console.log(t);
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
  let charKey = Object.keys(playData["monster"])[0];
  //let temp = structuredClone(playData["monster"]);
  let temp = playData["monster"][charKey][0];
  console.log(temp);
  temp[parseInt(charKey) + parseInt(mod)] = playData["monster"][charKey];
  temp[charKey][0].tile = { warr };
  playData["monster"] = temp;
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
