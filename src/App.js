import './App.css';
import Practise1 from "./Components/Practise1.jsx";
import Practise2 from "./Components/Practise2.jsx";
import Practise3 from "./Components/Practise3.jsx";
import Practise4 from './Components/Practise4.jsx';
import Practise5 from './Components/Practise5.jsx';

import React , {useState} from "react";

function App() {
  setInterval(()=>{
    let time = new Date();
    let timeNow = time.toLocaleTimeString().split(':').join(" : ").toString();
    document.getElementById("timeShow").innerHTML = timeNow;
  },1000)

  const name = "React JS";

  const objMe = {
    name : "Nagateja",
    age : 17,
    favourites : ["Coding","Learning","Development"]
  }

  const [color, setColor] = useState({
    color : "black",
    backgroundColor : "white"
  })

  const toggleMode = () => {
    if (color.color === "black") {
      console.log("Toggle Dark Mode Enabled")
      setColor({
        color: "white",
        backgroundColor: "black",
      })
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
    }
    else{
      console.log("Toggle Light Mode Enabled");
      setColor({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
}

  return (
    <>
      <div className='text-end mx-2' id="timeShow" style={{height : "30px",color : color.color ,backgroundColor : color.backgroundColor}}></div>
      <Practise1 initialColor={color} toggleMode={toggleMode} myName={name} aboutMe={objMe}/>
      <Practise5/>
      <Practise4 letSay="I Will Say"/>
      <Practise3 myName="Nagateja" colorNew="green"/>
      <Practise2/>
    </>
  );
}

export default App;
