import { singleCharacter } from "./characterData.js";

export default View = ({ characterId }) => {
  const character = singleCharacter(characterId);
  return (
    <>
      <h3>Character</h3>
      <p>Name: {character.name}</p>
      <p>Lvl: {character.lvl}</p>
      <p>Atk: {character.atk}</p>
      <p>Def: {character.def}</p>
    </>
  );
};
