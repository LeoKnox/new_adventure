export default DisplayArmor = ({ characterArmor, delArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor, armorId) => (
          <li>
            {armor}
            <button onClick={() => delArmor(armorId)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
