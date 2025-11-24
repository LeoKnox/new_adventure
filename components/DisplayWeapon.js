import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeaponPage = (id) => {
    console.log("delete weapon");
    //console.log(e.target.id);
    //let temp = e.target.id;
    deleteWeapon(id);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
            {weapon}
            <button id={id} onClick={(e) => deleteWeaponPage(e.target.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
