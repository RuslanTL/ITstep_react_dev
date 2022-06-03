
import './App.css';
import React,{useState,useEffect} from 'react';
function App() {
  const defSeconds=3;
  const [click, setClick] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [status, setStatus] = useState(false)
  const [gameStarted, setGameStarted] = useState(false);
  const [cooldown, setCooldown] = useState(false)
  useEffect(() => {
    if(status){
      if(seconds>0){
        setTimeout(() => {
          setSeconds(seconds-1)
        }, 1000);
      }
      if(seconds==0){
        setCooldown(true)
        setTimeout(() => {
          setCooldown(false);
        }, 1000);
        console.log("game over")
        setStatus(false);
        setGameStarted(false);
      }
    }
  })
  useEffect(() => {
    if(gameStarted){
      if(seconds==0 || isNaN(seconds)){
        setSeconds(defSeconds)
      }
      setClick(0)
      console.log("game start")
      setStatus(true)
    }
  }, [gameStarted])
  


  const clickButton=()=>{
    if(!status){
      setGameStarted(true);
    }else{
      setClick(click+1)
    }
  }
  
  return (
    <div className="App">
      <input type="number" onChange={(e)=>setSeconds(Math.round(e.target.value))} placeholder="enter seconds"></input>
      <h2>Timer: {seconds}</h2>
      <button disabled={cooldown} onClick={()=>clickButton()}>
        {gameStarted ? "Click" : "Start"}
      </button>
      <h4>Clicks: {click}</h4>
    </div>
  );
}

export default App;
