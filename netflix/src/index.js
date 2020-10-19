import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import List from "./List";
import Card from "./Card";
// function ncard(val){
//   console.log(val);
//   // when we are using map fun
//   return(

//     <Card 
//       imgsrc={val.imgscr}
//       titles ={val.title}
//       snames ={val.sname}
//       link={val.links}
// />



ReactDOM.render(
  <>
  <h2 className="heading_style">Netflex top 3 movies name</h2>
  {List.map((val)=>{
    return (
      
        <Card
        imgsrc={val.imgscr}
        titles ={val.title}
        snames ={val.sname}
        link={val.links} />
    );
  })}

    {/* <Card 
      imgsrc={val].imgscr}
      titles ={val].title}
      snames ={val].sname}
      link={val].links} */}
      
    {/* <Card 
     imgsrc={List[1].imgscr}
     titles ={List[1].title}
     snames ={List[1].sname}
     link={List[1].links}
    
   
    />

  <Card
     imgsrc={List[2].imgscr}
     titles ={List[2].title}
     snames ={List[2].sname}
     link={List[2].links} */}

{/* List.map(ncard); */}
  </>,

  
  
  document.getElementById('root')
);


