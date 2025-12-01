export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button style={{ background: armorId == 1 ? "blue" : "red" }}>
              {armor}
            </button>
            <button onClick={() => delArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
