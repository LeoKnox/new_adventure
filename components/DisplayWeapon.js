import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({
  delWeapon,
  viewDeleteWeapon,
  characterWeapon,
}) => {
  const selectActiveWeapon = () => {
    console.log("active weapon")
  }
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, weaponId) => (
          <li>
            <form>
              <button style={{
                background: armorId == selectedArmor ? "blue" : "red",
              }}
              onClick={() => selectActiveWeapon(weaponId)}>
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
