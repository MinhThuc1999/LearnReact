import React from "react";

function Bai2({
  iconName = "fa-solid fa-house",
  text = "HTML",
  color1 = "green",
  ratio = 50,
  colorIcon = "green",
}) {
  return (
    <div>
      <div>
        <div style={{ display: "flex", maxWidth:'500px', marginLeft: '30px', marginBottom: '10px'}}>
          <div style={{width: '30%'}}>
            <i
              style={{
                display: "inline-block",
                color: "#FFF",
                padding: "7px",
                backgroundColor: `${colorIcon}`,
                borderRadius: '5px',
              paddingTop: '7px',
              marginRight: '10px'
              }}
              className={iconName}
            ></i>
            <span>{text}</span>
          </div>
          <div style={{ display: "flex", width: '70%', height: '16px', paddingTop: '7px'}}>
            <div
              style={{
                width: `${ratio}%`,
                backgroundColor: `${color1}`,
                
                
              }}
            ></div>
            <div
              style={{ width: `${100 - ratio}%`, backgroundColor: '#F5F5F5' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bai2;
