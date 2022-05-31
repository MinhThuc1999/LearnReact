import React from "react";
import CateProflile from "./components/Profiles";
import ContactBlock from "./components/Contact";
import styles from "./bai5.module.css";

function BlockProflile({
  image = "https://image-us.eva.vn/upload/2-2022/images/2022-04-08/large/untitled-3-1649407351-829-width640height480.jpg",
  name = "ROBORT PATTISON",
  job = "Developing",
  infoContactArr = ["robot12@gmail.com", "0393829401"],
}) {
  return (
    <div style={{ border: "1px solid #e6ebeb", padding: "5px 10px", boxShadow:'5px 6px #E9EDF0' }}>
      <div>
        <p>
          <img className={styles.img} src={image} alt="" />
        </p>
        <p>{name}</p>
        <p className={styles.job}>{job}</p>
      </div>

      <div style={{marginBottom: '20px'}}>
        <CateProflile />
        <CateProflile iconName="fa-solid fa-heart" unit="BG" content="B+" />
        <CateProflile
          iconName="fa-solid fa-graduation-cap"
          unit="EDU"
          content="MCA"
        />
        <CateProflile
          iconName="fa-solid fa-location-dot"
          unit="RES"
          content="Bangalore"
        />
      </div>
      <div>
        <ContactBlock content={infoContactArr[0]} />
        <ContactBlock
          text="PHONE NO"
          iconName="fa-solid fa-phone"
          color="#51D567"
          content={infoContactArr[1]}
        />
      </div>
    </div>
  );
}

export default BlockProflile;
