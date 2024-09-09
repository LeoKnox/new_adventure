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
      <p>Name:
      <input
        type="text"
        value={roomEdit.name}
        onChange={(e) => setRoomEdit({ ...roomEdit, name: e.target.value })}
      />
      </p>
      <p>Width:
      <input
        type="number"
        value={roomEdit.width}
        onChange={(e) => setRoomEdit({ ...roomEdit, width: e.target.value })}
      />
      </p>
      <p>Height:
      <input
        type="number"
        value={roomEdit.height}
        onChange={(e) => setRoomEdit({ ...roomEdit, height: e.target.value })}
      />
      </p>
      <p>X:
      <input
        type="number"
        value={roomEdit.x}
        onChange={(e) => setRoomEdit({ ...roomEdit, x: e.target.value })}
      />
      </p>
      <p>Y:
      <input
        type="number"
        value={roomEdit.y}
        onChange={(e) => setRoomEdit({ ...roomEdit, y: e.target.value })}
      />
      </p>
    </>
  );
};
