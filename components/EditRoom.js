import { useState } from "react";
import { singleRoom, changeRoom } from "./dungeonData.js";

export default EditRoom = ({ newId = 1, setIsEdit, setRooms, editFunc }) => {
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  const submitRoom = () => {
    const temp = changeRoom(roomEdit);
    //setRooms(temp);
    editFunc(temp);
  };
  console.log("edit room");
  const splitXY = (key) => {
    let [x, y] = key.split(":");
    return (
      <>
        <label>
          monster x:
          <input type="number" value={x} />
        </label>
        <label>
          monster y:
          <input type="number" value={y} />
        </label>
      </>
    );
  };
  return (
    <>
      <button>{newId}</button>
      <p>{singleRoom(newId).name}</p>
      <p>
        Name:
        <input
          type="text"
          value={roomEdit.name}
          onChange={(e) => setRoomEdit({ ...roomEdit, name: e.target.value })}
        />
      </p>
      <p>
        Width:
        <input
          type="number"
          value={roomEdit.width}
          onChange={(e) => setRoomEdit({ ...roomEdit, width: e.target.value })}
        />
      </p>
      <p>
        Height:
        <input
          type="number"
          value={roomEdit.height}
          onChange={(e) => setRoomEdit({ ...roomEdit, height: e.target.value })}
        />
      </p>
      <p>
        X:
        <input
          type="number"
          value={roomEdit.x}
          onChange={(e) => setRoomEdit({ ...roomEdit, x: e.target.value })}
        />
      </p>
      <p>
        Y:
        <input
          type="number"
          value={roomEdit.y}
          onChange={(e) => setRoomEdit({ ...roomEdit, y: e.target.value })}
        />
      </p>
      {Object.keys(roomEdit.monsters).map((key, value) => (
        <p className="mobInput">{splitXY(key)}</p>
      ))}
      <button onClick={() => editFunc(roomEdit)}>Submit</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
