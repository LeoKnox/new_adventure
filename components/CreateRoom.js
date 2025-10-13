import { useState } from "react";

export default CreateRoom = () => {
  const height = 2;
  const width = 2;
  const arrow = <button>></button>;
  const [tempList, setTempList] = useState(
    Array.from({ length: 2 }, (v, i) => {
      const tempRow = Array.from({ length: 3 }, (w, j) => {
        return <td>i</td>;
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    })
  );
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map</h1>
      {[...tempList]}
    </>
  );
};
