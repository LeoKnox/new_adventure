export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <div>
            <input
              type="radio"
              name="currentArmor"
              value="armor"
              onChange={() => console.log("Value changed!")}
            />
            {armor}
            <button onClick={() => delArmor(armorId)}>delete</button>
          </div>
        ))}
      </ul>
    </>
  );
};
