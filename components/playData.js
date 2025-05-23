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
export const playerPos = { [`3:1`]: charFunc[0] };
export const mobPos = { [`1:4`]: charFunc[1], ["1:5"]: charFunc[1] };

const mobDirection = (key, charChange) => {
  console.log(key);
  let tempKeys = key.split(":");
  let newY = 0;
  let newX = 0;
  console.log(tempKeys);
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
    newX = -1;
  }
  if (
    !newX &&
    !newY &&
    tempKeys[1] == charChange[1] &&
    tempKeys[0] > charChange[0]
  ) {
    console.log("d");
    newX = 1;
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
    Math.round(Math.random()) ? (newY = 1) : (newX = 1);
  }
  temp = {
    ...temp,
    [`${+tempKeys[0] + newX}:${+tempKeys[1] + newY}`]: charFunc[1],
  };
  return temp;
};

export const changeMob = (evilPos, x, y, charPos) => {
  console.log("change mob");
  let temp = {};
  let charChange = Object.keys(charPos)[0].split(":");
  Object.entries(evilPos).map(([key]) => {
    console.log("a" + key);
    const temp = mobDirection(key, charChange);
    /*
    let tempKeys = key.split(":");
    let newY = 0;
    let newX = 0;
    const [tempx, tempy] = mobDirection();
    console.log(key);
    //console.log(tempKeys[1] + "::" + charChange[1]);
    console.log(tempy + "::" + tempx);
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
      newX = -1;
    }
    if (
      !newX &&
      !newY &&
      tempKeys[1] == charChange[1] &&
      tempKeys[0] > charChange[0]
    ) {
      console.log("d");
      newX = 1;
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
      Math.round(Math.random()) ? (newY = 1) : (newX = 1);
    }
    temp = {
      ...temp,
      [`${+tempKeys[0] + newX}:${+tempKeys[1] + newY}`]: charFunc[1],
    };*/
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
