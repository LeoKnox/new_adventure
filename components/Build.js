import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom } from "./dungeonData.js";
import AllRooms from "./AllRooms.js";
import NewRoom from "./NewRoom.js";
import EditRoom from "./EditRoom.js";

export default Build = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [rooms, setRooms] = useState(allRooms());
  const loadEdit = (roomId = 99) => {
    alert("load " + roomId);
  };
  const submitRoom = (name, width, height, x, y) => {
    let temp = addRoom(name, width, height, x, y);
    setRooms(temp);
  };
  return (
    <>
      <p onClick={() => setIsEdit(!isEdit)}>build a dungeon</p>
      {isEdit ? (
        <EditRoom />
      ) : (
        <>
          <AllRooms rooms={rooms} loadEdit={loadEdit} />
          <NewRoom submitRoom={submitRoom} />
        </>
      )}
    </>
  );
};
