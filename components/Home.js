import { useState } from "react";
import Build from "./Build.js";
import Play from "./Play.js";

export default Home = () => {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setPlay(true)}>Play</button>
      <button onClick={() => setPlay(false)}>Build</button>
      {play ? <Play /> : <Build />}
    </div>
  );
};
