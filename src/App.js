import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
function Block(props){
  return(
    <div>
      <h2>  {props.title}  </h2>
      <p>{props.content}</p>
    </div>
  );
}



function App() {

  const [count, setCount] = React.useState(0);



  return (
    <div>
    <Header text='Aptech' color='red' size = {16}></Header>

   <div style={{display: 'flex'}}>
   <Block title = 'Declarative' content = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'></Block>
   <Block title = 'Declarative' content = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'></Block>
   <Block title = 'Declarative' content = 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.'></Block>

   </div>
     
      <h2>
        Vy
      </h2>

      <h3>
        {count}
      </h3>
      <button onClick={() =>{
        setCount(count+1);
      }}>Tăng</button>

      <img src='' style={{width: '100%'}}></img>
    </div>
  );
}

export default App;
