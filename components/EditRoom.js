import { singleRoom } from "./dungeonData.js";

export default EditRoom = ({ roomId }) => {
  console.log({ singleRoom });
  return (
    <>
      <button>{roomId}</button>
    </>
  );
};
