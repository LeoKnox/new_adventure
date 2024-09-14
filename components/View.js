import { singleCharacter } from "./characterData.js";

export default View = ({ characterId }) => {
  console.log(JSON.stringify({ singleCharacter }));
  return (
    <>
      <h3>Character {characterId}</h3>
    </>
  );
};
