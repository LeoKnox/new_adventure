import { addWeapon } from "./characterData.js";

export default AddWeapon = ({ characterId }) => {
  return (
    <>
      <button onClick={() => addWeapon(characterId)}>Add Weapon</button>
    </>
  );
};
