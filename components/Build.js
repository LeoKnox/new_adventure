import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";
import AllRooms from "./AllRooms.js";
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
      <AllRooms rooms={rooms} />
      <NewRoom submitRoom={submitRoom} />
    </>
  );
};
