export default RoomMonsters = ({ room, roomEdit, setRoomEdit }) => {
  console.log("room");
  console.log(room[`1:4`]);
  return (
    <>
      <p>room monsters</p>
      {room.monsters}
    </>
  );
};
