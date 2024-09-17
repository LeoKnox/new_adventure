import { useState } from "react";
import { addCharacter, allCharacters } from "./characterData.js";

export default NewCharacter = ({ setCharacters }) => {
  const [name, setName] = useState("");
  const [lvl, setLvl] = useState(1);
  const [atk, setAtk] = useState(10);
  const [def, setDef] = useState(10);
  const makeCharacter = ({ setCharacters }) => {
    const temp = { name: name, lvl: lvl, atk: atk, def: def };
    addCharacter(temp);
    setCharacters(allCharacters);
  };
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
        <td>{lvl}</td>
        <td>
          <input
            type="number"
            value={atk}
            onChange={(e) => setAtk(e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            value={def}
            onChange={(e) => setDef(e.target.value)}
          />
        </td>
        <td>
          <button onClick={makeCharacter}>Make Character</button>
        </td>
      </tr>
    </>
  );
};
