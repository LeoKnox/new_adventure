import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({ setPlayerId }) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  const [cr, setCharacter] = useState(0);
  return (
    <>
      <p>select character</p>
      <p>{cr}</p>
      <select onChange={(e) => setPlayerId(e.target.value)}>
        <option disabled selected>
          Select Character
        </option>
        {characterList.map((character) => (
          <option value={character.id}>{character.name}</option>
        ))}
      </select>
    </>
  );
};
