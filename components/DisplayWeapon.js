import { useState } from "react";
import { getSelected } from "./characterData.js";

export default DisplayWeapon = ({
  delWeapon,
  charId,
  characterWeapon,
  setSelectedArmor,
}) => {
  let selectedWeapon = getSelected("selectedArmor", charId);
  const [newWeapon, setNewWeapon] = useState("pike");
  const selectActiveWeapon = () => {
    console.log("active weapon");
    getSelected("selectedWeapon", charId);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, weaponId) => (
          <li>
            <form>
              <button
                style={{
                  background: weaponId == selectedWeapon ? "blue" : "red",
                }}
                onClick={() => selectActiveWeapon(weaponId)}
              >
                {weapon}
              </button>
              <button
                id={weaponId}
                onClick={() => delWeapon(weaponId, "weapon")}
              >
                delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};
