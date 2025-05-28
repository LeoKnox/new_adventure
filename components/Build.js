import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom, singleRoom } from "./dungeonData.js";
import AllRooms from "./AllRooms.js";
import { deleteRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";
import EditRoom from "./EditRoom.js";

export default Build = () => {
  console.log("T" + singleRoom(1));
  const [isEdit, setIsEdit] = useState(false);
  const [newId, setNewId] = useState(1);
  const [rooms, setRooms] = useState(allRooms());
  const [roomMob, setRoomMob] = useState({
    [`1:4`]: charFunc[1],
    [`1:5`]: charFunc[1],
  });
  const editFunc = (roomEdit) => {
    const temp = changeRoom(roomEdit);
    setRooms(temp);
    setIsEdit(false);
  };
  const loadEdit = (roomId = 1) => {
    let temp = singleRoom(roomId);
    setNewId(roomId);
    setIsEdit(!isEdit);
  };
  const removeRoom = (deleteId) => {
    //console.log(deleteRoom(1));
    let temp = deleteRoom(deleteId);
    setRooms(temp);
  };
  const submitRoom = (name, width, height, x, y) => {
    let temp = addRoom(name, width, height, x, y);
    setRooms(temp);
  };
  return (
    <>
      <p onClick={() => setIsEdit(!isEdit)}>build a dungeon</p>
      {isEdit ? (
        <EditRoom
          newId={newId}
          setIsEdit={setIsEdit}
          setRooms={setRooms}
          editFunc={editFunc}
        />
      ) : (
        <>
          <AllRooms rooms={rooms} removeRoom={removeRoom} loadEdit={loadEdit} />
          <NewRoom submitRoom={submitRoom} />
        </>
      )}
    </>
  );
};
