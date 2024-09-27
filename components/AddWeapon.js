import { useState } from "react";
import { addWeapon } from "./characterData.js";

export default AddWeapon = ({
  characterId,
  updateWeapon,
  characterWeapons,
}) => {
  const [listWeapon, setListWeapon] = useState("");
  return (
    <>
      {characterWeapons}
      <br />
      <select>
        <option>kama</option>
        <option>sai</option>
      </select>
      <br />
      <button onClick={() => characterWeapons.push("migi")}>right</button>
      <button onClick={() => updateWeapon()}>Add Weapon</button>
    </>
  );
};
