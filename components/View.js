import { useState, useEffect } from "react";
import {
  singleCharacter,
  addInventory,
  deleteItem,
  selectItem,
  retreiveWeapons,
  multiItems,
} from "./characterData.js";
import AddArmor from "./AddArmor.js";
import AddWeapon from "./AddWeapon.js";
import DisplayArmor from "./DisplayArmor.js";
import DisplayWeapon from "./DisplayWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [retreivedWeapons, setRetreivedWeapons] = useState(retreiveWeapons());
  const [weaponToAdd, setWeaponToAdd] = useState("kama");
  const updateInventory = (type = "armor", item = "leather") => {
    addInventory(characterId, type, item);

    setCharacter(singleCharacter(characterId));
  };

  const viewDeleteItem = (viewId, itemDelete) => {
    console.log("view delete weapon");
    deleteItem(viewId, characterId, itemDelete);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const selectActiveArmor = (itemId, selectedItem = "selectedArmor") => {
    console.log("select active armor");
    selectItem(itemId, selectedItem, characterId);
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
      <button onClick={multiItems}>items</button>
      <label>
        <input type="checkbox" name="subscribe" value="yes" />
        Subscribe to newsletter
      </label>
      <AddWeapon
        updateInventory={updateInventory}
        setWeaponToAdd={setWeaponToAdd}
        charId={characterId}
      />
      <DisplayWeapon
        delWeapon={viewDeleteItem}
        characterWeapon={retreivedWeapons}
        charId={characterId}
        selectActiveArmor={selectActiveArmor}
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
