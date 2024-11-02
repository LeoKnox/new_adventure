import { useState, useEffect, cloneElement } from "react";
import { floorSVG, wallSVG, warriorSVG } from "./svgData";

export default DrawMap = ({ width = 10, height, x = 10 }) => {
  const [mapState, setMapState] = useState(
    {for (let x=0; x<width; x++) {
      <tr>
       {for (let y=0; y<height) {
        <td>*</td>
       }}
      </tr>
    }}
  );


  const addCharacter = (row, column) => {
    let temp = mapState[1].props.children;
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
