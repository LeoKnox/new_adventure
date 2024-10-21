import { floorSVG, wallSVG } from "./svgData";

export default DrawMap = ({ width, height, x = 10 }) => {
  return (
    <>
      <tr>
        {[...Array(width)].map((z, i) => (
          <>
            <td id={i}>{wallSVG()}</td>
          </>
        ))}
      </tr>
      {[...Array(width)].map((y, i) => (
        <tr>
          <td> {wallSVG()}</td>
          {[...Array(height)].map((z, i) => (
            <>
              <td>{floorSVG()}</td>
            </>
          ))}
          <td> {wallSVG()}</td>
        </tr>
      ))}
      <tr>
        {[...Array(width)].map((z, i) => (
          <>
            <td>{wallSVG()}</td>
          </>
        ))}
      </tr>
    </>
  );
};
