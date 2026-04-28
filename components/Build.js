import { useState, useEffect } from "react";
import { doorJoin } from "./dungeonData.js";

export default Build = () => {
  console.log("build.js");
  const [room, setRoom] = useState({
    roomCoords: [2, 3],
    width: 2,
    length: 3,
    doors: [1, 0],
  });
  const [tileSize, setTilesize] = useState(40);

  const editRoom = (value = 5, param = "roomCoords") => {
    console.log("edit room");
    let newRoom = { ...room, [param]: value };
    setRoom(newRoom);
    console.log(newRoom);
  };
  return (
    <>
      <div name="top" style={{ display: "flex" }}>
        <input
          onChange={() => setTilesize(40)}
          type="radio"
          id="40"
          name="tileSize"
          value="40"
          checked={tileSize == 40}
        />
        <label>40</label>
        <input
          onChange={() => setTilesize(30)}
          type="radio"
          id="30"
          name="tileSize"
          value="30"
          checked={tileSize == 30}
        />
        <label>30</label>
      </div>
      <button>Add Door{doorJoin(1)}</button>
      <div
        name="middle"
        style={{
          width: "400px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "darkgray",
        }}
      >
        <div
          name="room"
          style={{
            position: "relative",
            border: `${tileSize}px solid black`,
            width: `${room.width * tileSize}px`,
            height: `${room.length * tileSize}px`,
            backgroundColor: "red",
          }}
        >
          {room.doors.map((doorId) => (
            <div
              name="door"
              style={{
                position: "absolute",
                width: `${tileSize}px`,
                height: `${tileSize}px`,
                left: `${(doorJoin(doorId)[0] - 1) * tileSize}px`,
                top: `${(doorJoin(doorId)[1] - 1) * tileSize}px`,
                backgroundColor: "brown",
                display: "flex",
              }}
            ></div>
          ))}
        </div>
      </div>
      <div
        name="bottom"
        style={{
          width: "400px",
          color: "lightblue",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <label>
          width:
          <input
            type="range"
            id="width"
            name="width"
            min="0"
            max="11"
            value={room.width}
            onChange={(e) => editRoom(e.target.value, e.target.name)}
          />
          <input type="text" value={room.width} />
        </label>
        <label>
          height:
          <input
            type="range"
            id="length"
            name="length"
            min="0"
            max="11"
            value={room.length}
            onChange={(e) => editRoom(e.target.value, e.target.name)}
          />
          <input type="text" value={room.length} />
        </label>
      </div>
    </>
  );
};
