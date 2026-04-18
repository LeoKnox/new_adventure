import { useState, useEffect } from "react";
//import myImage from "./Lava_Background.webp";

export default Build = () => {
  console.log("build.js");
  const pagePosition = [40, 160];
  const [room, setRoom] = useState({ roomCoords: [3, 4], doors: [3, 2] });
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
  const [doors, setDoors] = useState([3, 2]);
  return (
    <>
      <div>
        <input type="radio" id="40" name="tileSize" value="40" checked />
        <label>40</label>
        <input type="radio" id="30" name="tileSize" value="30" />
        <label>30</label>
      </div>
      <div
        style={{
          position: "absolute",
          width: `${room.roomCoords[0] * tileSize}px`,
          height: `${room.roomCoords[1] * tileSize}px`,
          left: `${pagePosition[0]}px`,
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
          left: `${pagePosition[0] + room.doors[0] * tileSize}px`,
          top: `${room.doors[1] * tileSize + room.roomCoords[1] * tileSize}px`,

          backgroundColor: "brown",
        }}
      ></div>
    </>
  );
};
