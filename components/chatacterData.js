let characterData = [
  {
    id: 1,
    name: "ao",
    icon: 0,
    lvl: 1,
    atk: 10,
    def: 10,
    weapon: ["spear"],
    armor: [],
    selectedArmor: 0,
  },
  {
    id: 2,
    name: "aka",
    icon: 0,
    lvl: 1,
    atk: 12,
    def: 9,
    weapon: ["sword"],
    armor: [],
    selectedArmor: 1,
  },
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

export const addWeapon = (awId = 0, newWeapon = "Seax") => {
  console.log("add weapon");
  let temp = characterData[awId].weapon;
  temp.push(newWeapon);
  characterData[awId].weapon = temp;
};

export const addInventory = (
  characterId = 1,
  type = "armor",
  item = "scale"
) => {
  let temp = characterData.find((character) => character.id == characterId);
  temp = { ...temp, [type]: [...temp[type], item] };
  characterData = characterData.map((character) =>
    character.id == characterId ? temp : character
  );
};

export const deleteWeapon = (delId, charId = 1) => {
  console.log("delete weapon");
  console.log(delId);
  delete characterData[charId - 1].weapon[delId];
  console.log(characterData);
};

export const deleteItem = (delId, charId = 1, reference) => {
  console.log("delete Item");
  characterData[charId][reference].splice(delId, 1);
  console.log(characterData);
};

export const getSelected = (selectedItem = "selectedArmor", charId) => {
  console.log("get selected");
  console.log(charId);
  return characterData[charId - 1]["selectedArmor"];
};

export const selectItem = (itemId, item = "selectedArmor", characterId = 1) => {
  console.log("select item");
  console.log(characterId);
  characterData[characterId - 1][item] = itemId;
};
