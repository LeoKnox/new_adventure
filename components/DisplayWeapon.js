import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = (e) => {
    console.log("delete weapon");
    console.log(e.target.id);
    deleteWeapon();
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
            {weapon}
            <button id={id} onClick={deleteWeapon}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
