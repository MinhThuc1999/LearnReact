import React from "react";
import { AiFillLike, AiOutlineLike, AiFillStar, AiOutlineStar } from "react-icons/ai";

function Example() {
  let [like, setLike] = React.useState(false);
  let [star , setStars] = React.useState(0);
  let [input , setInput] = React.useState('');
  let starArr = [1,2,3,4,5];


  return (
    <div>
     <div> <h1>like</h1>
     {like && (
        <AiFillLike
          onClick={() => {
            setLike(false);
          }}
        />
      )}

      {!like && (
        <AiOutlineLike
          onClick={() => {
            setLike(true);
          }}
        />
      )}
     </div>

     <div><h1>Rating</h1>
          {starArr.map((item) => {
              if(item <=star){
                  return(<AiFillStar onClick={() => {
                    setStars(item);
                }} />);
              }
              return(
                  <AiOutlineStar onClick={() => {
                    setStars(item);
                }}/>
              );
          })}


     </div>
     <div> <h1>Handling</h1> 
          <input onChange={(e) => {
              console.log(e.target.value);
              setInput(e.target.value);
          }} />
        <div>{input}</div>
     </div>
    </div>
  );
}

export default Example;
