import { useState } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  console.log(rooms);
  return (
    <>
      <p>build a dungeon</p>
      <button onClick={() => setRooms(changeRoom)}>click</button>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
        </tr>
      ))}
    </>
  );
};
