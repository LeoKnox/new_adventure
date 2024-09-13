import allCharacters from "./characterData.js";

export default Play = () => {
  return (
    <>
      <h2>Play game</h2>
      {allCharacters.map((character) => {
        <p>{character.name}</p>;
      })}
    </>
  );
};
