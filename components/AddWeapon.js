import { addWeapon } from "./characterData.js";

export default AddWeapon = () => {
  return (
    <>
      <button onClick={() => addWeapon()}>Add Weapon</button>
    </>
  );
};
