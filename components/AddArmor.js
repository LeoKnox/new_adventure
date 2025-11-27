import { useState } from "react";

export default AddArmor = ({ updateInventory }) => {
  const [newArmor, setNewArmor] = useState("Leather");
  const availableArmor = ["leather", "chain", "plate"];
  const addArmor = () => {
    updateInventory((reference = "armor"), newArmor);
  };
  return (
    <>
      {newArmor}
      <select onChange={(e) => setNewArmor(e.target.value)}>
        {availableArmor.map((i) => (
          <option>{i}</option>
        ))}
      </select>
      <br />
      <button onClick={addArmor}>Add </button>
      <br />
    </>
  );
};
