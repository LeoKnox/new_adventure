import { getSelected, selectItem } from "./characterData.js";
export default DisplayArmor = ({ characterArmor, delArmor }) => {
  let selectedArmor = getSelected("selectedArmor");
  const selectActiveArmor = (itemId) => {
    console.log("select active armor");
    selectItem("armor", itemId, CharacterId);
  };
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button
              style={{ background: armorId == selectedArmor ? "blue" : "red" }}
              onClick={() => selectActiveArmor(armorId)}
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
