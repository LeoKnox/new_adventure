import { demonSVG, wallSVG } from "./svgData.js";

export default Monster = (background) => {
  return (
    <td>
      <div style={{ position: "absolute", opacity: "60%" }}>
        {() => background()}
      </div>
      <div style={{ position: "relative" }}>{demonSVG()}</div>
    </td>
  );
};
