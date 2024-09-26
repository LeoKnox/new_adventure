import { addWeapon } from "./characterData.js";

export default AddWeapon = ({
  characterId,
  updateWeapon,
  characterWeapons,
}) => {
  return (
    <>
      {characterWeapons}
      <button onClick={() => characterWeapons.push("migi")}>right</button>
      <button onClick={() => updateWeapon(characterId)}>Add Weapon</button>
    </>
  );
};
