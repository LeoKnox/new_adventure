import { useState, useEffect } from "react";

export default CreateRoom = () => {
  const [height, setHeight] = useState(2);
  const [tempList, setTempList] = useState([]);
  const [width, setWidth] = useState(2);
  const arrow = <button onClick={() => resetRoom()}>></button>;
  useEffect(() => {
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width }, (w, j) => {
        return <td>i</td>;
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    });
    setTempList(temp);
  }, [height]);

  const resetRoom = () => {
    console.log("reset room");
    setHeight(width + 1);
  };
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map {height}</h1>
      {tempList}
    </>
  );
};
