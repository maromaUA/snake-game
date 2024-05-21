import logo from './logo.svg';
import './App.css';
import PlayArea from './Components/PlayArea/PlayArea';
import Snake from './Components/Snake/Snake';
import { useEffect, useRef } from 'react';
import {getGameStatus, getSnake } from './Redux/game/selector';
import { useDispatch, useSelector } from 'react-redux';
import { addDotSnake, changeDirection } from './Redux/game/operations';
import StartBtn from './Components/StartBtn/StartBtn';
import { store } from './Redux/store';
import moveSnake from './Functions/moveSnake';
import onKeyDown from './Functions/onKeyDown';
import snakeTouchedEdge from './Functions/snakeTouchedEdge';
import Food from './Components/Food/Food';
import snakeEats from './Functions/snakeEats';





function App() {
  
const dispatch = useDispatch()  

const status = useSelector(getGameStatus)
const intervalRef = useRef()
const snake = useSelector(getSnake)
console.log("snake current", snake);

  useEffect(()=>{
    
    if (status){
      const intervalId = setInterval(moveSnake, 200)
      intervalRef.current = intervalId;
    }
    else{
      clearInterval(intervalRef.current)
    }
  },[status])

  useEffect (()=> {
    document.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  useEffect(()=>{
    snakeTouchedEdge();
    snakeEats();
  }, [snake])
  
  
 


  return (
    <div className="App">
     <PlayArea>
     <Snake/>
     <Food/>
     </PlayArea>
     <StartBtn/>
     
    </div>
  );
}

export default App;
