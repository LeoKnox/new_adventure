import { useState } from "react";
import { getSelected } from "./characterData.js";

export default DisplayWeapon = ({
  delWeapon,
  charId,
  characterWeapon,
  setSelectedArmor,
}) => {
  let selectedWeapon = getSelected("selectedArmor", charId);
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
                onClick={() => selectActiveArmor(armorId, "selectedWeapon")}
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
