import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({
  delWeapon,
  viewDeleteWeapon,
  characterWeapon,
}) => {
  const deleteWeaponPage = (id) => {
    console.log("delete weapon");
    viewDeleteWeapon(id);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, weaponId) => (
          <li>
            <form>
              {weapon}
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
