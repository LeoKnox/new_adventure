import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";

let playData = {
  character: { charId: 1, x: 1, y: 1 },
  /*monster: [{ icon: "demon", x: 8, y: 3 }],*/
  monster: {
    3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
  },
};
let mobData = {
  ...playData.monster,
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (direction = "up") => {
  console.log("....");
  console.log(mobData);
  console.log(playData.monster);
  console.log("....");
  let tempData = {};
  if (direction === "left") {
    tempData = {
      3: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx - 1,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
    };
  }
  if (direction === "up") {
    let a = Object.keys(mobData)[1];
    (tempData[a] = [
      {
        oldx: mobData[3][0].newx,
        newx: mobData[3][0].newx,
        tile: floorSVG(),
      },
    ]),
      (tempData[a - 1] = [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ]),
      (mobData = tempData);
  }
};

const change = () => {
  console.log("change");
  let tempData = {};
  let a = Object.keys(mobData)[1];
  (tempData[a] = [
    {
      oldx: mobData[3][0].newx,
      newx: mobData[3][0].newx,
      tile: floorSVG(),
    },
  ]),
    (tempData[a - 1] = [
      {
        oldx: mobData[3][0].newx,
        newx: mobData[3][0].newx,
        tile: <DrawMonster background={floorSVG()} />,
      },
    ]),
    (mobData = tempData);
};

export const singleMonster = () => {
  console.log("mob data");

  //change();
  //updateMonster();
  console.log(mobData);
  return mobData;
};
