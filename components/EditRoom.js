import {useState} from "react"

export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  const [mobValues, setMobValues] = useState(roomEdit.monsters)
  const deleteMonster = (key) => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[key];
    temp.monsters = tempMobs;
    setRoomEdit(temp);
  };
  const updateMob=(key)=> {
    console.log("update mob");
    console.log(key);
  }
  return (
    <>
      <p>room monsters</p>
      <button onClick={() => deleteMonster()}>update</button>
      {Object.entries(mobValues).map(([key, value]) => (
        <p>
          <label>Mob X<input type="number" onChange={(e) => updateMob(key)} value={key.split(":")[0]}/></label>
          <label>Mob Y<input type="number" value={key.split(":")[1]}/></label>
          <label>Mob type<input type="number" value={value} /></label>
          <button onClick={()=>deleteMonster(key)}>X</button>
        </p>
      ))}
    </>
  );
};
