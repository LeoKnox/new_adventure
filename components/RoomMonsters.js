import { useState } from "react";
import { useMob } from "./MobContext.js";
import { addMonsterContext } from "./RoomContext.js";
import {
  deleteMonsterDD,
  addMonsterDD,
  editMonsterDD,
  singleRoom,
} from "./dungeonData.js";

export default RoomMonsters = ({ monsters, mId, changeMob }) => {
  //const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  //const [mobSelect, setMobSelect] = useState(2);
  //const { doors, incDoors } = useMob();
  const createMonster = (e) => {
    console.log("create room");
    console.log(e.target.name);
  };
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
              id={monster}
              name="x"
              onChange={(e) =>
                changeMob(
                  monster,
                  monsters[monster],
                  e.target.name,
                  e.target.value
                )
              }
              value={monster.split(":")[1]}
            />
          </p>
          <p>
            Y:{" "}
            <input
              type="number"
              id={monster}
              name="y"
              onChange={(e) =>
                changeMob(
                  monster,
                  monsters[monster],
                  e.target.name,
                  e.target.value
                )
              }
              value={monster.split(":")[0]}
            />
          </p>
          <p>
            Monster:{" "}
            <input
              type="number"
              name="monsterValue"
              onChange={(e) =>
                changeMob(
                  monster,
                  monsters[monster],
                  e.target.name,
                  e.target.value
                )
              }
              value={monsters[monster]}
            />
            {monsters[monster]}
          </p>
        </>
      ))}
      <p>new room</p>
      <form onSubmit={createMonster}>
        <p>
          <label>X</label>
          <input type="number" name="X" placeholder="0" />
          <label>Y</label>
          <input type="number" name="Y" placeholder="0" />
          <label>Monster</label>
          <input type="number" name="monster" placeholder="1" />
        </p>
        <button type="submit">Create</button>
      </form>
    </>
  );
};
