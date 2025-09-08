import { floorSVG, wallSVG, warriorSVG, demonSVG, warr } from "./svgData";
import { singleCharacter } from "./characterData.js";
import DrawCharacter from "./DrawCharacter.js";
import { singleRoom } from "./dungeonData.js";

export const charUpdate = (
  newChar = {
    1: [{ oldx: 3, newx: 2, tile: <DrawCharacter background={floorSVG()} /> }],
  }
) => {
  console.log("charUpdate");
  playData.character = newChar;
  playData.character[1][0].oldx = playData.char[1][0].newx;
};
const charFunc = { 0: warriorSVG(), 1: demonSVG() };
export const playerPos = { [`3:1`]: charFunc[singleCharacter(1).icon] };
export const { monsters: mobPos } = singleRoom(1);

const mobDirection = (key, charChange) => {
  console.log("mob direction");
  console.log(charChange[0]);
  let tempKeys = key.split(":");
  let newY = 0;
  let newX = 0;
  let temp = {};
  if (
    !newX &&
    !newY &&
    tempKeys[0] == charChange[0] &&
    tempKeys[1] > charChange[1]
  ) {
    console.log("a");
    newY = -1;
  }
  if (
    !newX &&
    !newY &&
    tempKeys[0] == charChange[0] &&
    tempKeys[1] < charChange[1]
  ) {
    console.log("b");
    newY = 1;
  }
  if (
    !newX &&
    !newY &&
    tempKeys[1] == charChange[1] &&
    tempKeys[0] < charChange[0]
  ) {
    console.log("c");
    newX = 1;
  }
  if (
    !newX &&
    !newY &&
    tempKeys[1] == charChange[1] &&
    tempKeys[0] > charChange[0]
  ) {
    console.log("d");
    newX = -1;
  }
  if (
    !newX &&
    !newY &&
    tempKeys[0] > charChange[0] &&
    tempKeys[1] > charChange[1]
  ) {
    console.log("e");
    Math.round(Math.random()) ? (newY = 1) : (newX = 1);
  }
  if (
    !newX &&
    !newY &&
    tempKeys[0] < charChange[0] &&
    tempKeys[1] < charChange[1]
  ) {
    console.log("f");
    Math.round(Math.random()) ? (newY = -1) : (newX = -1);
  }
  if (
    !newX &&
    !newY &&
    tempKeys[0] > charChange[0] &&
    tempKeys[1] < charChange[1]
  ) {
    console.log("g");
    Math.round(Math.random()) ? (newY = 1) : (newX = -1);
  }
  if (
    !newX &&
    !newY &&
    tempKeys[0] < charChange[0] &&
    tempKeys[1] > charChange[1]
  ) {
    console.log("h");
    Math.round(Math.random()) ? (newY = -1) : (newX = 1);
  }
  !temp[`${+tempKeys[0] + newX}:${+tempKeys[1] + newY}`]
    ? (temp = {
        [`${+tempKeys[0] + newX}:${+tempKeys[1] + newY}`]: 1,
      })
    : (temp = {
        [`${+tempKeys[0]}:${+tempKeys[1]}`]: 1,
      });
  console.log(temp);
  return temp;
};

export const changeMob = (evilPos, x, y, charPos) => {
  console.log("change mob");
  let temp = {};
  let charChange = Object.keys(charPos)[0].split(":");
  Object.entries(evilPos).map(([key, findPos]) => {
    tempx = mobDirection(key, charChange);
    tempx
      ? (temp = { ...temp, ...mobDirection(key, charChange) })
      : (temp[key] = singleRoom.monsters[pos]);
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
