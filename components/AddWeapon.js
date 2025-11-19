import { useState } from "react";

export default AddWeapon = ({
  updateInventory,
  setWeaponToAdd,
  characterWeapons,
}) => {
  const [listWeapon, setListWeapon] = useState("kama");
  // will set state to first on weapon list
  const addNewWeapon = () => {
    updateInventory("weapon", listWeapon);
  };
  return (
    <div>
      <p>Add {listWeapon}</p>
      <br />
      <select onChange={(e) => setWeaponToAdd(e.target.value)}>
        <option>kama</option>
        <option>sai</option>
      </select>
      <br />
      <button onClick={addNewWeapon}>Add Weapon</button>
    </div>
  );
};
