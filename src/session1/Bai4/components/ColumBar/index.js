import React from "react";
import styles from "./columbar.module.css";

function ColumBar({ text = "MON", ratio = 40, color = "#F75354" }) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#FCFCFC",
        borderTop: "1px solid #e3e6e6",
        paddingTop: "25px",
      }}
    >
      <div className={styles.colum}>
        <div style={{ width: `${ratio}%`, backgroundColor: color }}></div>
        <div style={{ width: `${100 - ratio}%` }}></div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default ColumBar;
