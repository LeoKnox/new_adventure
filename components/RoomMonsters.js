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
  const [mobSelect, setMobSelect] = useState(0);
  const { doors, incDoors } = useMob();
  console.log("room edit");
  console.log(roomEdit);
  const extDelete = (value) => {
    {
      deleteMonsterDD(value, roomId);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extAdd = (newMobValue) => {
    console.log("ext add");
    {
      addMonsterDD(roomId, doors, newMobValue);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extEdit = (value, key) => {
    console.log("ext edit");
    console.log(value);
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    tempMobs[value] = 0;
    temp.monsters = tempMobs;
    editMonsterDD(value, key, roomId, mobValues);
    setMobValues(Object.entries(roomEdit.monsters));
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
          <button
            id={roomEdit.monsters}
            onClick={() => extEdit(value, mobValues[key][0])}
          >
            Edit {roomEdit.monsters[key]}
          </button>
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
        <label>
          New Mob
          <select
            id="mobSelect"
            name="mobSelect"
            value={mobSelect}
            onChange={() => setMobSelect(1)}
          >
            <option value={`1`}>1</option>
          </select>
        </label>
        {doors}
        <button onClick={() => extAdd([`3:3`], 0)}>create mob</button>
      </p>
    </>
  );
};
