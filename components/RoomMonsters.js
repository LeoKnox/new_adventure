import { useContext, useState, useCallback } from "react";
import { MobContext } from "./MobContext.js";
import { MonsterContextReturn } from "./RoomContext.js";
import RoomMonsters from "./RoomMonsters.js";
import { singleRoom, changeRoomDD, allRooms } from "./dungeonData.js";

export default EditRoom = ({ newId = 1, setIsEdit, submitRoom }) => {
  console.log("edit room");
  const [currentRoom, setCurrentRoom] = useState(singleRoom(newId));
  const [tempMonsters, setTempMonsters] = useState(currentRoom.monsters);
  const { id, name, x, y, height, width, monsters } = currentRoom;
  const changeValue = (e) => {
    console.log("change value");
    setCurrentRoom({ ...currentRoom, [e.target.name]: [e.target.value] });
  };
  const changeMob = (id, value, name, newValue) => {
    console.log("change mob");
    let temp = tempMonsters;
    temp[id] = newValue;
    console.log(temp);
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
      <RoomMonsters monsters={tempMonsters} changeMob={changeMob} />
      <button onClick={() => submitRoom(currentRoom)}>update</button>
      <button onClick={() => setIsEdit(false)}>Back</button>
    </>
  );
};
