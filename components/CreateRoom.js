import { useState, useEffect } from "react";

export default CreateRoom = () => {
  const [height, setHeight] = useState(2);
  const [tempList, setTempList] = [];
  const width = 2;
  const arrow = <button onClick={() => resetRoom()}>></button>;
  useEffect(() => {
    setTempList(
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
    const resetRoom = () => {
      console.log("reset room");
      setHeight(height + 1);
    };
  });
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map {height}</h1>
      {tempList}
    </>
  );
};
