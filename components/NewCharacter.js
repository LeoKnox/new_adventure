import { useState } from "react";

export default NewCharacter = () => {
  const [name, setName] = useState("");
  const [lvl, setLvl] = useState(1);
  const [atk, setAtk] = useState(10);
  const [def, setDef] = useState(10);
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
          <input
            type="number"
            value={lvl}
          />
          </td>
          <td>
          <input
            type="number"
            value={atk}
            onChange={(e) => setName(e.target.value)}
          />
          </td>
          <td>
          <input
            type="number"
            value={def}
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
