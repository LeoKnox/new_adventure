import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [tileSize, setTilesize] = useState(40);
  const [roomCoords, setRoomCoords] = useState([3, 4]);
  return (
    <div
      style={{
        position: "absolute",
        width: `${roomCoords[0] * tileSize}px`,
        height: `${roomCoords[1] * tileSize}px`,
        backgroundColor: "red",
      }}
    ></div>
  );
};
