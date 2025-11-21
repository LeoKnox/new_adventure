export default DisplayWeapon = ({ characterWeapon }) => {
  const deleteWeapon = () => {
    console.log("delete weapon");
  };
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon, id) => (
          <li>
             {weapon}
            <button id={id} onClick={deleteWeapon}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
