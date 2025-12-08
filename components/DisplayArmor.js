import { getSelected, selectItem } from "./characterData.js";
export default DisplayArmor = ({
  selectActiveArmor,
  characterArmor,
  delArmor,
  charId,
}) => {
  let selectedArmor = getSelected("selectedArmor", charId);
  console.log(characterArmor);
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button
              style={{
                background: armorId == selectedArmor ? "blue" : "red",
              }}
              onClick={() => selectActiveArmor(armorId)}
            >
              {armor}
            </button>
            <button onClick={() => delArmor(charId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
