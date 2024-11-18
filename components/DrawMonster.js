import { demonSVG, wallSVG } from "./svgData.js";

export default Monster = () => {
  return (
    <td>
        <div style={{ position: "absolute", opacity: "60%" }}>{wallSVG()}</div>
      <div style={{ position: "relative" }}>{demonSVG()}</div>
    </td>
  );
};
