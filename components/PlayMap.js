import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
  let x = 10;
  return (
    <>
      <p>Map</p>
      <tr>
        {[...Array(x)].map((y, i) => (
          <>
           <td> {wallSVG()}</td>
            {[...Array(x)].map((z, i) => (
          <>
            <td>{floorSVG()}</td>

            
          </>
        ))}
          </>
        ))}
      </tr>
    </>
  );
};
