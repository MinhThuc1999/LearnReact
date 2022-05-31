import React from "react";
import styles from "./bai4.module.css";
import ColumBar from "./components/ColumBar";

function Block4({
  text = "TODAY'S VISITORS",
  total = 245999,
  ratioArray = [40, 30, 60, 70, 60],
}) {
  return (
    <div
      style={{
        textAlign: "center",
        boxShadow: "5px 10px #E8ECEF",
        border: "1px solid #E8ECEF",
      }}
    >
      <p>{text}</p>
      <p className={styles.total}>{total}</p>
      <div className={styles.container}>
        <ColumBar ratio={ratioArray[0]} />
        <ColumBar text="TUE" ratio={ratioArray[1]} color="#51D567" />
        <ColumBar text="WED" ratio={ratioArray[2]} color="#FCD518" />

        <ColumBar text="THU" ratio={ratioArray[3]} color="#31C8DD" />

        <ColumBar text="TUE" ratio={ratioArray[4]} color="#F78153" />
      </div>
    </div>
  );
}

export default Block4;
