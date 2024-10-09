import { useState } from "react";

export default AddArmor = () => {
  const [newArmor, setNewArmor] = useState("Leather");
  return (
    <>
      {newArmor}
      <select onChange={(e) => setNewArmor(e.target.value)}>
        <option>Leather</option>
        <option>Chainmail</option>
      </select>
      <br />
      <button>Add </button>
      <br />
    </>
  );
};
