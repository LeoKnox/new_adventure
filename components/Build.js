import { allRooms, changeRoom } from "./dungeonData.js";

export default Build = () => {
  const rooms = allRooms();
  console.log(rooms);
  return (
    <>
      <p>build a dungeon</p>
      <button onClick={changeRoom}>click</button>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
        </tr>
      ))}
    </>
  );
};
