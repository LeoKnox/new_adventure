let characterData = [
  { id: 1, name: "ao", lvl: 1, atk: 10, def: 10, weapon: ["spear"], armor: [] },
  { id: 2, name: "aka", lvl: 1, atk: 12, def: 9, weapon: ["sword"], armor: [] },
];

export const addCharacter = (newCharacter) => {
  newCharacter.weapon = [];
  newCharacter.armor = [];
  if (characterData.length == 0) {
    characterData = newCharacter;
  } else {
    newCharacter.id = characterData[characterData.length - 1].id + 1;
    let temp = [...characterData, newCharacter];
    characterData = temp;
  }
};

export const allCharacters = () => {
  return characterData;
};

export const deleteCharacter = (deleteId) => {
  let temp = characterData.filter((character) => character.id != deleteId);
  characterData = temp;
};

export const singleCharacter = (id = 1) => {
  let temp = characterData.find((character) => character.id == id);
  return temp;
};

export const addWeapon = (characterId = 1, newWeapon = "thing") => {
  let temp = characterData.find((character) => character.id == characterId);
  temp = { ...temp, weapon: [...temp.weapon, newWeapon] };
  characterData = characterData.map((character) =>
    character.id == characterId ? temp : character
  );
};

export const addInventory = (
  characterId = 1,
  type = "armor",
  item = "scale"
) => {
  console.log(item + "+");
  let temp = characterData.find((character) => character.id == characterId);
  temp = { ...temp, [type]: [...temp[type], item] };
  characterData = characterData.map((character) =>
    character.id == characterId ? temp : character
  );
  console.log("ReD");
  console.log(temp);
};
