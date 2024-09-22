import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({ setPlayerId }) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  return (
    <>
      <p>select character</p>
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
