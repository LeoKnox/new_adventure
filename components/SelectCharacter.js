import {useState} from "react";
import {allCharacters} from "./characterData.js";

export default SelectCharacter = () => {
    const [characterList, setCharacterList] = useState(allCharacters());
  return (
    <>
      <p>select character</p>
    </>
  );
};
