import { allRooms } from "./dungeonData.js";

export default Build = () => {
  const rooms = allRooms();
  console.log(rooms);
  return (
    <>
      <p>build a dungeon</p>
      {rooms.map((room) => <tr><td>{room.name}</td></tr>)}
    </>
  );
};
