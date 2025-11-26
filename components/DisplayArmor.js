export default DisplayArmor = ({ characterArmor, deleteItem }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor) => (
          <li>
            {armor}
            <button onClick={deleteItem(1, "armor")}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
