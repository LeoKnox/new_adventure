import { useState } from "react";
import { useMob } from "./MobContext.js";
import { addMonsterContext } from "./RoomContext.js";
import {
  deleteMonsterDD,
  addMonsterDD,
  editMonsterDD,
  singleRoom,
} from "./dungeonData.js";

export default RoomMonsters = ({ monsters, mId }) => {
  //const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  //const [mobSelect, setMobSelect] = useState(2);
  //const { doors, incDoors } = useMob();
  return (
    <>
      <p>room monsters</p>
      {JSON.stringify(monsters)}
      {Object.keys(monsters).map((monster) => (
        <>
          <p>
            X:
            <input
              type="number"
              id={key}
              name="x"
              value={monster.split(":")[1]}
            />
          </p>
          <p>
            Y: <input type="number" value={monster.split(":")[0]} />
          </p>
          <p>
            Monster: <input type="number" value={monsters[monster]} />
            {monsters[monster]}
          </p>
        </>
      ))}
    </>
  );
};
