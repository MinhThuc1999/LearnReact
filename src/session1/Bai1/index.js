import React from "react";

function Bai1({
  text = "BANDWIDTH",
  color1 = "#E54D4C",
  color2 = "#F75354",
  ratio = 50,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginBottom: "10px",
          height: "50px",
          color: "#FFF",
        }}
      >
        <div style={{ width: "20%", backgroundColor: `${color1}` }}>{text}</div>
        <div style={{ width: "80%", display: "flex" }}>
          <div style={{ width: `${ratio}%`, backgroundColor: `${color2}` }}>
            {ratio}%
          </div>
          <div
            style={{ width: `${100 - ratio}%`, backgroundColor: "#FAFAFA" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Bai1;
