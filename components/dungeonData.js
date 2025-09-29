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
  const submitRoom = (newRoom) => {
    console.log("submit rooms");
    let temp = rooms;
    temp.push(newRoom);
    //temp[1] = newRoom;
    console.log(newRoom);
    console.log(temp);
    //temp[1].monsters = monsters;
    addRoom(temp);
    setRooms(allRooms());
    //setIsEdit(!isEdit);
  };
  const removeMob = (key) => {
    console.log("remove mob");
    let temp = rooms[newId];
    let temptwo = temp.monsters;
    delete temptwo[key];
    setRooms(temp);
  };
  return (
    <>
      <p onClick={() => setIsEdit(!isEdit)}>build a dungeon</p>
      {isEdit ? (
        <EditRoom newId={newId} setIsEdit={setIsEdit} submitRoom={submitRoom} />
      ) : (
        <>
          <AllRooms rooms={rooms} removeRoom={removeRoom} loadEdit={loadEdit} />
          <NewRoom submitRoom={submitRoom} rooms={rooms} />
        </>
      )}
    </>
  );
};
