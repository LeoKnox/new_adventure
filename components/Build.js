import { dungeonData } from "./dungeData.js";

export default Build = () => {
  console.log(JSON.stringify(dungeonData));
  return <p>build a dungeon</p>;
};
