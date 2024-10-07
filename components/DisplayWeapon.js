export default DisplayWeapon = ([characterWeapon]) => {
  console.log(characterWeapon);
  return (
    <div>
      <ul>
        {
          (characterWeapon.map = (weapon, i) => {
            <li key={i}>x{weapon}</li>;
          })
        }
      </ul>
    </div>
  );
};
