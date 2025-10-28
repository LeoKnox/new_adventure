import { useState, useEffect } from "react";
import { singleRoom } from "./dungeonData.js";
import { Level } from "./Level.js";

export default CreateRoom = (newId, setLoadComponent, submitRoom) => {
  console.log(singleRoom(newId) + " create room");
  const [height, setHeight] = useState(singleRoom(newId).height);
  const [width, setWidth] = useState(singleRoom(newId).width);
  const [drag, setDrag] = useState(false);
  const [show, setShow] = useState(false);
  const [roomDrag, setRoomDrag] = useState(false);
  const arrow = <button onClick={() => setWidth(width + 1)}>→</button>;
  const downArrow = (
    <button onClick={() => setHeight(height + 1)} style={{ width: width * 40 }}>
      ↓
    </button>
  );

  const [tempList, setTempList] = useState();

  const addItem = (e) => {
    console.log("add item");
    console.log(e.target.value[0]);
    setShow(false);
  };
  const onDown = (e) => {
    console.log("red");
    setDrag(true);
    //setShow(false);
  };
  const onMove = (e) => {
    if (setDrag) {
      console.log("move" + e.clientX);
    }
  };
  const onUp = (e) => {
    setDrag(false);
  };
  const dropDown = () => {
    return (
      <>
        <select>
          <option>monster</option>
        </select>
      </>
    );
  };

  useEffect(() => {
    let temp = Array.from({ length: height }, (v, i) => {
      const tempRow = Array.from({ length: width }, (w, j) => {
        return (
          <>
            <td style={{ width: "40px" }}>
              <button
                value={[j, i]}
                //onClick={addItem}
                onMouseMove={onMove}
                onMouseDown={onDown}
                onMouseup={onUp}
              >
                {show ? dropDown() : "j"}
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
    temp.push(<>{downArrow}</>);
    setTempList(temp);
  }, [height, width, show]);

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
