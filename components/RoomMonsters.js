export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(roomEdit);
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
      {Object.entries(roomEdit["monsters"]).map(([key, value]) => (
        <p>
          {key.split(":")[0]}*{key.split(":")[1]}*{value}
        </p>
      ))}
    </>
  );
};
