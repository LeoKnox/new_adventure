import { useState, useEffect } from "react";
//import myImage from "./Lava_Background.webp";

export default Build = () => {
  console.log("build.js");
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4, 10, 8]);
  return (
    <div
      style={{
        position: "absolute",
        width: `${roomCoords[0] * tileSize}px`,
        height: `${roomCoords[1] * tileSize}px`,
        left: `${roomCoords[2]*tileSize}px`,
        top: `${roomCoords[3]*tileSize}px`,

        backgroundColor: "red",
      }}
    ></div>
  );
};
