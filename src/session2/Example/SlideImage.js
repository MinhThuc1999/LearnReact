import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import styles from "./slideimage.module.css";

function SlideImage() {
  let [index, setIndex] = React.useState(1);

  return (
    <div style={{ width: 600, height: 400, margin: "30px auto" }}>
      {index}
      <div>
        <img src='./././images/1.jpg' alt="hhhs" />
      </div>
      <div className={styles.control}>
        <p className={styles.previous}>
          <GrPrevious
            onClick={() => {
              setIndex(index - 1);
            }}
          />
        </p>
        <p className={styles.next}>
          <GrNext
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default SlideImage;
