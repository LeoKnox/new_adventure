import {useState} from "react"

export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  const deleteMonster = () => {
    let temp = { ...roomEdit };
    let tempMobs = { ...temp.monsters };
    delete tempMobs[`1:4`];
    temp.monsters = tempMobs;
    setRoomEdit(temp);
  };
  return (
    <>
      <p>room monsters</p>
      <button onClick={() => deleteMonster()}>update</button>
      {Object.entries(roomEdit["monsters"]).map(([key, value]) => (
        <p>
          <label>Mob X<input type="number" value={key.split(":")[0]}/></label>
          <label>Mob Y<input type="number" value={key.split(":")[1]}/></label>
          <label>Mob type<input type="number" value={value} /></label>
          <button onClick={()=>deleteMonster(value)}>X</button>
        </p>
      ))}
    </>
  );
};
