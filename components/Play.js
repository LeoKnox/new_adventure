import { useState } from "react";
import { allCharacters } from "./characterData.js";
import View from "./View.js";

export default Play = () => {
  let characters = allCharacters();
  const [characterView, setCharacterView] = useState(true);
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
              <button onClick={() => setCharacterView(!characterView)}>
                View
              </button>
            </td>
          </tr>
        ))}
      </table>
      {characterView || <View />}
    </>
  );
};
