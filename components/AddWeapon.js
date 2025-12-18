import { useState } from "react";
import { retreiveWeapons } from "./characterData.js";

export default AddWeapon = ({ updateInventory, setWeaponToAdd, charId }) => {
  availableWeapons = ["saber", "cutless"];
  console.log("weapon list");
  console.log(retreiveWeapons());
  const [localWeapon, setLocalWeapon] = useState(availableWeapons[0]);
  setWeaponToAdd(availableWeapons[0]);
  const addNewWeapon = () => {
    console.log("add new weapon");
    updateInventory("weapon", localWeapon, localWeapon);
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
