import { warriorSVG } from "./svgData";

export default DrawCharacter = () => {
  return (
    <td>
      <div style={{ position: "absolute", opacity: "60%" }}>{background}</div>
      <div style={{ position: "relative" }}>{demonSVG()}</div>
    </td>
  );
};
