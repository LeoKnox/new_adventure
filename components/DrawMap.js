import { useState, useEffect } from "react";
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

    for (let j = 0; j < 6; j++) {
      temp[j] = <td>+</td>;
    }

    //setMapState(temp);
    console.log(temp);
  });
  /*
    <>
      <tr>
        {[...Array(6)].map(() => (
          <td>{wallSVG()}</td>
        ))}
      </tr>
      {[...Array(5)].map(() => (
        <tr>
          <td>{wallSVG()}</td>
          {[...Array(4)].map(() => (
            <td>{floorSVG()}</td>
          ))}
          <td>{wallSVG()}</td>
        </tr>
      ))}
      <tr>
        {[...Array(6)].map(() => (
          <td>{wallSVG()}</td>
        ))}
      </tr>
    </>*/
  //console.log(mapState.props.children);
  const addCharacter = (row, column) => {
    console.log([...mapState]);
    let temp = mapState[2].props.children;
    //let temp = [...mapState[0].props.children];
    console.log(temp);
    let newtemp = [...temp[1].props.children];
    newtemp[column] = (
      <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{floorSVG()}</div>
        <div style={{ position: "relative" }}>{warriorSVG()}</div>
      </td>
    );
    temp[row].props.children = newtemp;
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
