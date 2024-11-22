let playData = {
  character: { charId: 1, x: 1, y: 1 },
  monster: [{ icon: "demon", x: 8, y: 3 }],
};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};

export const updateMonster = () => {
  playData.monster[0].x = 7;
};

export const singleMonster = () => {
  return playData.monster[0];
};
