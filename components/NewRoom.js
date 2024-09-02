import { useState } from "react";
import { addRoom } from "./dungeonData.js";

export default NewRoom = () => {
  const [name, setName] = useState("");
  const submit = () => {
    console.log(name);
  };
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
      <button onClick={submit}>submit</button>
    </>
  );
};
