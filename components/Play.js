import { useState } from "react";
import DrawMap from "./DrawMap.js";
import PlayMap from "./PlayMap.js";
import { singleRoom } from "./dungeonData.js";

export default Play = () => {
  let newMap = singleRoom(1);
  return (
    <>
      <h2>Play game</h2>
      <table>
        <DrawMap width={newMap.width} height={newMap.height} />
      </table>
    </>
  );
};
