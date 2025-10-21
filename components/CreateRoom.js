import { useState, useEffect } from "react";

export default CreateRoom = () => {
  const [height, setHeight] = useState(2);
  const [width, setWidth] = useState(3);
  const arrow = <button onClick={() => setWidth(width + 1)}>→</button>;
  const downArrow = <button onClick={() => setHeight(height + 1)}>↓</button>;

  const [tempList, setTempList] = useState();

  const addItem = (e) => {
    console.log("add item");
    console.log(e.target.value[0]);
  };

  useEffect(() => {
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width }, (w, j) => {
        return (
          <>
            <td>
              <button value={[j, i]} onClick={addItem}>
                i
              </button>
            </td>
          </>
        );
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    });
    temp.push(<tr>{downArrow}</tr>);
    setTempList(temp);
  }, [height, width]);

  /*const resetRoom = () => {
    console.log("reset room");
    console.log(width);
    let tempWidth = width + 1;
    setWidth(tempWidth);
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width + 1 }, (w, j) => {
        return <td>+i+</td>;
      });
      return (
        <tr>
          {tempRow}
          <td>{arrow}</td>
        </tr>
      );
    });

    console.log("contine reset");
    console.log(width);
    setTempList(temp);
  };*/
  console.log("create room new");
  console.log(tempList);
  return (
    <>
      <h1>create room map {width}</h1>
      {tempList}
    </>
  );
};
