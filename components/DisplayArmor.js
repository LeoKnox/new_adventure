import { getSelected, selectItem } from "./characterData.js";
export default DisplayArmor = ({
  selectActiveArmor,
  characterArmor,
  delArmor,
}) => {
  let selectedArmor = getSelected("selectedArmor");
  console.log(characterArmor);
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
            <button onClick={() => selectActiveArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
