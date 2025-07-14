import { createContext, useContext, useState, useCallback } from "react";
import { MobContext } from "./MobContext.js";
import { MonsterContextReturn } from "./RoomContext.js";
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
  console.table(MobContext);
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  const [testMob, setTestMob] = useState("mob text");

  const submitRoom = () => {
    console.log("submit room");
    let temp = rooms.findIndex((room) => room.id === newId);
    temp >= 0 && (rooms[temp] = roomEdit);
    setRooms(rooms);
    setIsEdit(false);
  };

  const editMobs = (key, value) => {
    console.log("edit mobs");
    console.log(key + "&" + value);
    setRoomEdit({
      id: 2,
      name: "entry",
      width: 7,
      height: 8,
      x: 6,
      y: 6,
      monsters: {
        [`2:3`]: 1,
        [`3:4`]: 1,
      },
    });
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
      <MonsterContextReturn test={["green"]}>
        <MobContext test={roomEdit.monsters}>
          <RoomMonsters
            editMobs={editMobs}
            roomEdit={roomEdit}
            setRoomEdit={setRoomEdit}
          />
        </MobContext>
      </MonsterContextReturn>
      <button onClick={() => submitRoom()}>Submit</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
