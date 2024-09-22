import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({ setPlayerId }) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  const [cr, setCharacter] = useState(0);
  return (
    <>
      <p>select character</p>
      <p>{cr}</p>
      <select onChange={(e) => setCharacter(e.target.value)}>
        {characterList.map((character) => (
          <option value={character.id}>{character.name}</option>
        ))}
      </select>
    </>
  );
};
