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
    items: {},
    selectedArmor: null,
    selectedWeapon: null,
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
    items: { bag: Array(3).fill("empty"), pack: ["ocha"] },
    selectedArmor: null,
    selectedWeapon: null,
  },
];

export const addToBag = (itemPath, characterId = 1, value) => {
  console.log("add to bag");
  let temp = [characterId, ...itemPath];
  let newtemp = temp.reduce((prev, curr) => prev?.[curr], characterData);
  newtemp[0] = "coffee";
  return newtemp;
};

export const multiItems = (itemPath, characterId = 1) => {
  //console.log("multi items");
  let temp = [itemPath.unshift(characterId - 1)];
  let newtemp = itemPath.reduce((prev, curr) => prev?.[curr], characterData);
  return newtemp;
};

export const addMultiItems = (characterId = 1, keyBag = "key bag") => {
  console.log("add multi items");
  characterData[characterId]["items"][keyBag] = Array(4).fill("*");
};

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
  console.log(awId);
  console.log(newWeapon);
  let temp = characterData[awId - 1].weapon;
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

export const deleteItem = (delId = 0, charId = 1, reference = "armor") => {
  console.log("delete Item");
  characterData[charId - 1][reference].splice(delId, 1);
};

export const getSelected = (selectedItem = "selectedArmor", charId) => {
  //console.log("get selected");
  return characterData[charId - 1][selectedItem];
};

export const selectItem = (itemId, item = "selectedArmor", characterId = 1) => {
  console.log("select item");
  characterData[characterId - 1][item] = itemId;
};

export const retreiveWeapons = (charId) => {
  //console.log("retreive weapons");
  return characterData["1"]["weapon"];
};

const findInBag = (itemPath = [1, "items", "pack"]) => {
  console.log("find in bag");
  let newtemp = itemPath.reduce((prev, curr) => prev?.[curr], characterData);
  console.log(newtemp);
};

export const deleteFromBag = (id = 0, itemPath = [1, "items", "pack"]) => {
  console.log("delete from bag");
  let pos = [...characterData];
  let newtemp = itemPath.reduce((prev, curr, i) => {
    console.log("prev" + JSON.stringify(prev) + "::" + i);
    console.log("curr" + curr + ":" + itemPath.length);
    console.log(pos[curr]);
    pos[prev] = curr;
    i == itemPath.length - 1
      ? (prev[curr] = "deleted " + JSON.stringify(pos))
      : null;
    console.log("pos" + JSON.stringify(characterData));
    return pos;
  }, characterData);
  characterData = pos;
  console.log(characterData);
  console.log("character data");
  //itemPath.reduce((prev, curr) => prev?.[curr], characterData);
  findInBag();
};
