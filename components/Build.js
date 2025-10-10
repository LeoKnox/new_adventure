import { useState, useEffect } from "react";
import { allRooms, addRoom, changeRoom, singleRoom } from "./dungeonData.js";
import AllRooms from "./AllRooms.js";
import { MonsterContextReturn } from "./RoomContext.js";
import { deleteRoom } from "./dungeonData.js";
import NewRoom from "./NewRoom.js";
import EditRoom from "./EditRoom.js";

export default Build = () => {
  console.log("build.js");

  const [isEdit, setIsEdit] = useState(false);
  const [loadComponent, setLoadComponent] = useState("b");
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
  const loadMap = (roomId = 1) => {
    console.log("load map");
    setIsEdit(
      <EditRoom newId={newId} setIsEdit={setIsEdit} submitRoom={submitRoom} />
    );
  };
  const removeRoom = (deleteId) => {
    console.log("remove room");
    console.log(deleteId);
    deleteRoom(deleteId);
    setRooms(allRooms());
  };
  const submitRoom = (newRoom) => {
    console.log("submit rooms");
    let temp = allRooms();
  };
  const removeMob = (key) => {
    console.log("remove mob");
    let temp = rooms[newId];
    let temptwo = temp.monsters;
    delete temptwo[key];
    setRooms(temp);
  };
  const tempPage = (
    <EditRoom newId={newId} setIsEdit={setIsEdit} submitRoom={submitRoom} />
  );
  const roomsObj = {
    a: <EditRoom newId={newId} setIsEdit={setIsEdit} submitRoom={submitRoom} />,
    b: (
      <>
        <AllRooms
          rooms={rooms}
          removeRoom={removeRoom}
          loadEdit={loadEdit}
          setLoadComponent={setLoadComponent}
          loadMap={loadMap}
        />
        <NewRoom
          rooms={rooms}
          setRooms={setRooms}
          submitRoom={submitRoom}
          rooms={rooms}
        />
      </>
    ),
  };
  //<EditRoom newId={newId} setIsEdit={setIsEdit} submitRoom={submitRoom} />
  return (
    <>
      <p>build a dungeon</p>
      {roomsObj[loadComponent]}
    </>
  );
};
