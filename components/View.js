import { useState, useEffect } from "react";
import {
  singleCharacter,
  addWeapon,
  deleteWeapon,
  addInventory,
  deleteItem,
} from "./characterData.js";
import AddArmor from "./AddArmor.js";
import AddWeapon from "./AddWeapon.js";
import DisplayArmor from "./DisplayArmor.js";
import DisplayWeapon from "./DisplayWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [weaponToAdd, setWeaponToAdd] = useState("kama");
  const updateInventory = (type = "armor", item = "leather") => {
    addInventory(characterId, type, item);

    setCharacter(singleCharacter(characterId));
  };
  const viewAddWeapon = () => {
    addWeapon(characterId - 1, weaponToAdd);
    setCharacter({ ...singleCharacter(characterId) });
  };

  const viewDeleteWeapon = (viewId) => {
    console.log("view delete weapon");
    deleteWeapon(viewId, characterId);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const delArmor = (delId) => {
    console.log("del armor");
    deleteItem(delId, characterId - 1, (reference = "armor"));
    setCharacter({ ...singleCharacter(characterId) });
  };
  const selectActiveArmor = (itemId) => {
    console.log("select active armor");
    selectItem("armor", itemId, CharacterId);
  };
  useEffect(() => {
    console.log("view use effect");
    let temp = {};
    temp = singleCharacter(characterId);
    setCharacter(temp);
  }, []);

  return (
    <>
      <h3>Character</h3>
      <h3>id: {characterId}</h3>
      <p>Name: {character.name}</p>
      <p>Icon: {character.icon}</p>
      <p>{character.weapon}</p>
      <p>Lvl: {character.lvl}</p>
      <p>Atk: {character.atk}</p>
      <p>Def: {character.def}</p>
      <AddWeapon
        updateInventory={viewAddWeapon}
        setWeaponToAdd={setWeaponToAdd}
      />
      <DisplayWeapon
        viewDeleteWeapon={viewDeleteWeapon}
        characterWeapon={character.weapon}
      />
      <AddArmor updateInventory={updateInventory} />
      <DisplayArmor
        selectActiveArmor={selectActiveArmor}
        delArmor={delArmor}
        characterArmor={character.armor}
      />
    </>
  );
};
