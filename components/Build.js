import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom, singleRoom } from "./dungeonData.js";
import AllRooms from "./AllRooms.js";
import { MonsterContextReturn } from "./RoomContext.js";
import { deleteRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";
import EditRoom from "./EditRoom.js";

export default Build = () => {
  console.log("build.js");
  //console.log(singleRoom(1).monsters);
  const [isEdit, setIsEdit] = useState(false);
  const [newId, setNewId] = useState(1);
  const [rooms, setRooms] = useState(allRooms());
  const [roomMob, setRoomMob] = useState({
    [`1:4`]: 1,
    [`1:5`]: 1,
  });
  const editFunc = (roomEdit, newMob) => {
    console.log("edit func");
    console.log(newMob);
    roomEdit.monsters[`${newMob.x}:${newMob.y}`] = 1;
    setRooms(roomEdit);
  };
  const loadEdit = (roomId = 1) => {
    let temp = singleRoom(roomId);
    setNewId(roomId);
    setIsEdit(!isEdit);
  };
  const removeRoom = (deleteId) => {
    console.log(deleteRoom(1));
    let temp = deleteRoom(deleteId);
    setRooms(temp);
  };
  const submitRoom = (name, width, height, x, y) => {
    console.log("submit room");
    cosnole.log(name);
    console.log(name + ":" + x + ":" + y);
    let temp = addRoom(name, width, height, x, y);
    setRooms(temp);
  };
  const removeMob = (key) => {
    console.log("remove mob");
    console.log(newId);
    let temp = rooms[newId];
    console.log(temp);
    let temptwo = temp.monsters;
    delete temptwo[key];
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
          rooms={rooms}
          removeMob={removeMob}
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
