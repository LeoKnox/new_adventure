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
  const { id, name, x, y, height, width, monsters } = currentRoom;
  const changeValue = (e) => {
    console.log("change value");
    let temp = currentRoom;
    temp[e.target.name] = e.target.value;
    setCurrentRoom({ ...temp });
  };
  return (
    <>
      {name}
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            onChange={(e) => changeValue(e)}
            value={name}
          />
        </label>
      </p>
      <p>
        <label>
          X:{" "}
          <input
            type="number"
            name="x"
            onChange={(e) => changeValue(e)}
            value={x}
          />
        </label>
      </p>
      <p>
        <label>
          Y:{" "}
          <input
            type="number"
            name="y"
            onChange={(e) => changeValue(e)}
            value={y}
          />
        </label>
      </p>
      <p>
        <label>
          Width:{" "}
          <input
            type="number"
            name="width"
            onChange={(e) => changeValue(e)}
            value={width}
          />
        </label>
      </p>
      <p>
        <label>
          Height:{" "}
          <input
            type="number"
            name="height"
            onChange={(e) => changeValue(e)}
            value={height}
          />
        </label>
      </p>
      <button onClick={() => setCurrentRoom({ name: "red" })}>update</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
