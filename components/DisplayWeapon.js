import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({
  characterId,
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
                onClick={() => delWeapon(weaonId)}
                //onClick={(e) => deleteWeaponPage(e.target.id)}
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
