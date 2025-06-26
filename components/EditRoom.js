import { useState, useCallback } from "react";
import RoomMonsters from "./RoomMonsters.js";
import { singleRoom, changeRoom, allRooms } from "./dungeonData.js";

export default EditRoom = ({
  newId = 1,
  setIsEdit,
  rooms,
  setRooms,
  editFunc,
  removeMob,
}) => {
  console.log("edit room");
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  const [newMob, setNewMob] = useState({ x: 0, y: 0 });
  const submitRoom = () => {
    console.log("submit room");
    let temp = rooms.findIndex((room) => room.id === newId);
    temp >= 0 && (rooms[temp] = roomEdit);
    setRooms(rooms);
    setIsEdit(false);
  };
  const editMobs = () => {
    console.log("edit mobs");
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
      <RoomMonsters roomEdit={roomEdit} setRoomEdit={setRoomEdit} />
      <p>
        <label>
          New Mob X
          <input
            type="number"
            className="mobInput"
            value={newMob.x}
            onChange={(e) => setNewMob({ ...newMob, y: e.target.value })}
          />
        </label>
        <label>
          New Mob Y
          <input
            type="number"
            className="mobInput"
            value={newMob.y}
            onChange={(e) => setNewMob({ ...newMob, x: e.target.value })}
          />
        </label>
        <button onClick={() => editFunc(roomEdit, newMob)}>create</button>
      </p>
      <button onClick={() => submitRoom()}>Submit</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
