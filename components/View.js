import { useState, useEffect } from "react";
import { singleCharacter, addWeapon, addInventory } from "./characterData.js";
import AddArmor from "./AddArmor.js";
import AddWeapon from "./AddWeapon.js";
import DisplayArmor from "./DisplayArmor.js";
import DisplayWeapon from "./DisplayWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  const updateInventory = (type = "armor", item = "leather") => {
    addInventory(characterId, type, item);
    setCharacter(singleCharacter(characterId));
  };
  useEffect(() => {
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
      <AddWeapon updateInventory={updateInventory} />
      <DisplayWeapon characterWeapon={character.weapon} />
      <AddArmor updateInventory={updateInventory} />
      <DisplayArmor characterArmor={character.armor} />
    </>
  );
};
