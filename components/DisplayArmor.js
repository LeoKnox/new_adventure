export default DisplayArmor = ({ characterArmor }) => {
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
