import { useState, useEffect } from "react";
import {
  singleCharacter,
  addWeapon,
  deleteWeapon,
  addInventory,
  deleteItem,
  selectItem,
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

  const viewDeleteItem = (viewId, itemDelete) => {
    console.log("view delete weapon");
    deleteItem(viewId, characterId, itemDelete);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const delViewItem = (delId) => {
    console.log("del view item");
    console.log(delId);
    deleteItem(delId, characterId, (reference = "armor"));
    setCharacter({ ...singleCharacter(characterId) });
  };
  const selectActiveArmor = (itemId) => {
    console.log("select active armor");
    selectItem(itemId, "selectedArmor", characterId);
    setCharacter({ ...singleCharacter(characterId) });
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
        delWeapon={viewDeleteItem}
        characterWeapon={character.weapon}
      />
      <AddArmor updateInventory={updateInventory} />
      <DisplayArmor
        selectActiveArmor={selectActiveArmor}
        delArmor={viewDeleteItem}
        characterArmor={character.armor}
        charId={characterId}
      />
    </>
  );
};
