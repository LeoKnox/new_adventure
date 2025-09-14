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
  const changeValue = () => {
    console.log("change value");
    let temp = currentRoom;
    temp["name"] = "red";
    console.log(temp);
    setCurrentRoom(temp);
  };
  return (
    <>
      {name}
      <p>
        <label>
          Name:{" "}
          <input type="text" onChange={(e) => changeValue(e)} value={name} />
        </label>
      </p>
      <p>
        <label>
          X: <input type="text" value={x} />
        </label>
      </p>
      <p>
        <label>
          Y: <input type="text" value={y} />
        </label>
      </p>
      <p>
        <label>
          Width: <input type="text" value={width} />
        </label>
      </p>
      <p>
        <label>
          Height: <input type="text" value={height} />
        </label>
      </p>
      <button onClick={() => setCurrentRoom({ name: "red" })}>update</button>
    </>
  );
};
