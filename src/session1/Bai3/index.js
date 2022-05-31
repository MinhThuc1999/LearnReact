import React from "react";
import styles from './bai3.module.css';

function Bai3({
  iconName = "fa-brands fa-facebook-f",
  mediaNetwork = "Facebook",
  total = 500000,
  unit = "Likes",
  color = '#619CEC'
}) {
  return (
    <div style={{width: '100%'}}>
      <div className={styles.block} style={{backgroundColor: `${color}`, marginRight: '30px'}}>
          <p className={styles.icon}><i className= {iconName}></i></p>
          <p className={styles.media}>{mediaNetwork}</p>
          <p>
              <span className={styles.total}>{total}</span>
              <span className={styles.unit}>{unit}</span>

          </p>
      </div>
    </div>
  );
}

export default Bai3;
