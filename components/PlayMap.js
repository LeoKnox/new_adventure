import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
  let x = 10;
  return (
    <>
      <p>Map</p>
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
    </>
  );
};
