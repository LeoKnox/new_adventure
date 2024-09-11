import { deleteRoom } from "./dungeonData.js";

export default AllRooms = ({ rooms, loadEdit }) => {
  const removeRoom = () => {
    console.log(deleteRoom(1));
  };
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>width</th>
          <th>height</th>
          <th>x</th>
          <th>y</th>
        </tr>
        {rooms.map((room) => (
          <tr>
            <td>
              <button onClick={() => loadEdit(room.id)}>{room.id}</button>
            </td>
            <td>{room.name}</td>
            <td>{room.width}</td>
            <td>{room.height}</td>
            <td>{room.x}</td>
            <td>{room.y}</td>
            <td>
              <button id={room.id} onClick={removeRoom}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
