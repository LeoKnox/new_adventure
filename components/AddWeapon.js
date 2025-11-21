import { useState } from "react";

export default AddWeapon = ({
  updateInventory,
  setWeaponToAdd,
  characterWeapons,
}) => {
  const [listWeapon, setListWeapon] = useState("kama");
  availableWeapons = ["saber", "cutless"];
  // will set state to first on weapon list
  const addNewWeapon = () => {
    updateInventory("weapon", listWeapon);
  };
  return (
    <div>
      <p>Add {listWeapon}</p>
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
