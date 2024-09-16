import { useState } from "react";
import { addCharacter, allCharacters } from "./characterData.js";
import NewCharacter from "./NewCharacter.js";
import View from "./View.js";

export default Play = () => {
  const [characters, setCharacters] = useState(allCharacters());
  const [characterView, setCharacterView] = useState(true);
  const [characterId, setCharacterId] = useState(0);
  const [newRoom, setNewRoom] = useState({});
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
              <button onClick={() => setCharacterId(character.id)}>View</button>
            </td>
          </tr>
        ))}

        <NewCharacter />
      </table>
      {characterId == 0 || <View characterId={characterId} />}
    </>
  );
};
