import { useState } from "react";

export default NewCharacter = () => {
  const [name, setName] = useState("");
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        <td>
          <button>AddCharacter</button>
        </td>
      </tr>
    </>
  );
};
