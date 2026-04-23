import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const pagePosition = [40, 160];
  const [room, setRoom] = useState({ roomCoords: [2, 3], doors: [1, 0] });
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
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
            width: `${room.roomCoords[0] * tileSize}px`,
            height: `${room.roomCoords[1] * tileSize}px`,
            backgroundColor: "red",
          }}
        >
          {roomCoords[1]}:{pagePosition[1]}
          <div
            name="door"
            style={{
              position: "absolute",
              width: `${tileSize}px`,
              height: `${tileSize}px`,
              left: `${(room.doors[0] - 1) * tileSize}px`,
              top: `${(room.doors[1] - 1) * tileSize}px`,
              backgroundColor: "brown",
              display: "flex",
            }}
          ></div>
        </div>
      </div>
      <div name="bottom" style={{ display: "flex" }}>
        width:{room.roomCoords[0]}
      </div>
    </>
  );
};
