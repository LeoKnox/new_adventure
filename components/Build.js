import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [roomCoords, setRoomCoords] = useState([3.4]);
  return <div style={{ width: '100%', height: `${roomCoords[1]}em`, backGroundColor:"red"}}>
    red
  
</div>
};
