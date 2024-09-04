import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  console.log(rooms);
  const submitRoom = (name) => {
    let x = addRoom(name);
    console.log(JSON.stringify(x));
    setRooms(x);
  };
  return (
    <>
      <p>build a dungeon</p>
      <table>
      <tr>
        <th>name</th>
        <th>width</th>
        <th>height</th>
        <th>x</th>
        <th>y</th>
        </tr>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
          <td>{room.width}</td>
          <td>{room.height}</td>
          <td>{room.x}</td>
          <td>{room.y}</td>
        </tr>
      ))}
      </table>
      <tr>
        <NewRoom submitRoom={submitRoom} />
      </tr>
    </>
  );
};
