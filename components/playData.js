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

export const changeMob = (evilPos, x, y, charPos) => {
  console.log("change mob 2");
  let temp = {};
  let charChange = Object.keys(charPos)[0].split(":");
  Object.entries(evilPos).map(([key]) => {
    let tempKeys = key.split(":");
    let z = Math.round(Math.random());
    let newY = 0;
    let newX = 0;
    console.log(key);
    console.log(tempKeys[0] + "::" + charChange[0]);
    if (tempKeys[0] == charChange[0] && tempKeys[1] > charChange[1]) {
      newY = -1;
    }
    if (tempKeys[0] == charChange[0] && tempKeys[1] < charChange[1]) {
      newY = 1;
    }
    if (tempKeys[1] == charChange[1]) {
      newX = -1;
    }
    temp = {
      ...temp,
      [`${+tempKeys[0] + (newX || x * z)}:${+tempKeys[1] + (newY || y * z)}`]:
        charFunc[1],
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
