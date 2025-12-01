export default DisplayArmor = ({ characterArmor, delArmor }) => {
  let selectedArmor = 1;
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
