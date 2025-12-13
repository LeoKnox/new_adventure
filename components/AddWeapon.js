import { useState } from "react";
import { addInventory } from "./characterData.js";

export default AddWeapon = ({ updateInventory, setWeaponToAdd, charId }) => {
  availableWeapons = ["saber", "cutless"];
  const [localWeapon, setLocalWeapon] = useState(availableWeapons[0]);
  setWeaponToAdd(availableWeapons[0]);
  const addNewWeapon = () => {
    //updateInventory("weapon");
    console.log("add new weapon");
    console.log(localWeapon);
    updateInventory("weapon", localWeapon);
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
