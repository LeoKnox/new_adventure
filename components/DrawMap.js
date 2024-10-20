import { floorSVG, wallSVG } from "./svgData";

export default DrawMap = (x = 10) => {
  return (
    <>
      <tr>
        {[...Array(x + 2)].map((z, i) => (
          <>
            <td id={i}>{wallSVG()}</td>
          </>
        ))}
      </tr>
      {[...Array(x)].map((y, i) => (
        <tr>
          <td> {wallSVG()}</td>
          {[...Array(x)].map((z, i) => (
            <>
              <td>{floorSVG()}</td>
            </>
          ))}
          <td> {wallSVG()}</td>
        </tr>
      ))}
      <tr>
        {[...Array(x + 2)].map((z, i) => (
          <>
            <td>{wallSVG()}</td>
          </>
        ))}
      </tr>
    </>
  );
};
