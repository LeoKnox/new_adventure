import { useState, useEffect } from "react";
import { changeRoomDD, singleRoom } from "./dungeonData.js";
import { Level } from "./Level.js";

export default CreateRoom = ({ newId, setLoadComponent, submitRoom }) => {
  const [height, setHeight] = useState(singleRoom(newId).height);
  const [width, setWidth] = useState(singleRoom(newId).width);
  const [drag, setDrag] = useState(false);
  const [show, setShow] = useState(false);
  const [roomDrag, setRoomDrag] = useState(false);
  const leftarrow = <button onClick={() => setWidth(width - 1)}>←</button>;

  const arrow = <button onClick={() => setWidth(width + 1)}>→</button>;
  const upArrow = (
    <button onClick={() => setHeight(height - 1)} style={{ width: width * 40 }}>
      ↑
    </button>
  );
  const downArrow = (
    <button onClick={() => setHeight(height + 1)} style={{ width: width * 40 }}>
      ↓
    </button>
  );

  const [tempList, setTempList] = useState();
  const submitButton = () => {
    let temp = { ...singleRoom(newId), ["height"]: height, ["width"]: width };
    changeRoomDD(temp, newId);
  };
  const addItem = (e) => {
    console.log("add item");
    setShow(false);
  };
  const onDown = (e) => {
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
          <td style={{ width: "40px" }}>
            <button
              value={[j, i]}
              //onClick={addItem}
              //onMouseMove={onMove}
              //onMouseDown={onDown}
              //onMouseup={onUp}
            >
              {show ? dropDown() : "j"}
            </button>
          </td>
        );
      });
      return <tr>{tempRow}</tr>;
    });
    //temp.unshift(<p>{upArrow}</p>);
    temp.push(<p>{downArrow}</p>);
    temp.push(<button onClick={submitButton}>submit</button>);
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
    <div>
      <h1>create room map {width}</h1>
      <td>{arrow}</td>
      <div
        style={{
          position: "relative",
          top: "0",
          left: "0",
          width: "80%",
          height: "80%",
        }}
      >
        {leftarrow}
      </div>

      <div style={{ display: "inline" }}>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "80%",
            height: "80%",
          }}
        >
          <div
            style={{
              position: "relative",
              top: "0",
              left: "0",
              width: "80%",
              height: "80%",
            }}
          >
            {tempList}
            <div
              style={{
                position: "relative",
                top: "0",
                left: "0",
                width: "80%",
                height: "80%",
              }}
            >
              <tr>
                <td style={{ width: "40px" }}>*</td>
                <td style={{ width: "40px" }}>*</td>
                <td style={{ width: "40px" }}>*</td>
              </tr>
              <tr>
                <td>*</td>
                <td>*</td>
                <td>*</td>
              </tr>
              <tr>
                <td>*</td>
                <td>*</td>
                <td>*</td>
              </tr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
