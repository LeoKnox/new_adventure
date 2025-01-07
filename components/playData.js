import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";

let playData = {
  character: { charId: 1, x: 2, y: 2 },
  /*monster: [{ icon: "demon", x: 8, y: 3 }],*/
  monster: {
    3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
  },
};
let mobData = {};
mobData = {
  3: [{ oldx: 8, newx: 8, tile: <DrawMonster background={floorSVG()} /> }],
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (direction = "up") => {
  let tempData = playData.monster;
  console.log("....");
  console.log(tempData);
  console.log(playData.monster);
  console.log("....");

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
    let a = Object.keys(playData.monster);
    console.log(a);
    (tempData[a] = [
      {
        oldx: playData.monster[3][0].newx,
        newx: playData.monster[3][0].newx,
        tile: floorSVG(),
      },
    ]),
      (tempData[a - 1] = [
        {
          oldx: playData.monster[3][0].newx,
          newx: playData.monster[3][0].newx,
          tile: <DrawMonster background={floorSVG()} />,
        },
      ]),
      (mobData = tempData);
  }
};

export const change = () => {
  console.log("change");
  let a = Object.keys(playData.monster);
  delete playData.monster[a];
  console.log();
};

export const singleMonster = () => {
  console.log("mob data");

  //change();
  //updateMonster();
  console.log(mobData);
  return mobData;
};
