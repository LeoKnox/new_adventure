import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [roomCoords, setRoomCoords] = useState([3.4]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [roomCoords, setRoomCoords] = useState([3,4]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: `${roomCoords[1]*40}px`,
        backgroundColor: "red",
      }}
    >
      red{roomCoords[1]}
    </div>
  );
};

        height: `${roomCoords[1]}px`,
        backgroundColor: "red",
      }}
    >
      red{roomCoords[1]}
    </div>
  );
};
