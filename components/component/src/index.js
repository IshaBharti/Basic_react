import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Heading from './Heading';
import Table from './Table';
import Para from "./Para";
import {add,div ,mul,sub} from "./Cal";
import Div   from "./Div";

let time = new Date();
time=time.getHours( );
const my_name="Isha Bharti";


let greeting=" ";
let heading = {
  colour :"white",
  margin:"20px",
  padding: "50",

  fontsize: "300%",
  fontStyle: "italic",
  display: "block",
  color: "red",
  textAlign : "center",
  textAlign : "capitalize"};
const text={
  color:"Green"
}; 
const csss_Style={};                  
if (time >= 1  && time <= 12){
  greeting="Good Morning Isha Have a great day";
  csss_Style.color="green"
  
}else if (time >=13 && time<=20){
  greeting="Evening is the time for peace,Where there is no tension to cease, this eveningI want to wish you Isha"
  csss_Style.color="blue"

}else {
  greeting ="Good night, sleep tight, can't wait to see your smile in the morning so bright!";
  csss_Style.color="Black"
}





ReactDOM.render(
// {/* <div> */}
  <React.Fragment>
    <div>
      
        
    
      
    
    <h2><span style={csss_Style}>{greeting} </span></h2>
    <Para/>
    <Table/>

  </div>
    
  
  
  
  
    <Heading></Heading>
    
  <img src="family.jpeg" alt="my pics" width="500"></img>/>
  <p>My Everything  Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life." "The family is the first essential cell of human society." "Family and friends are hidden treasures, seek them out and enjoy their riches."</p><br></br>
  <Div></Div>
  <h1>Calculator</h1> 
  <ol>
    <li>Sum of two number is {add(40,10)}</li>
    <li>Sub of two number is {sub(40,10)}</li>
    <li>Div of two number{div(40,10)}</li>
    <li>Mul of two number{mul(40,10)}</li>
    </ol> 
      

</React.Fragment>,


  
  
  document.getElementById('root')
)

