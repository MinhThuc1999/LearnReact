import React from "react";
import styles from "./verticalTabs.module.css";

const defaultTab = [
  {
    title: "tab 1",
    content1: "abc",
    titleContent: "abc",
    content2: "abc",
  },
  {
    title: "tab 1",
    content1: "abc",
    titleContent: "abc",
    content2: "abc",
  },
  {
    title: "tab 1",
    content1: "abc",
    titleContent: "abc",
    content2: "",
  },
  {
    title: "tab 1",
    content1: "abc",
    titleContent: "abc",
    content2: "abc",
  },
];
function VerticalTabs({ tabs = defaultTab }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div>
      <div className={styles.vertical_container}>
        <p className={styles.vertical_h2}>VERTICAL BUTTONS</p>
        <div className={styles.vertical_block}>
          <div className={styles.vertical_title_button}>
            {tabs.map((item, index) => {
              const isSelectedIndex = index === selectedIndex;
              return (
                <button
                  onClick={() => {
                    setSelectedIndex(index);
                  }}
                  className={styles.button}
                  style={{
                    backgroundColor: isSelectedIndex ? "#47B475" : "#F5F5F5",
                    color: isSelectedIndex ? "white" : "black",
                  }}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className={styles.vertical_content}>
            {tabs.map((item, index) => {
              if (index === selectedIndex) {
                return (
                  <div>
                    <p style={{ marginTop: 0 }}>{item.titleContent}</p>
                    <hr style={{ width: "100%", display: "block" }}></hr>
                    <p>{item.content1}</p>
                    <p>{item.content2}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalTabs;
