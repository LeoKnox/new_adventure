import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = (e) => {
    console.log("delete weapon");
    console.log(e.target.id);
    deleteWeapon(e.target.id);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
            {weapon}
            <button id={id} onClick={(e) => deleteWeapon(e)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
