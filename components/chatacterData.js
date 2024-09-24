let characterData = [
  { id: 1, name: "ao", lvl: 1, atk: 10, def: 10, weapon: ["spear"] },
  { id: 2, name: "aka", lvl: 1, atk: 12, def: 9, weapon: ["sword"] },
];

export const addCharacter = (newCharacter) => {
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

export const addWeapon = (id = 1, newWeapon = "thing") => {
  //characterData[id] = characterData[id].weapon.push("bow");
  let temp = {
    ...characterData[0],
    weapon: [...characterData[0].weapon, newWeapon],
  };
  let tempa = characterData.find((character) => character.id == id);
  tempa = tempa.weapon.push("gun");
  characterData[1] = tempa;
  temp = console.log(characterData);
};
