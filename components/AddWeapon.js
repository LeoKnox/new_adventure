import { addWeapon } from "./characterData.js";

export default AddWeapon = ({ characterId, characterWeapons }) => {
  return (
    <>
      {characterWeapons}
      <button onClick={() => characterWeapons.push("migi")}>right</button>
      <button onClick={() => addWeapon(characterId)}>Add Weapon</button>
    </>
  );
};
