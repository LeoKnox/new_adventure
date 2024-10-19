import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
  let x = 10;
  return (
    <>
      <p>Map</p>
      <tr>
      {[...Array(10)].map((y, i) =>(
        <>
    <td>{floorSVG()}</td>
    <td> {wallSVG()}</td>
    </>
  ))}
        
      </tr>
    </>
  );
};
