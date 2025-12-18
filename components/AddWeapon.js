import { useState } from "react";

export default AddWeapon = ({ updateInventory, setWeaponToAdd, charId }) => {
  availableWeapons = ["saber", "cutless"];
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
