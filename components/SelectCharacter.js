import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({ setPlayerId }) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  const [cr, setCharacter] = useState("midori");
  return (
    <>
      <p>select character</p>
      <p>{cr}</p>
      <select onChange={(char) => setCharacter(char.value)}>
        {characterList.map((character) => (
          <option value={character.name}>{character.name}</option>
        ))}
      </select>
    </>
  );
};
