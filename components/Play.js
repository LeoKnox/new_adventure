import { allCharacters } from "./characterData.js";

export default Play = () => {
  let characters = allCharacters();
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
              <button>View</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};
