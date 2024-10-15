import { useState, useCallback } from "react";
import Build from "./Build.js";
import Characters from "./Characters.js";
import Play from "./Play.js";

export default Home = () => {
  const [page, setPage] = useState(<Characters />);
  const [characterId, setCharacterId] = useState(0);
  /*const changeId = (newId) => {
    setCharacterId(newId);
  };*/
  const changeId = useCallback(() => {
    setCharacterId(characterId);
  }, characterId);
  const x = <Characters characterId={characterId} setCharacterId={changeId} />;
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setPage(<Play />)}>Play</button>
      <button
        onClick={() =>
          setPage(
            <Characters
              characterId={characterId}
              setCharacterId={setCharacterId}
              changeId={changeId}
            />
          )
        }
      >
        Characters
      </button>
      <button onClick={() => setPage(<Build />)}>Build</button>
      {page}
    </div>
  );
};
