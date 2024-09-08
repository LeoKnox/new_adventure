import { useState } from "react";
import { singleRoom } from "./dungeonData.js";

export default EditRoom = ({ newId = 1 }) => {
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  console.log(roomEdit);
  return (
    <>
      <button>{newId}</button>
      <p>{roomEdit.name}</p>
    </>
  );
};
