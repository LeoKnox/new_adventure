export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            {armor}
            <button onClick={() => delArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
