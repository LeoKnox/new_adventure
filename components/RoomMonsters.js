export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(room);
  const deleteMonster = () => {
    let temp = roomEdit;
    delete roomEdit.monsters[`1:4`];
    setRoomEdit(temp);
  };
  return (
    <>
      <p>room monsters</p>
      <button onClick={deleteMonster()}>update</button>
      {JSON.stringify(roomEdit)}
    </>
  );
};
