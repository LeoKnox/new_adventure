let characterData = [
  { id: 1, name: "ao", lvl: 1, atk: 10, def: 10, weapon: ["spear"] },
  { id: 2, name: "aka", lvl: 1, atk: 12, def: 9, weapon: ["sword"] },
];

export const addCharacter = (newCharacter) => {
  let temp = [...characterData, newCharacter];
  characterData = temp;
};

export const allCharacters = () => {
  return characterData;
};

export const deleteCharacter = () => {
  let temp = characterData.filter((character) => character != 1);
  characterData = temp;
};

export const singleCharacter = (id = 1) => {
  let temp = characterData.find((character) => character.id == id);
  return temp;
};
