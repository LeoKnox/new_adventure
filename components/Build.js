import { allRooms } from "./dungeonData.js";

export default Build = () => {
  console.log(allRooms());
  return (
    <>
      <p>build a dungeon</p>
      {allRooms.map((x) => {
        <p>a {x.name}</p>;
      })}
    </>
  );
};
