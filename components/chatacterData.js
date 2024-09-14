let characterData = [
  { id: 1, name: "ao", lvl: 1, atk: 10, def: 10, weapon: ["spear"] },
  { id: 2, name: "aka", lvl: 1, atk: 12, def: 9, weapon: ["sword"] },
];

export const allCharacters = () => {
  return characterData;
};

export const singleCharacter = (id = 1) => {
  let temp = characterData.find((character) => character.id == id);
  return temp;
};
