import { allCharacters } from "./characterData.js";

export default Play = () => {
let characters = allCharacters();
  return (
    <>
      <h2>Play game</h2>
      {characters.map((character) => (
        <p>{character.name}</p>
      ))}
    </>
  );
};
