import { useState } from "react";
import { allCharacters } from "./characterData.js";
import View from "./View.js";

export default Play = () => {
  let characters = allCharacters();
  const [characterView, setCharacterView] = useState(true);
  const [characterId, setCharacterId] = useState(0);
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
      </table>
      {characterId}
      {characterId == 0 || <View characterId={characterId} />}
    </>
  );
};
