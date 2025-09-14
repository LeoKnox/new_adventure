import { useContext, useState, useCallback } from "react";
import { MobContext } from "./MobContext.js";
import { MonsterContextReturn } from "./RoomContext.js";
import RoomMonsters from "./RoomMonsters.js";
import { singleRoom, changeRoomDD, allRooms } from "./dungeonData.js";

export default EditRoom = ({
  newId = 1,
  setIsEdit,
  rooms,
  setRooms,
  editFunc,
  removeMob,
}) => {
  console.log("edit room");
  console.log(rooms);
  const [currentRoom, setCurrentRoom] = useState(singleRoom(newId));
  const { id, name, x, y, length, width, monsters } = currentRoom;
  return <>{name}</>;
};
