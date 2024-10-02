import { useState } from "react";
import Build from "./Build.js";
import Characters from "./Characters.js";
import Play from "./Play.js";

export default Home = () => {
  const [page, setPage] = useState(<Characters />);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
      <button onClick={() => setPage(<Play />)}>Play</button>
      <button onClick={() => setPage(<Characters />)}>Characters</button>
      <button onClick={() => setPage(<Build />)}>Build</button>
      </div>
      {page}
    </div>
  );
};
