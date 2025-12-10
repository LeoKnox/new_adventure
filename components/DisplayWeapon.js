import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ viewDeleteWeapon, characterWeapon }) => {
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
              <button id={weaponId} onClick={(e) => deleteWeaponPage(e.target.id)}>
                delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};
