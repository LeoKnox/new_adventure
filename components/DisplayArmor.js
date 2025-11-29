export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <li>
            <input type="radio" id="armor" name="currentArmor" value="test" />
            {armor}
            <button onClick={() => delArmor(armorId)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
