import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import stylesSlide from "./slideimage.module.css";

function SlideImage() {
  let [index, setIndex] = React.useState(1);
  let imgArr = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        width: 600,
        height: 400,
        margin: "30px auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <div>
        <img
          src={`https://raw.githubusercontent.com/MinhThuc1999/LearnReact/master/public/images/anhgaixinh${index}.jpg`}
          alt=""
        />
      </div>
      <div className={stylesSlide.control}>
        <p className={stylesSlide.previous}>
          <GrPrevious
            onClick={() => {
              setIndex(index - 1);
              if (index === 1) {
                setIndex(5);
              }
            }}
          />
        </p>
        <p className={stylesSlide.next}>
          <GrNext
            onClick={() => {
              setIndex(index + 1);
              if (index === 5) {
                setIndex(1);
              }
            }}
          />
        </p>
      </div>

      <div className={stylesSlide.img_bot}>
        {imgArr.map((item) => {
         return(
          <p>
          <img 
            className={stylesSlide.img_mini} onClick = {() =>{
              setIndex(item);
            }}
            src={`https://raw.githubusercontent.com/MinhThuc1999/LearnReact/master/public/images/anhgaixinh${item}.jpg`}
            alt=""
          />
        </p>
         );
        })}
      </div>
    </div>
  );
}

export default SlideImage;
