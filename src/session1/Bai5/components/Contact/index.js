import React from "react";
import styles from "./contact.module.css";
function ContactBlock({
  text = "EMAIL ID",
  iconName = "fa-solid fa-envelope",
  content = "robot12@gmail.com",
  color = '#F75354'
}) {
  return <div className={styles.container} style={{backgroundColor:`${color}`}}>
      <p>
          {text}
      </p>
      <p>
          <span className={styles.icon}><i className={iconName}></i></span>
          <span>{content}</span>
      </p>
  </div>;
}

export default ContactBlock;
