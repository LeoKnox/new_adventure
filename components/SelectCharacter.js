import { useState } from "react";
import { allCharacters } from "./characterData.js";

export default SelectCharacter = ({setPlayerId}) => {
  const [characterList, setCharacterList] = useState(allCharacters());
  return (
    <>
      <p>select character</p>
      {characterList.map((character) => (
        <p>{character.name}</p>
      ))}
    </>
  );
};
