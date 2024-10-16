import { useState } from "react";
import { allCharacters } from "./characterData.js";
import { charLocation } from "./playData";
import SelectCharacter from "./SelectCharacter.js";
import View from "./View.js";

export default Play = () => {
  const [playerId, setPlayerId] = useState(1);
  let playerLocation = charLocation();
  console.log(playerLocation);
  return (
    <>
      <h2>Play game</h2>
      {playerId}
      {playerId <= 0 ? (
        <SelectCharacter setPlayerId={setPlayerId} />
      ) : (
        <>
        <p>Game!</p>
        {playerLocation.charX}
        </>
      )}
    </>
  );
};
