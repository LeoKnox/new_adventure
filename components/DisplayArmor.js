import { getSelected, selectItem } from "./characterData.js";
export default DisplayArmor = ({ characterArmor, delArmor }) => {
  let selectedArmor = getSelected("selectedArmor");
  const selectActiveArmor = () => {
    console.log("select active armor");
  };
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button
              style={{ background: armorId == selectedArmor ? "blue" : "red" }}
              onClick={selectActiveArmor}
            >
              {armor}
            </button>
            <button onClick={() => delArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
