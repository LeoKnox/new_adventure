export default DisplayArmor = ({ characterArmor, deleteItem }) => {
  const delArmor = () => {
    console.log("del armor");
    //deleteItem(1, (reference = "armor"))
  };
  return (
    <>
      <ul>
        {characterArmor?.map((armor) => (
          <li>
            {armor}
            <button onClick={delArmor}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
