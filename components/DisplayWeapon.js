import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ viewDeleteWeapon, characterWeapon }) => {
  const deleteWeaponPage = (id) => {
    console.log("delete weapon");
    viewDeleteWeapon(id);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
            <form>
            {weapon}
            <input
              type="radio"
              name="currentArmor"
              value="armor"
              onChange={() => console.log("Value changed!")}
            />
            <button id={id} onClick={(e) => deleteWeaponPage(e.target.id)}>
              delete
            </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};
