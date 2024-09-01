import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";

export default Build = () => {
  const [rooms, setRooms] = useState(allRooms());
  useEffect(() => {
    setRooms(allRooms());
  }, []);
  console.log(rooms);
  const run = () => {
    setRooms(allRooms());
  };
  return (
    <>
      <p>build a dungeon</p>
      <button onClick={() => run()}>click</button>
      {rooms.map((room) => (
        <tr>
          <td>{room.name}</td>
        </tr>
      ))}
    </>
  );
};
