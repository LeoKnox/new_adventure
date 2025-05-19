import { floorSVG, wallSVG, warriorSVG, demonSVG, warr } from "./svgData";
import DrawMonster from "./DrawMonster.js";
import DrawCharacter from "./DrawCharacter.js";

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
const charFunc = { 0: warriorSVG(), 1: demonSVG() };
export const playerPos = { [`1:1`]: charFunc[0] };
export const mobPos = { [`3:4`]: charFunc[1], ["3:5"]: charFunc[1] };

export const changeMob = (mobPos, x, y) => {
  console.log("change mob");
  let temp = {};
  Object.entries(mobPos).map(([key]) => {
    let tempKeys = key.split(":");
    console.log(tempKeys);
    temp = {
      ...temp,
      [`${x + +tempKeys[0]}:${+tempKeys[1] + y}`]: charFunc[1],
    };
  });
  return temp;
};

export const changeMob2 = (mobPos, x, y, charPos) => {
  console.log("change mob 2");
  let temp = {};
  let charChange = Object.keys(charPos)[0].split(":");
  Object.entries(mobPos).map(([key]) => {
    let tempKeys = key.split(":");
    let z = Math.round(Math.random());
    console.log(tempKeys[1] + ":" + charChange[1]);
    if (tempKeys[1] == charChange[1]) {
      z = -1;
      console.log("CM2");
    }
    temp = {
      ...temp,
      [`${x * z + +tempKeys[0]}:${+tempKeys[1] + y * z}`]: charFunc[1],
    };
  });
  return temp;
};

export const changePlayer = (charPos, x, y) => {
  console.log("change Player");
  let temp = {};
  Object.entries(charPos).map(([key]) => {
    let tempKeys = key.split(":");
    temp = { [`${x + +tempKeys[0]}:${+tempKeys[1] + y}`]: charFunc[0] };
  });
  return temp;
};
