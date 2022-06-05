import React from "react";
import styles from "./buttonAccor.module.css";

const oneAtatimeList = [
  {
    title: "title1",
    content: "conten1",
  },
  {
    title: "title2",
    content: "conten2",
  },
  {
    title: "title3",
    content: "conten3",
  },
];

function OneAtATime({ list = oneAtatimeList }) {
  let [accordionsIndex, setAccordionsIndex] = React.useState(0);
  return (
    <div>
      <p className={styles.title}>ONE AT A TIME</p>

      {oneAtatimeList.map((item, index) => {
        let isAccordionsIndex = index === accordionsIndex;
        return (
          <div>
            <div
              onClick={() => {
                setAccordionsIndex(index);
              }}
              style={{
                marginBottom: isAccordionsIndex ? "0" : "5px",
                backgroundColor: isAccordionsIndex ? "#47B475" : "#F5F5F5",
                color: isAccordionsIndex ? "white" : "#6F6F6F",
              }}
              className={styles.title_accordions}
            >
              {item.title}
            </div>
            <div>
              {isAccordionsIndex && (
                <div className={styles.content_accordions}>{item.content}</div>
              )}
            </div>
          </div>
        );
      })}

      {/* {oneAtatimeList.map((item, index) => {
        if (index === accordionsIndex) {
          return (
<p className={styles.content_accordions}>{item.content}</p>

          );
        }
      })} */}
    </div>
  );
}

export default OneAtATime;
