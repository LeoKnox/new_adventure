import { useState, useEffect } from "react";

export default Build = () => {
  console.log("build.js");
  const [room, setRoom] = useState({ roomCoords: [2, 3], doors: [1, 0] });
  const [tileSize, setTilesize] = useState(40);

  const editRoom = (value = [2, 0], param = "doors") => {
    console.log("edit room");
    let newRoom = { ...room, [param]: value };
    setRoom(newRoom);
    console.log(newRoom);
  };
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
      <div
        name="bottom"
        style={{
          width: "400px",
          color: "lightblue",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <label>
          width:
          <input
            type="range"
            id="width"
            name="width"
            min="0"
            max="11"
            value={room.roomCoords[0]}
            onChange={() => editRoom()}
          />
          <input type="text" value={room.roomCoords[0]} />
        </label>
        <label>height:{room.roomCoords[1]}</label>
      </div>
    </>
  );
};
