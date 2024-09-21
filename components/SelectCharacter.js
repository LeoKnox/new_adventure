import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({ setPlayerId }) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  const [character, setCharacter] = useState("midori");
  return (
    <>
      <p>select character</p>
      <p>{character}</p>
      <select onChange={(char) => setCharacter(char.id)}>
        {characterList.map((character) => (
          <option id={character.id}>{character.name}</option>
        ))}
      </select>
    </>
  );
};
