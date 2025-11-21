export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = () => {
    console.log("delete weapon");
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon) => (
          <li>
            {weapon}
            <button onClick={deleteWeapon}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
