import { useState } from "react";

export default AddWeapon = ({ updateWeapon, characterWeapons }) => {
  const [listWeapon, setListWeapon] = useState("kama");
  // will set state to first on weapon list
  const addNewWeapon = () => {
    updateWeapon(listWeapon);
  };
  return (
    <div>
      <p>Add {listWeapon}</p>
      <br />
      <select onChange={(e) => setListWeapon(e.target.value)}>
        <option>kama</option>
        <option>sai</option>
      </select>
      <br />
      <button onClick={addNewWeapon}>Add Weapon</button>
    </div>
  );
};
