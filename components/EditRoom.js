import { useState } from "react";
import { singleRoom } from "./dungeonData.js";

export default EditRoom = ({ newId = 1 }) => {
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  const hold = singleRoom(newId);
  const [roomName, setRoomName] = useState(hold.name);
  const changeRoom = (e) => {
    setRoomEdit({ ...roomEdit, name: e.target.value });
  };
  console.log(roomEdit);
  return (
    <>
      <button>{newId}</button>
      <p>{singleRoom(newId).name}</p>
      <input
        type="text"
        value={roomEdit.name}
        onChange={(e) => setRoomEdit({ ...roomEdit, name: e.target.value })}
      />
    </>
  );
};
