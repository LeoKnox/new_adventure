import { useState } from "react";
import { addWeapon } from "./characterData.js";

export default AddWeapon = ({ updateInventory, setWeaponToAdd }) => {
  availableWeapons = ["saber", "cutless"];
  const [localWeapon, setLocalWeapon] = useState(availableWeapons[0]);
  setWeaponToAdd(availableWeapons[0]);
  const addNewWeapon = () => {
    //updateInventory("weapon");
    addWeapon(1, localWeapon);
  };
  return (
    <div>
      <br />
      <select onChange={(e) => setLocalWeapon(e.target.value)}>
        {availableWeapons.map((i) => (
          <option>{i}</option>
        ))}
      </select>
      <br />
      <button onClick={addNewWeapon}>Add Weapon</button>
    </div>
  );
};
