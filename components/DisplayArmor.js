export default DisplayArmor = ({ characterArmor }) => {
  return (
    <>
      <ul>
        {characterArmor?.map((armor) => (
          <li>
            {armor}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
