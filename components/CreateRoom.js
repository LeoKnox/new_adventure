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
      <div>
        <h1>create room map {width}</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr/1fr/1fr",
            gridTemplateRows: "1fr/1fr/1fr",
            //position: "absolute",
          }}
        >
          <div style={{ gridcolumn: "3/4", gridRow: "1/2" }}>{upArrow}</div>
          <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>{leftarrow}</div>
          <div style={{ gridColumn: "3/4", gridRow: "2/3" }}>{arrow}</div>
          <div style={{ gridColumn: "2/3", gridRow: "2/3" }}>{tempList}</div>
          <div style={{ gridcolumn: "2/3", gridRow: "3/4" }}>{downArrow}</div>

          <div style={{ gridColumn: "2/3", gridRow: "2/3" }}>
            <tr>
              <td>*</td>
              <td>*</td>
            </tr>
            <tr>
              <td>*</td>
              <td>*</td>
            </tr>
          </div>
        </div>
      </div>
    </>
  );
};
