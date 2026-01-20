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
    items: { bag: ["coffee"], pack: ["ocha"] },
    selectedArmor: null,
    selectedWeapon: null,
  },
];

const testtest = (data) => {
  console.log("test test");
  console.log(data);
  console.log(Object.keys(characterData[1][data]));
};

export const multiItems = (itemPath = [1, "items", "bag"], characterId = 1) => {
  console.log("multi items");
  //let temp = ["items", "bags"];
  let y = [1, "items", "bags"];
  let z = [...y];
  console.log(itemPath);
  let temp = [itemPath];
  /*let newtempx = temp.reduce((data, key) => {
    return key ? console.log(Object.keys(characterData[key])) : "undefined1";
  }, characterData[characterId]);*/
  console.log("DDD");
  let newtemp = temp.reduce((data, key) => {
    return key;
  }, characterData[characterId]);
  console.log(newtemp);
  return newtemp;
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
  /*let temp = characterData[characterId - 1][type];
  temp.push(item);
  characterData[characterId][type] = temp;*/
  let temp = characterData.find((character) => character.id == characterId);
  temp = { ...temp, [type]: [...temp[type], item] };
  characterData = characterData.map((character) =>
    character.id == characterId ? temp : character
  );
};

export const deleteItem = (delId = 0, charId = 1, reference = "armor") => {
  console.log("delete Item");
  //delete characterData[charId - 1][reference][delId];
  console.log(delId, charId, reference);
  characterData[charId - 1][reference].splice(delId, 1);
  //console.log(characterData);
};

export const getSelected = (selectedItem = "selectedArmor", charId) => {
  console.log("get selected");
  return characterData[charId - 1][selectedItem];
};

export const selectItem = (itemId, item = "selectedArmor", characterId = 1) => {
  console.log("select item");
  characterData[characterId - 1][item] = itemId;
};

export const retreiveWeapons = (charId) => {
  console.log("retreive weapons");
  return characterData["1"]["weapon"];
};
