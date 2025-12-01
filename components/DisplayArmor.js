import { getSelected } from "./characterData.js";
export default DisplayArmor = ({ characterArmor, delArmor }) => {
  let selectedArmor = getSelected("selectedArmor");
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button
              style={{ background: armorId == selectedArmor ? "blue" : "red" }}
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
