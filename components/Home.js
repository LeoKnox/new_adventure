import { useState } from "react";
import Build from "./Build.js";
import Characters from "./Characters.js";
import Play from "./Play.js";

export default Home = () => {
  const [play, setPlay] = useState(true);
  const [page, setPage] = useState(<Characters />);
  return (
    <div>
      <h1>Home Page</h1>
      {page}
      <button onClick={() => setPlay(true)}>Play</button>
      <button onClick={() => setPlay(false)}>Build</button>
      <button onClick={() => setPage(<Build />)}>Change</button>
      {play ? <Characters /> : <Build />}
    </div>
  );
};
