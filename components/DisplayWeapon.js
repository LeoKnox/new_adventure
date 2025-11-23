import { deleteWeapon } from "./characterData.js";

export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = (xId) => {
    console.log("delete weapon");
    console.log(xId);
    let temp = xId;
    deleteWeapon(temp);
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
            {weapon}
            <button id={id} onClick={(e) => deleteWeapon(e.target.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
