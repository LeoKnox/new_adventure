export default DisplayWeapon = ({ characterWeapon }) => {
  return (
    <div>
      <ul>
        {characterWeapon?.map((weapon) => (
          <li>
            {weapon}
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
