import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  console.log(rooms);
  const addRoom = () => {
    setRooms(addRoom(param));
  };
  return (
    <>
      <p>build a dungeon</p>
      <button onClick={() => addRoom()}>Add</button>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
        </tr>
      ))}
      <br/>
      <tr>
        <td>Name: </td>
      </tr>
    </>
  );
};
