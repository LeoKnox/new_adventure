import { useState } from "react";
import * as x from "./dungeonData.js";

export default Build = () => {
  const [rooms, setRooms] = useState(x.allRooms());
  console.log(rooms);
  return (
    <>
      <p>build a dungeon</p>
      <button onClick={x.changeRoom}>click</button>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
        </tr>
      ))}
    </>
  );
};
