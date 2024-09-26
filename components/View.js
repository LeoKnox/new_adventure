import { useState, useEffect } from "react";
import { singleCharacter, addWeapon } from "./characterData.js";
import AddWeapon from "./AddWeapon.js";

export default View = ({ characterId }) => {
  // usecallback
  const [character, setCharacter] = useState(singleCharacter(characterId));
  useEffect(() => {
    setCharacter(singleCharacter(characterId));
  }, [character]);
  const updateWeapon = () => {
    addWeapon(characterId);
    console.log("update weapon run");
  };

  return (
    <>
      <h3>Character</h3>
      <p>Name: {character.name}</p>
      <p>Lvl: {character.lvl}</p>
      <p>Atk: {character.atk}</p>
      <p>Def: {character.def}</p>
      <AddWeapon
        characterId={characterId}
        updateWeapon={updateWeapon}
        characterWeapons={character.weapon}
      />
      <ul>
        {character.weapon.map((weapon) => (
          <li>{weapon}</li>
        ))}
      </ul>
    </>
  );
};
