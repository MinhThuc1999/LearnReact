import React from "react";
import styles from "./bai6.module.css";

function Products({
  img = "anh",
  namePro = "aogucci",
  modifies = "aodep",
  sizes = "xl",
  price = "$25",
}) {
  return (
    <div className={styles.container}>
      <p>
        <img className={styles.img} src={img} alt="" />
      </p>
      <p className={styles.namePro}>{namePro}</p>
      <p className={styles.modifies}>{modifies}</p>
      <p>{sizes}</p>
      <p className={styles.price}>{price}</p>
      <p >
         <button className={styles.buttonCart}>
         <span><i className="fa-solid fa-cart-arrow-down"></i></span>
          <span> Add to cart</span>
         </button>
      </p>
    </div>
  );
}

export default Products;
