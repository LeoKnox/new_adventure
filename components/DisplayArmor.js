export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <li>
            <input type="radio" id="armor" name="currentArmor" value={armor} />
            {armor}
            <button onClick={() => delArmor(armorId)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
