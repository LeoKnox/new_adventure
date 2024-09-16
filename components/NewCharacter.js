import {useState} from "react";

export default NewCharacter = () => {
    const [name, setName] = useState("new");
  return (
    <>
      <tr>
      <td>
        <input type="text" value={name} />
        </td>
        <td>
          <button>AddCharacter</button>
        </td>
      </tr>
    </>
  );
};
