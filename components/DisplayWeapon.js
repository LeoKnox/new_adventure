export default DisplayWeapon = ({ characterWeapon }) => {
  console.log(characterWeapon);
  return (
    <div>
      <ul>
        {characterWeapon.map((weapon) => (
          <li>{weapon}</li>
        ))}
      </ul>
    </div>
  );
};
