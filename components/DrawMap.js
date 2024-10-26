import { useState } from "react";
import { floorSVG, wallSVG } from "./svgData";

export default DrawMap = ({ width = 10, height, x = 10 }) => {
  const [mapState, setMapState] = useState(
    [...Array(5)].map(() => (
      <tr>
        {[...Array(4)].map(() => (
          <td>*</td>
        ))}
      </tr>
    ))
  );
  const addCharacter = (row, column) => {
    let temp = [...mapState];
    console.log(temp);
    let newtemp = [...mapState[1].props.children];
    newtemp[column] = "^";
    temp[row] = newtemp;
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
