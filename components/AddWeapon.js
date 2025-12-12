import { useState } from "react";

export default AddWeapon = ({ updateInventory, setWeaponToAdd }) => {
  availableWeapons = ["saber", "cutless"];
  setWeaponToAdd(availableWeapons[0]);
  const addNewWeapon = () => {
    updateInventory("weapon");
  };
  return (
    <div>
      <br />
      <select onChange={(e) => setWeaponToAdd(e.target.value)}>
        {availableWeapons.map((i) => (
          <option>{i}</option>
        ))}
      </select>
      <br />
      <button onClick={addNewWeapon}>Add Weapon</button>
    </div>
  );
};
