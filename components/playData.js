import { floorSVG, wallSVG, warriorSVG } from "./svgData";
import DrawMonster from "./DrawMonster.js";

let playData = {
  character: { charId: 1, x: 1, y: 1 },
  /*monster: [{ icon: "demon", x: 8, y: 3 }],*/
  monster: {
    1: [
      {
        oldx: 1,
        newx: 1,
        tile: <DrawMonster background={floorSVG()} />,
      },
    ],
  },
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = (newNum) => {
  playData.monster[0].y = playData.monster[0].y - 1;
};

export const singleMonster = () => {
  return playData.monster;
};
