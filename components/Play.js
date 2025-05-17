import { useState } from "react";
import DrawMap from "./DrawMap.js";
import PlayMap from "./PlayMap.js";

export default Play = () => {
  return (
    <>
      <h2>Play game</h2>
      <table>
        <DrawMap />
      </table>
    </>
  );
};
