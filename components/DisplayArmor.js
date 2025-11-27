export default DisplayArmor = ({ characterArmor, deleteItem }) => {
  const delArmor = (delId) => {
    console.log("del armor");
    deleteItem(delId, 1, (reference = "armor"));
  };
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
