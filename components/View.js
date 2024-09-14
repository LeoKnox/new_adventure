import { singleCharacter } from "./characterData.js";

export default View = ({ characterId }) => {
  const character = singleCharacter(characterId);
  return (
    <>
      <h3>Character</h3>
      <p>{character.name}</p>
    </>
  );
};
