let playData = {character:{ charId: 1, x: 1, y: 1 }, monster: [{ icon: "demon", x: 8, y: 3 }]};

export const charLocation = (id = 1) => {
  return { charX: playData.character.x, charY: playData.character.y };
};
