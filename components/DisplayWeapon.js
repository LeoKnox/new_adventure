import { useState } from "react";
import { getSelected } from "./characterData.js";
import { retreiveWeapons } from "./characterData.js";

export default DisplayWeapon = ({
  delWeapon,
  charId,
  characterWeapon,
  selectActiveArmor,
}) => {
  let selectedWeapon = getSelected("selectedWeapon", charId);
  const [allWeapons, setAllWeapons] = useState(retreiveWeapons);
  return (
    <div>
      <ul>
        {allWeapons?.map((weapon, weaponId) => (
          <li>
            <form>
              <button
                style={{
                  background: weaponId == selectedWeapon ? "blue" : "red",
                }}
                onClick={() => selectActiveArmor(weaponId, "selectedWeapon")}
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
