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

export const updateMonster = (newNum) => {
  let temp = {};
  console.log(mobData);
  console.log(mobData[3][0]);
  temp = {
    3: [{ oldx: 7, newx: 6, tile: <DrawMonster background={floorSVG()} /> }],
  };
  /*temp = {
    ...temp[3],
    oldx: 7,
    newx: 6,
    tile: <DrawMonster background={floorSVG()} />,
  };*/
  mobData = temp;
  console.log("update monster");
  console.log(mobData);
  console.log("update monster");
};

export const singleMonster = () => {
  return mobData;
};
