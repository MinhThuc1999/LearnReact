import React from "react";
import styles from "./profiles.module.css";

function CateProflile({
  iconName = "fa-solid fa-calendar-days",
  unit = "DOB",
  content = "23/05/2014",
}) {
  return <div className={styles.container}>
      <div>
          <span className={styles.icon}><i className={iconName}></i></span>
          <span>{unit}</span>
      </div>
      <div className={styles.content}>
          {content}
      </div>
  </div>;
}

export default CateProflile;
