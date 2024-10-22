import { floorSVG, wallSVG } from "./svgData";

export default DrawMap = ({ width, height, x = 10 }) => {
  return (
    <>
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
          {[...Array(width)].map((z, i) => (
            <>
              <td id={y + ":" + z}>{floorSVG()}</td>
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
