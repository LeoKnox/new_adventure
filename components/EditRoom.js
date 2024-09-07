import { singleRoom } from "./dungeonData.js";

export default EditRoom = ({ roomId = 1 }) => {
  console.log({ singleRoom });
  return (
    <>
      <button>{roomId}</button>
      <p>{() => singleRoom()}</p>
    </>
  );
};
