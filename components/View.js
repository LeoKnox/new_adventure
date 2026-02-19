import { useState, useEffect } from "react";
import {
  singleCharacter,
  addInventory,
  deleteItem,
  selectItem,
  retreiveWeapons,
  multiItems,
  addMultiItems,
  addToBag,
  deleteFromBag,
} from "./characterData.js";
import AddArmor from "./AddArmor.js";
import AddWeapon from "./AddWeapon.js";
import DisplayArmor from "./DisplayArmor.js";
import DisplayWeapon from "./DisplayWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const [currentBag, setCurrentBag] = useState(["items"]);
  const [retreivedWeapons, setRetreivedWeapons] = useState(retreiveWeapons());
  const [weaponToAdd, setWeaponToAdd] = useState("kama");
  const [inventoryMenu, setInventoryMenu] = useState(false);
  const updateInventory = (type = "armor", item = "leather") => {
    addInventory(characterId, type, item);

    setCharacter(singleCharacter(characterId));
  };
  console.log("view");
  const selectBag = (temp) => {
    console.log("select bag");
    let retTemp = [];
    retTemp = multiItems(temp, characterId);
    temp ?? setCurrentBag(temp);
    return retTemp;
  };
  const viewDeleteItem = (viewId, itemDelete) => {
    console.log("view delete weapon");
    deleteItem(viewId, characterId, itemDelete);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const addBag = (check, key) => {
    console.log("add bag");
    setCurrentBag([...currentBag.slice(0, key + 1), check]);
  };
  const selectActiveArmor = (itemId, selectedItem = "selectedArmor") => {
    console.log("select active armor");
    selectItem(itemId, selectedItem, characterId);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const createBag = (e) => {
    console.log("create bag");
    addMultiItems(characterId - 1, e.target.value);
    setCharacter({ ...singleCharacter(characterId) });
  };
  const fillBag = (e, key) => {
    console.log("fill bag");
    addToBag(currentBag, characterId - 1);

    setCharacter({ ...singleCharacter(characterId) });
  };
  const inventoryItem = () => {
    console.log("inventory item");
    setInventoryMenu(!inventoryMenu);
  };
  const useBagItem = () => {
    console.log("use bag item");
    deleteFromBag();
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
      <button value="grab bag" onClick={createBag}>
        {currentBag} add new(4)
      </button>
      <button onClick={fillBag}>add chocolate to bag</button>
      {currentBag.map((value, key) => (
        <ul>
          {key}:
          {Array.isArray(selectBag(currentBag.slice(0, key + 1))) ? (
            <b>
              {selectBag(currentBag.slice(0, key + 1)).map((x) =>
                x == "empty" ? (
                  <label>{x}</label>
                ) : (
                  <button onClick={inventoryItem}>
                    {x}
                    {inventoryMenu && (
                      <select>
                        <option onClick={useBagItem}>Delete</option>
                      </select>
                    )}
                  </button>
                )
              )}
            </b>
          ) : (
            Object.keys(selectBag(currentBag.slice(0, key + 1))).map(
              (check) => (
                <>
                  {key}
                  <button value="lol" onClick={() => addBag(check, key)}>
                    {check}
                  </button>
                </>
              )
            )
          )}
        </ul>
      ))}

      <AddWeapon
        updateInventory={updateInventory}
        setWeaponToAdd={setWeaponToAdd}
        charId={characterId}
      />
      <DisplayWeapon
        delWeapon={viewDeleteItem}
        characterWeapon={character.weapon}
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
