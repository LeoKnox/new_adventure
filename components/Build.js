import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";
import EditRoom from "./EditRoom.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  const submitRoom = (name, width, height, x, y) => {
    let temp = addRoom(name, width, height, x, y);
    setRooms(temp);
  };
  return (
    <>
      <p>build a dungeon</p>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>width</th>
          <th>height</th>
          <th>x</th>
          <th>y</th>
        </tr>
        {rooms.map((room) => (
          <tr>
            <td>
              1<EditRoom roomId={room.id} />
            </td>
            <td>{room.name}</td>
            <td>{room.width}</td>
            <td>{room.height}</td>
            <td>{room.x}</td>
            <td>{room.y}</td>
          </tr>
        ))}
      </table>

      <NewRoom submitRoom={submitRoom} />
    </>
  );
};
