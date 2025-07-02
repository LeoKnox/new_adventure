import { createContext, useContext, useState } from "react";
//import { mobContext } from "./MobContext.js";

export default RoomMonsters = ({ room, editMobs, roomEdit, setRoomEdit, test }) => {
  console.log("room");
  const [mobValues, setMobValues] = useState(Object.entries(roomEdit.monsters));
  const [newMob, setNewMob] = useState({ x: 0, y: 0 });
  //const { newMob, setMob } = setConMob();
//const [] = useContext(test)
  console.table(mobValues);
  const deleteMonster = (key) => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[key];
    temp.monsters = tempMobs;
    setRoomEdit(temp);
  };
  const addMob = (newMob) => {
    console.log("add mob");
    console.log(newMob);
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
            Mob X<input type="number" onChange={(e) => editMobs(key, value)} />
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
        </p>
      ))}
      {JSON.stringify(mobValues)}
      <p>
        <label>
          New Mob X
          <input
            type="number"
            className="mobInput"
            value={newMob.x}
            onChange={(e) => setNewMob({ ...newMob, x: e.target.value })}
          />
        </label>
        <label>
          New Mob Y
          <input
            type="number"
            className="mobInput"
            value={newMob.y}
            onChange={(e) => setNewMob({ ...newMob, y: e.target.value })}
          />
        </label>
        {testData}
        <button onClick={() => addMob(newMob)}>create mob<aMonsterContext/></button>
      </p>
    </>
  );
};
