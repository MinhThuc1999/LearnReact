import React from "react";
import Bai1 from "./Bai1";
import Bai2 from "./Bai2";
import Bai3 from "./Bai3";
import Block4 from "./Bai4";
import BlockProflile from "./Bai5";
import Products from "./Bai6";
import ProductsTech from "./Bai7";

function Session1() {
  return (
    <div>
      <Bai1 text="BANDWIDTH" color1="#E54D4C" color2="#F75354" ratio={20} />
      <Bai1 text="STORAGE" color1="#2DB8CD" color2="#31C8DD" ratio={50} />
      <Bai1 text="USER" color1="#4AC25E" color2="#51D567" ratio={70} />
      <Bai1 text="VISITORS" color1="#E9C318" color2="#FCD518" ratio={30} />
      <Bai1 text="EMAILS" color1="#BB70D5" color2="#CB79E7" ratio={45} />
      <Bai1 text="BASIC" color1="#EB59D6" color2="#FE60E8" ratio={80} />
      <Bai1 text="OTHER" color1="#5890DA" color2="#619CEC" ratio={20} />

      <h3>Bài 2</h3>

      <Bai2 ratio={60} />
      <Bai2
        iconName="fa-brands fa-apple"
        text="CSS"
        color1="#F65452"
        colorIcon="#F65452"
        ratio={50}
      />
      <Bai2
        iconName="fa-solid fa-cake-candles"
        text="PHP"
        color1="#33CADD"
        colorIcon="#33CADD"
        ratio={30}
      />

      <Bai2
        iconName="fa-solid fa-basketball"
        text="JAVA"
        color1="#FCD518"
        colorIcon="#FCD518"
        ratio={80}
      />

      <Bai2
        iconName="fa-brands fa-keybase"
        text=".NET"
        color1="#CC7AE9"
        colorIcon="#CC7AE9"
        ratio={50}
      />

      <h3>Bài 3</h3>

      <div style={{ display: "flex" }}>
        <Bai3 />
        <Bai3
          iconName="fa-brands fa-twitter"
          mediaNetwork="Twitter"
          color="#31C8DD"
          total={40000}
          unit="Tweets"
        />
        <Bai3
          iconName="fa-brands fa-google-plus-g"
          mediaNetwork="Google + "
          color="#F78153"
          total={460000}
          unit="Plus"
        />
        <Bai3
          iconName="fa-brands fa-pinterest"
          mediaNetwork="Pinterest"
          color="#F75354"
          total={34000}
          unit="Pins"
        />
      </div>

      <h3>Bài 4</h3>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Block4 />
        <Block4
          text="YESTERDAY'S VISITORS"
          total={156999}
          ratioArray={[40, 50, 75, 60, 10]}
        />
        <Block4
          text="TOTAL DOWNLOADS"
          total={124599}
          ratioArray={[40, 50, 75, 60, 10]}
        />
        <Block4
          text="CURRENT INCOME"
          total={"$" + 156999}
          ratioArray={[40, 50, 75, 60, 10]}
        />
      </div>

      <h3>Bài 5 UI</h3>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <BlockProflile />
        <BlockProflile
          image="https://2sao.vietnamnetjsc.vn/images/2018/07/07/08/13/ba-tung-huyen-anh-1.jpg"
          name="JAME SMITH"
          job="Designer"
          infoContactArr={["smith12@gmail.com", "0376875058"]}
        />
        <BlockProflile
          image="https://media-cdn-v2.laodong.vn/storage/newsportal/2021/1/25/874070/SON3.jpg"
          name="TOM HANKS"
          job="UI Designer"
          infoContactArr={["peter1@gmail.com", "4887121585"]}
        />
        <BlockProflile
          image="https://vcdn-thethao.vnecdn.net/2021/01/06/son-1609920802-3053-1609920999.jpg"
          name="SILVESTER STALIN"
          job="Testing"
          infoContactArr={["thuyvy08@gmail.com", "5448775058"]}
        />
      </div>

      <h3>Bài 6 UI</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Products
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-6-images/1.jpg"
          namePro="EODEM MODO TYPI"
          modifies="simply dummy text of the printing and typesetting industry."
          sizes="XL/XXL/S"
          price="$25"
        />
        <Products
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-6-images/2.jpg"
          namePro="SEQUITUR MUTATIONEM"
          modifies="simply dummy text of the printing and typesetting industry."
          sizes="XL/XXL/S"
          price="$45"
        />
        <Products
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-6-images/3.jpg"
          namePro="EODEM MODO TYPI"
          modifies="simply dummy text of the printing and typesetting industry."
          sizes="XL/XXL/S"
          price="$105"
        />
        <Products
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-6-images/4.jpg"
          namePro="EODEM MODO TYPI"
          modifies="simply dummy text of the printing and typesetting industry."
          sizes="XL/XXL/S"
          price="$65"
        />
      </div>
      <hr></hr>
      <h3>Bài 7 UI</h3>
      <div style={{display: 'flex'}}>
        <ProductsTech
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-7-images/1.jpg"
          nameShop="YOUNG SHOP"
          sale={-39}
          priceSale = '14227'
          price={10255}
          productName = 'LG White Front Load Steam Washer'
          soldStatus={80}
          sold = {10}
        />
         <ProductsTech
          img="https://raw.githubusercontent.com/ngothanhtung/reactjs-tutorials/master/3-Homeworks/Session01/block-ui-7-images/1.jpg"
          nameShop="YOUNG SHOP"
          sale={-39}
          priceSale = '14227'
          price={10255}
          productName = 'LG White Front Load Steam Washer'
          soldStatus={80}
          sold = {10}
        />
      </div>
    </div>
  );
}

export default Session1;
