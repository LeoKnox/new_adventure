import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  console.log(rooms);
  const addRoom = () => {
    let x = addRoom("midori");
    setRooms(x);
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
      <tr>
        <NewRoom />
      </tr>
    </>
  );
};
