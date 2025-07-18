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
  roomId,
  editMobs,
  roomEdit,
  setRoomEdit,
  test,
}) => {
  console.log("room");
  const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  const [newMob, setNewMob] = useState({ x: 0, y: 0 });
  const { doors, incDoors } = useMob();
  const extDelete = (value) => {
    {
      deleteMonsterDD(value, roomId);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extAdd = (newMobId, newMobValue) => {
    console.log("ext add");
    console.log(newMobValue);
    {
      addMonsterDD(roomId, doors, newMobValue);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extEdit = (value) => {
    console.log("ext edit");
    console.log(value);
    editMonsterDD();
  };
  const deleteMonster = (key) => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[key];
    temp.monsters = tempMobs;
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
          <button onClick={() => extDelete(value[0])}>X</button>
          <button onClick={() => extEdit(value)}>Edit</button>
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
        <button onClick={() => extAdd([`3:3`], 1)}>create mob</button>
      </p>
    </>
  );
};
