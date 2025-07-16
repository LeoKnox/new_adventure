import { useState } from "react";
import { useMob } from "./MobContext.js";
import { addMonsterContext } from "./RoomContext.js";
import { deleteMonsterDD, addMonsterDD, singleRoom } from "./dungeonData.js";

export default RoomMonsters = ({
  room,
  editMobs,
  roomEdit,
  setRoomEdit,
  test,
}) => {
  console.log("room");
  const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  const [newMob, setNewMob] = useState({ x: 0, y: 0 });
  const { doors, incDoors } = useMob();
  console.table(mobValues);
  const extDelete = (temp) => {
    {
      deleteMonsterDD();
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const deleteMonster = (key) => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[key];
    temp.monsters = tempMobs;
    setRoomEdit(temp);
  };
  const addContextMob = () => {
    console.log("add context mob");
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    tempMobs = { [`1:1`]: 2 };
    temp = { ...temp, monsters: tempMobs };
    setRoomEdit(temp);
  };
  const addMob = (newMob) => {
    console.log("add mob");
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    tempMobs[`${newMob.y}"{newMob.x}`] = 1;
    setRoomEdit(temp);
  };
  return (
    <>
      <p>room monsters</p>
      <button onClick={() => deleteMonster()}>update</button>
      {Object.entries(mobValues).map(([key, value]) => (
        <p>
          <label>
            Mob X
            <input
              type="number"
              onChange={(e) => editMobs(key, value)}
              value={value[0].split(":")[0]}
            />
          </label>
          <label>
            Mob Y
            <input
              type="number"
              onChange={(e) =>
                setMobValues((prevMob) => {
                  const result = [...prevMob];
                  result[key] = e.target.value;
                  return result;
                })
              }
              value={value[0].split(":")[1]}
            />
          </label>
          <label>
            Mob type
            <input type="number" value={value[1]} />
          </label>
          <button onClick={() => deleteMonster(key)}>X</button>
          <button onClick={() => extDelete(1)}>y</button>
        </p>
      ))}
      {JSON.stringify(mobValues)}
      <p>
        <label>
          New Mob X
          <input
            type="number"
            className="mobInput"
            value={doors[0]}
            onChange={(e) => incDoors(e.target.value, 0)}
          />
        </label>
        <label>
          New Mob Y
          <input
            type="number"
            className="mobInput"
            value={doors[1]}
            onChange={(e) => incDoors(e.target.value, 1)}
          />
        </label>
        {doors}
        <button onClick={addMonsterDD({ [`3:3`]: 1 })}>create mob</button>
      </p>
    </>
  );
};
