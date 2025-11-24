import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = (e) => {
    console.log("delete weapon");
    //console.log(e.target.id);
    let temp = e.target.id;
    deleteWeapon(temp);
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
