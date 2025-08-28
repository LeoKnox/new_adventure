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
  const [mobSelect, setMobSelect] = useState(2);
  const { doors, incDoors } = useMob();
  console.log("room edit");
  console.log(roomEdit);
  const extDelete = (value) => {
    {
      deleteMonsterDD(value, roomId);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extAdd = (newMobValue, mobSelect) => {
    console.log("ext add");
    {
      addMonsterDD(roomId, doors, newMobValue, mobSelect);
    }
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const extEdit = (value, key) => {
    console.log("ext edit");
    console.log(roomEdit.monsters);
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    tempMobs[value] = 0;
    temp.monsters = tempMobs;
    let newMV = roomEdit.monsters;
    editMonsterDD(value, key, roomId, newMV, mobValues);
    setMobValues(Object.entries(roomEdit.monsters));
  };
  const deleteMonster = (key) => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[key];
    temp.monsters = tempMobs;
    setRoomEdit(temp);
  };
  const changeMob = (newVal, key, value, name) => {
    console.log("change mob");
    console.log(`key ${newVal} - value ${value} - name ${name}`);
    console.log(mobValues);
    let tempMv = { ...mobValues };
    let temp = value[0].split(":");
    if (name == "x") {
      console.log("X");
      temp[0] = newVal;
      delete tempMv[key];
      tempMv[key] = [`${temp[0]}:${temp[1]}`, value[1]];
      setMobValues(tempMv);
    }
    if (name == "y") {
      console.log("Y");
      temp[1] = newVal;
      console.log(newVal);
      delete tempMv[key];
      tempMv[key] = [`${temp[0]}:${temp[1]}`, value[1]];
      console.log(tempMv);
      setMobValues(tempMv);
    }
    if (name == "type") {
      console.log("type");
      let x = [value[0], newVal];
      tempMv[key] = x;
      setMobValues(tempMv);
    }
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
              name="x"
              onChange={(e) =>
                changeMob(e.target.value, key, value, e.target.name)
              }
              value={value[0].split(":")[0]}
            />
          </label>
          <label>
            Mob Y
            <input
              type="number"
              name="y"
              onChange={(e) =>
                changeMob(e.target.value, key, value, e.target.name)
              }
              value={value[0].split(":")[1]}
            />
          </label>
          <label>
            Mob type
            <input
              type="number"
              name="type"
              onChange={(e) =>
                changeMob((newVal = e.target.value), key, value, e.target.name)
              }
              value={value[1]}
            />
          </label>
          <button onClick={() => extDelete(value[0])}>X</button>
          <button
            id={roomEdit.monsters}
            onClick={() => extEdit(value, mobValues[key][0])}
          >
            Edit! {value[0]} {key}
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
            onChange={() => setMobSelect(event.target.value)}
          >
            <option value={`1`}>1</option>
            <option value={`2`}>2</option>
          </select>
        </label>
        {doors}
        <button onClick={() => extAdd([`3:3`], mobSelect)}>create mob</button>
      </p>
    </>
  );
};
