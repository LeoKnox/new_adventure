import { useState } from "react";

export default AddArmor = () => {
  const [newArmor, setNewArmor] = useState("Leather");
  const addArmor = () => {
    console.log("AA armor");
  };
  return (
    <>
      {newArmor}
      <select onChange={(e) => setNewArmor(e.target.value)}>
        <option>Leather</option>
        <option>Chainmail</option>
      </select>
      <br />
      <button onClick={addArmor}>Add </button>
      <br />
    </>
  );
};
