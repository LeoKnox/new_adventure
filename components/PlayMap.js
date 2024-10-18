import { floorSVG, wallSVG } from "./svgData";

export default PlayMap = () => {
    let x = 40;
  return (
    <>
      <p>Map</p>
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        width=x+"px"
        height="80px"
        viewBox="0 0 535.51 535.51"
      >
        {floorSVG()}
      </svg>
    </>
  );
};
