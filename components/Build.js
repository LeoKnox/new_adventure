import { useState, useEffect } from "react";
//import myImage from "./Lava_Background.webp";

export default Build = () => {
  console.log("build.js");
  const pagePosition = [40, 160];
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
  const [doors, setDoors] = useState([1, 2]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          width: `${roomCoords[0] * tileSize}px`,
          height: `${roomCoords[1] * tileSize}px`,
          left: `${pagePosition[0]}px`,
          top: `${pagePosition[1]}px`,

          backgroundColor: "red",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: `${tileSize}px`,
          height: `${tileSize}px`,
          left: `${pagePosition[0] + roomCoords[0] * tileSize}px`,
          top: `${pagePosition[0] + roomCoords[1] * tileSize}px`,

          backgroundColor: "brown",
        }}
      ></div>
    </>
  );
};
