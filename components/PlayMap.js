import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
  let x = 40;
  return (
    <>
      <p>Map</p>
      <tr>
        <td style={{width:60}}>{floorSVG()}</td>
        <td>{wallSVG()}</td>
      </tr>
    </>
  );
};
