export default DisplayWeapon = ({ characterWeapon }) => {
  return (
    <div>
      <ul>
        {
          (characterWeapon.map = (weapon) => {
            <li>{weapon}</li>;
          })
        }
      </ul>
    </div>
  );
};
