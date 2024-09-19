import { useState } from "react";
import {
  addCharacter,
  allCharacters,
  deleteCharacter,
} from "./characterData.js";
import Delete from "./Delete.js";
import NewCharacter from "./NewCharacter.js";
import View from "./View.js";

export default Play = () => {
  const [characters, setCharacters] = useState(allCharacters());
  const [characterId, setCharacterId] = useState(0);
  const showCharacter = (id) => {
    setCharacterId(id);
  };
  const submitCharacter = () => {
    setCharacters(allCharacters());
  };
  const removeCharacter = (deleteId) => {
    deleteCharacter(deleteId);
    setCharacters(allCharacters());
  };
  return (
    <>
      <h2>Play game</h2>

      <table>
        <tr>
          <th>Name</th>
          <th>lvl</th>
          <th>atk</th>
          <th>def</th>
          <th>actions</th>
        </tr>
        {characters.map((character) => (
          <tr>
            <td>{character.name}</td>
            <td>{character.lvl}</td>
            <td>{character.atk}</td>
            <td>{character.def}</td>
            <td>
              <button onClick={() => showCharacter(character.id)}>View</button>
              <button onClick={() => removeCharacter(character.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}

        <NewCharacter submitCharacter={submitCharacter} />
      </table>
      {characterId == 0 || <View characterId={characterId} />}
    </>
  );
};
