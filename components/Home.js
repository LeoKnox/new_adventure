import { useState, useCallback } from "react";
import Build from "./Build.js";
import Characters from "./Characters.js";
import Play from "./Play.js";

export default Home = () => {
  const [page, setPage] = useState(<Play />);
  const [characterId, setCharacterId] = useState(0);
  const changeId = (newId) => {
    setCharacterId(newId);
  };
  /*const changeId = useCallback(() => {
    setCharacterId(characterId);
  }, characterId);*/
  const x = <Characters characterId={characterId} setCharacterId={changeId} />;
  return (
    <div>
      <h1>Home Page</h1>
      <button className="buttons" onClick={() => setPage(<Play />)}>
        Play
      </button>
      <button className="buttons"
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
      <button className="buttons" onClick={() => setPage(<Build />)}>Build</button>
      {page}
    </div>
  );
};
