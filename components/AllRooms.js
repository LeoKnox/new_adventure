export default AllRooms = ({ rooms, removeRoom, loadEdit }) => {
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>width</th>
          <th>height</th>
          <th>x</th>
          <th>y</th>
          <th>actions</th>
        </tr>
        {rooms.map((room, roomId) => (
          <tr>
            <td>{room.name}</td>
            <td>{room.width}</td>
            <td>{room.height}</td>
            <td>{room.x}</td>
            <td>{room.y}</td>
            <td>
              <button id={room.id} onClick={() => removeRoom(roomId)}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => loadEdit(room.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
