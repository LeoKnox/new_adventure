import { createContext, useContext, useState, useCallback } from "react";
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
  console.table(MobContext);
  const [roomEdit, setRoomEdit] = useState(singleRoom(newId));
  const [testMob, setTestMob] = useState("mob text");

  const submitRoom = (roomEdit, newId) => {
    console.log("submit room");
    changeRoomDD(roomEdit);
    setIsEdit(false);
  };

  const changeRoom = (name, value) => {
    console.log("change room");
    let temp = { ...roomEdit };
    temp[name] = value;
    setRoomEdit(temp);
    changeRoomDD(temp, newId);
    setRooms(allRooms());
  };

  return (
    <>
      <button>{newId}</button>
      <p>{singleRoom(newId).name}</p>
      <p>
        Name:
        <input
          type="text"
          name="name"
          value={roomEdit.name}
          onChange={(e) => changeRoom(e.target.name, e.target.value)}
        />
      </p>
      <p>
        Width:
        <input
          type="number"
          name="width"
          value={roomEdit.width}
          onChange={(e) => changeRoom(e.target.name, e.target.value)}
        />
      </p>
      <p>
        Height:
        <input
          type="number"
          name="height"
          value={roomEdit.height}
          onChange={(e) => changeRoom(e.target.name, e.target.value)}
        />
      </p>
      <p>
        X:
        <input
          type="number"
          name="x"
          value={roomEdit.x}
          onChange={(e) => changeRoom(e.target.name, e.target.value)}
        />
      </p>
      <p>
        Y:
        <input
          type="number"
          name="y"
          value={roomEdit.y}
          onChange={(e) => changeRoom(e.target.name, e.target.value)}
        />
      </p>
      <MonsterContextReturn monstersList={["green"]}>
        <MobContext test={roomEdit.monsters}>
          <RoomMonsters
            roomEdit={roomEdit}
            setRoomEdit={setRoomEdit}
            roomId={newId}
          />
        </MobContext>
      </MonsterContextReturn>
      <button onClick={() => submitRoom(roomEdit, newId)}>Submit</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
