import { useState, useEffect } from "react";
import { singleCharacter, addWeapon } from "./characterData.js";
import AddWeapon from "./AddWeapon.js";

export default View = ({ characterId }) => {
  // usecallback
  const [character, setCharacter] = useState(singleCharacter(characterId));
  useEffect(() => {
    let temp = singleCharacter(characterId);
    setCharacter(temp);
    //return character;
    console.log("charactered");
  }, [character]);
  const updateWeapon = (newWeapon = "bat") => {
    temp = addWeapon(characterId, newWeapon);
    setCharacter(temp);
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
