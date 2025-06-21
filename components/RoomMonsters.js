export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(room);
  return (
    <>
      <p>room monsters</p>
      <button onClick={() => setRoomEdit(delete roomEdit.monsters[`1:4`])}>
        update
      </button>
      {JSON.stringify(roomEdit)}
    </>
  );
};
