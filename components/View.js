import { useState, useEffect } from "react";
import { singleCharacter, addWeapon, addInventory } from "./characterData.js";
import AddArmor from "./AddArmor.js";
import AddWeapon from "./AddWeapon.js";
import DisplayArmor from "./DisplayArmor.js";
import DisplayWeapon from "./DisplayWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const updateWeapon = (newWeapon = "bat") => {
    addWeapon(characterId, newWeapon);
    setCharacter(singleCharacter(characterId));
  };
  const updateInventory = (type = "armor", newItem = "leather") => {
    console.log("inventory");
    addInventory();
  };
  useEffect(() => {
    let temp = {};
    temp = singleCharacter(characterId);
    setCharacter(temp);
  }, []);

  return (
    <>
      <h3>Character</h3>
      <p>Name: {character.name}</p>
      <p>{character.weapon}</p>
      <p>Lvl: {character.lvl}</p>
      <p>Atk: {character.atk}</p>
      <p>Def: {character.def}</p>
      <AddWeapon
        characterId={characterId}
        updateWeapon={updateWeapon}
        characterWeapons={character.weapon}
      />
      <DisplayWeapon characterWeapon={character.weapon} />
      <AddArmor updateInventory={updateInventory} />
      <DisplayArmor characterArmor={character.armor} />
    </>
  );
};
