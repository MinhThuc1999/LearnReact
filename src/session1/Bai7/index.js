import React from "react";
import styles from "./bai7.module.css";

function ProductsTech({
  sale = -39,
  img = "img",
  nameShop = "lazada",
  priceSale = 14227,
  price = 10255,
  productName = "maygiat",
  soldStatus = 80,
  sold = 20,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.titleProduct}>
        <p>
          <img className={styles.img} src={img} alt="" />
        </p>
        <p className={styles.sale}>{sale}%</p>
        <p>{nameShop}</p>
      </div>
      <div>
        <p>
          <span className={styles.priceSale}>${priceSale}</span>
          <del>${price}</del>
          <span style={{ color: "red" }}>18% off</span>
        </p>
        <p className={styles.productName}>{productName}</p>
        <p>
          <span className={styles.starYelow}>
            <i class="fa-solid fa-star"></i>
          </span>
          <span className={styles.starYelow}>
            <i class="fa-solid fa-star"></i>
          </span>
          <span className={styles.starYelow}>
            <i class="fa-solid fa-star"></i>
          </span>
          <span className={styles.starYelow}>
            <i class="fa-solid fa-star"></i>
          </span>
          <span style={{ color: "#e4ebeb" }}>
            <i class="fa-solid fa-star"></i>
          </span>
        </p>
        <div className={styles.soldStatus}>
          <div style={{ width: `${soldStatus}%`, backgroundColor: "#FBB901" }}></div>
          <div style={{ width: `${100-soldStatus}%`, backgroundColor: "#E7E7E7" }}></div>
        </div>
        <p className={styles.sold}>Sold: {sold}</p>
      </div>
    </div>
  );
}

export default ProductsTech;
