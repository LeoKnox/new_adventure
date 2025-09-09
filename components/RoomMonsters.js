import { useState } from "react";
import { useMob } from "./MobContext.js";
import { addMonsterContext } from "./RoomContext.js";
import {
  deleteMonsterDD,
  addMonsterDD,
  editMonsterDD,
  singleRoom,
} from "./dungeonData.js";

export default RoomMonsters = ({ roomId, roomEdit, setRoomEdit, test }) => {
  const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  const [mobSelect, setMobSelect] = useState(2);
  const { doors, incDoors } = useMob();
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
  const extEdit = () => {
    console.log("ext edit");
    editMonsterDD(mobValues, roomId);
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
    console.log(roomEdit);
    let tempMv = [...mobValues];
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
      tempMv[key] = [`${temp[0]}:${temp[1]}`, value[1]];
      setMobValues(tempMv);
    }
    if (name == "type") {
      console.log("type");
      let x = [value[0], newVal];
      tempMv[key] = x;
      setMobValues(tempMv);
    }
    temp.monsters = tempMv;
    setRoomEdit(temp);
    //roomEdit.monsters = mobValues;
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
