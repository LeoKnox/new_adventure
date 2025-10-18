import { useState, useEffect } from "react";

export default CreateRoom = () => {
  const [height, setHeight] = useState(2);
  const [iwidth, setWidth] = useState(3);
  const arrow = <button onClick={() => resetRoom()}>></button>;

  const [tempList, setTempList] = useState(
    Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: iwidth }, (w, j) => {
        return <td>-i-</td>;
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
    console.log(iwidth);
    setWidth(iwidth + 1);
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: iwidth + 1 }, (w, j) => {
        return <td>+i+</td>;
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    });

    console.log(temp);
    console.log(iwidth);
    setTempList(temp);
  };
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map {iwidth}</h1>
      {tempList}
    </>
  );
};
