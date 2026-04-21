import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const pagePosition = [40, 160];
  const [room, setRoom] = useState({ roomCoords: [2, 3], doors: [2, 5] });
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
  const [doors, setDoors] = useState([3, 2]);
  return (
    <>
      <div style={{ display: "flex" }}>
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
      <div style={{ width: "400px", backgroundColor: "darkgray" }}>
        <div
          style={{
            position: "absolute",
            border: `${tileSize}px solid black`,
            width: `${room.roomCoords[0] * tileSize}px`,
            height: `${room.roomCoords[1] * tileSize}px`,
            left: `${200 - pagePosition[0]}px`,
            top: `${pagePosition[1]}px`,

            backgroundColor: "red",
          }}
        >
          {doors[1]}:{roomCoords[1]}:{pagePosition[1]}
        </div>
        <div
          style={{
            position: "absolute",
            width: `${tileSize}px`,
            height: `${tileSize}px`,
            left: `${200 - pagePosition[0] + room.doors[0] * tileSize}px`,
            top: `${
              pagePosition[1] + room.roomCoords[1] * tileSize + tileSize
            }px`,
            backgroundColor: "brown",
          }}
        ></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        width:{room.roomCoords[0]}
      </div>
    </>
  );
};
