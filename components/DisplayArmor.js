export default DisplayArmor = ({ characterArmor }) => {
  console.log("display armor");
  console.log(characterArmor);
  return (
    <>
      <ul>
        {characterArmor?.map((armor) => (
          <li>{armor}</li>
        ))}
      </ul>
    </>
  );
};
