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

export const multiItems = (itemPath = [1, "items", "bag"]) => {
  console.log("multi items");
  //console.log(itemPath);
  console.log(characterData[1]["items"]);
  let temp = [1, "items", "bag"];
  let newtemp = "";
  //let temp = [...itemPath];
  let path = "";
  console.log(Object.keys(characterData[1]["items"]));
  temp.forEach((data, key) => {
    console.log(data + "::" + key);
  });
  let y = temp.reduce((currentObj, key) => {
    // Check if the currentObj is valid and has the next key
    currentObj && currentObj[key] !== "undefined"
      ? //? console.log("+" + Object.keys(currentObj))
        //: console.log("+" + "b");
        console.log("--" + characterData[currentObj])
      : undefined;
  }, characterData);
  /*let y = temp.forEach(
    (data, key) => (path += [data]),
    //console.log("+" + key + data + Object.keys(characterData[data])),
    //(data, key) => console.log(Object.keys(characterData[data])),
    temp
  );*/
  /*let x = temp.reduce(
    (data, key) => path.push(Object.keys(characterData[data])),
    temp
  );*/
  console.log("y");
  console.log(y);
  //let x = itemPath.reduce((data, key) => data[key], characterData);

  let a = 1;
  let b = "items";
  let c = "bag";
  //console.log(path);
  //console.log(characterData[a][b][c]);
  //console.log(x);
  return y;
  //return x;
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
