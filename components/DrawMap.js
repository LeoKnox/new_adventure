import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";

export default DrawMap = ({ width = 10, height, x = 10 }) => {
  const [mapState, setMapState] = useState(
    Array.from(Array(5), () => (
      <tr>
        {Array.from(Array(7), () => (
          <td>+</td>
        ))}
      </tr>
    ))
  );
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 8; j++) {
        row.push(<td>+</td>);
      }
      temp.push(<tr>{row}</tr>);
    }
    setMapState(temp);
  }, []);

  const addCharacter = (row, column) => {
    let temp = mapState[1].props.children;
    console.log(temp);
    let newtemp = mapState[1].props.children;
    console.log(newtemp);
    newtemp[1].props.children = (
      /*
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>*/
      <td>^</td>
    );
    newtemp.map((x, i) => (i == 1 ? { children: <td>^</td> } : x));
    console.log(newtemp);
    temp[row] = newtemp;
    console.log(temp);
    console.log("Ran:");
    setMapState(temp);
  };
  return (
    <>
      {mapState}
      <button onClick={() => addCharacter(2, 3)}>cc</button>
      <tr>
        {[...Array(width + 2)].map((z, i) => (
          <>
            <td id={i}>{wallSVG()}</td>
          </>
        ))}
      </tr>
      {[...Array(height)].map((y, i) => (
        <tr>
          <td> {wallSVG()}</td>
          {[...Array(width)].map((z, ii) => (
            <>
              <td id={[i, ii]}>{floorSVG()}</td>
            </>
          ))}
          <td> {wallSVG()}</td>
        </tr>
      ))}
      <tr>
        {[...Array(width + 2)].map((z, i) => (
          <>
            <td>{wallSVG()}</td>
          </>
        ))}
      </tr>
    </>
  );
};
