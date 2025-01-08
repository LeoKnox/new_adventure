import { warriorSVG } from "./svgData";

export default DrawCharacter = ({ background }) => {
  console.log("char");
  console.log({ background });
  return (
    <td>
      <div style={{ position: "absolute", opacity: "60%" }}>{background}</div>
      <div style={{ position: "relative" }}>{warriorSVG()}</div>
    </td>
  );
};
