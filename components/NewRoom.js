import { useState } from "react";

export default NewRoom = () => {
  const [name, setName] = useState("");
  return (
    <>
      <td>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
    </>
  );
};
