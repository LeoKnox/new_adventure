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
  3: [{ oldx: 8, newx: 7, tile: <DrawMonster background={floorSVG()} /> }],
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (newNum) => {
  playData[3][0].newx = playData.monster[3][0].oldx - 1;
};

export const singleMonster = () => {
  return mobData;
};
