export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(room);
  const deleteMonster = () => {
    let temp = roomEdit;
    setRoomEdit(...temp, delete monsters[`1:4`]);
  };
  return (
    <>
      <p>room monsters</p>
      <button onClick={() => deleteMonster()}>update</button>
      {JSON.stringify(roomEdit)}
    </>
  );
};
