import { useState } from "react";
import { allCharacters } from "./characterData.js";
import SelectCharacter from "./SelectCharacter.js";
import View from "./View.js";

export default Play = () => {
  const [playerId, setPlayerId] = useState(0);
  return (
    <>
      <h2>Play game</h2>
      {playerId}
      {playerId <= 0 ? <SelectCharacter setPlayerId={setPlayerId} /> :
        <p>Game!</p>
  }
    </>
  );
};
