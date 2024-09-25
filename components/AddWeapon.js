import { addWeapon } from "./characterData.js";

export default AddWeapon = ({ characterId, characterWeapons }) => {
  return (
    <>
      {characterWeapons}
      <button onClick={() => addWeapon(characterId)}>Add Weapon</button>
    </>
  );
};
