export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(room);
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
      {JSON.stringify(roomEdit)}
    </>
  );
};
