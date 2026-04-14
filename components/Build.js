import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [roomCoords, setRoomCoords] = useState([3.4]);
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: `100px`,
        backgroundColor: "red",
      }}
    >
      red
    </div>
  );
};
