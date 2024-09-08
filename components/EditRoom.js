import { singleRoom } from "./dungeonData.js";

export default EditRoom = ({ newId = 1 }) => {
  return (
    <>
      <button>{newId}</button>
      <p>{singleRoom(newId).name}</p>
    </>
  );
};
