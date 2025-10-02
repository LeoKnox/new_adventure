import { useState } from "react";
import { addRoom, allRooms } from "./dungeonData.js";

export default NewRoom = ({ submitRoom, setRoom }) => {
  const [name, setName] = useState("empty");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [roomData, setRoomData] = useState({
    name: "empty",
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const submit = () => {
    let temp = { name, width, height, x, y, monsters: {} };
    addRoom(temp);
    setRoom(...allRooms());
    setName("empty");
    setWidth(0);
    setHeight(0);
    setX(0);
    setY(0);
  };
  return (
    <div>
      <td>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        Width:
        <input
          type="number"
          name="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </td>
      <td>
        Height:
        <input
          type="number"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </td>
      <td>
        X:
        <input
          type="number"
          name="x"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
      </td>
      <td>
        Y:
        <input
          type="number"
          name="y"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
      </td>
      <button onClick={submit}>submit</button>
    </div>
  );
};
