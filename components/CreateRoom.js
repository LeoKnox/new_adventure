import { useState, useEffect } from "react";

export default CreateRoom = () => {
  const [height, setHeight] = useState(2);
  const [width, setWidth] = useState(3);

  const [tempList, setTempList] = useState(
    Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width }, (w, j) => {
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

  /*useEffect(() => {
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
  }, [height, width]);*/

  const resetRoom = () => {
    console.log("reset room");
    console.log(width);
    setWidth(width + 1);
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width + 1 }, (w, j) => {
        return <td>i</td>;
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    });

    console.log("w" + width);
    setTempList(temp);
  };
  const arrow = <button onClick={resetRoom}>></button>;
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map {width}</h1>
      {tempList}
    </>
  );
};
