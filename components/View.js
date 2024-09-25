import { useState, useEffect } from "react";
import { singleCharacter } from "./characterData.js";
import AddWeapon from "./AddWeapon.js";

export default View = ({ characterId }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    setCharacter(singleCharacter(characterId));
  }, [character]);

  return (
    <>
      <h3>Character</h3>
      <p>Name: {character.name}</p>
      <p>Lvl: {character.lvl}</p>
      <p>Atk: {character.atk}</p>
      <p>Def: {character.def}</p>
      <AddWeapon characterId={characterId} />
      <ul>
        {character.weapon.map((weapon) => (
          <li>{weapon}</li>
        ))}
      </ul>
    </>
  );
};
