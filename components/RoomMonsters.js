export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.table(room);
  return (
    <>
      <p>room monsters</p>
      {room}
    </>
  );
};
