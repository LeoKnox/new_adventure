export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <button>{armor}</button>
            <button onClick={() => delArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
