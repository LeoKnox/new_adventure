import { useState } from "react";
import { useMob } from "./MobContext.js";
import { addMonsterContext } from "./RoomContext.js";
import {
  deleteMonsterDD,
  addMonsterDD,
  editMonsterDD,
  singleRoom,
} from "./dungeonData.js";

export default RoomMonsters = ({
  monsters,
  setTempMonsters,
  mId,
  changeMob,
}) => {
  //const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  //const [mobSelect, setMobSelect] = useState(2);
  //const { doors, incDoors } = useMob();
  const [newMob, setNewMob] = useState({ x: 0, y: 0, mob: 1 });
  const createMonster = (e) => {
    console.log("create room");
    e.preventDefault();
    let temp = `${newMob.x}:${newMob.y}`;
    monsters = { ...monsters, [temp]: newMob.mob };
    setTempMonsters(monsters);
  };
  const updateMob = (e) => {
    let temp = { ...newMob };
    temp[e.target.name] = e.target.value;
    setNewMob(temp);
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
          <input
            type="number"
            name="x"
            value={newMob.x}
            onChange={(e) => updateMob(e)}
          />
          <label>Y</label>
          <input type="number" name="y" value={newMob.y} />
          <label>Monster</label>
          <input type="number" name="mob" value={newMob.mob} />
        </p>
        <button type="submit">Create</button>
      </form>
    </>
  );
};
