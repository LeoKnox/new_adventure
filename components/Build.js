import { useState, useEffect } from "react";
//import myImage from "./Lava_Background.webp";

export default Build = () => {
  console.log("build.js");
  const pagePosition = [40, 160];
  const [room, setRoom] = useState({roomCoords: [3,4]})
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
  const [doors, setDoors] = useState([3, 2]);
  return (
    <>
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
          left: `${pagePosition[0] + doors[0] * tileSize}px`,
          top: `${doors[1] * tileSize + room.roomCoords[1] * tileSize}px`,

          backgroundColor: "brown",
        }}
      ></div>
    </>
  );
};
