import React from "react";
import styles from "./tabs.module.css";

const defaultTab = [
  {
    title: "tab 1",
    content: "abc",
  },
  {
    title: "tab 2",
    content: "123",
  },
  {
    title: "tab 3",
    content: "hfff",
  },
  {
    title: "tab 4",
    content: "abcàh",
  },
];

function Tabs({ tabs = defaultTab }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <div className={styles.container}>
      <h2>BUTTON TABS</h2>
      <div>
        {tabs.map((item, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              onClick={() => {
                setSelectedIndex(index);
              }}
              style={{
                backgroundColor: isActive ? "green" : "#f5f5f5",
                color: isActive ? "white" : "grey",
              }}
              className={styles.button_tab}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div>
        {tabs.map((item, index) => {
          if (index === selectedIndex) {
            return <div>{item.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Tabs;
