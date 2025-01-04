import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";

let playData = {
  character: { charId: 1, x: 1, y: 1 },
  /*monster: [{ icon: "demon", x: 8, y: 3 }],*/
  monster: {
    3: [{ oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> }],
  },
};
let mobData = {
  3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (direction = "up") => {
  let temp = {};
  if (direction === "left") {
    mobData = {
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
    /*tempData = {
      2: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ],
      3: [
        {
          oldx: mobData[3][0].newx,
          newx: mobData[3][0].newx,
          tile: floorSVG(),
        },
      ],
    };*/
    let a = Object.keys(mobData)[1];
    (tempData[a] = [
      {
        oldx: mobData[3][0].newx,
        newx: mobData[3][0].newx,
        tile: floorSVG(),
      },
    ]),
      (mobData = tempData);
  }
};

export const singleMonster = () => {
  console.log("mob data");
  console.log(mobData);
  return mobData;
};
