import logo from './logo.svg';
import './App.css';
import PlayArea from './Components/PlayArea/PlayArea';
import Snake from './Components/Snake/Snake';
import { useEffect, useRef, useState } from 'react';
import {getFood, getGameOver, getGameSpeed, getGameStatus, getSnake } from './Redux/game/selector';
import { useDispatch, useSelector } from 'react-redux';
import { addDotSnake, changeDirection } from './Redux/game/operations';
import StartBtn from './Components/StartBtn/StartBtn';
import { store } from './Redux/store';
import moveSnake from './Functions/moveSnake';
import onKeyDown from './Functions/onKeyDown';
import snakeTouchedEdge from './Functions/snakeTouchedEdge';
import Food from './Components/Food/Food';
import snakeEats from './Functions/snakeEats';
import snakeCollapse from './Functions/snakeCollapse';
import Modal from './Components/Modal/Modal';
import GameOver from './Components/GameOver/GameOver';
import ScoreBoard from './Components/ScoreBoard/ScoreBoard';





function App() {
  
const dispatch = useDispatch()  

const status = useSelector(getGameStatus)
const intervalRef = useRef()
const snake = useSelector(getSnake)
const speed = useSelector(getGameSpeed)
const gameOver = useSelector(getGameOver)

  useEffect(()=>{
    if (status && gameOver===false){
      const intervalId = setInterval(moveSnake, speed)
      intervalRef.current = intervalId;
    }
    else{
      clearInterval(intervalRef.current)
    }
    
  },[status, gameOver])


  useEffect (()=> {
    document.addEventListener('keydown', onKeyDown)
    return ()=> {
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  useEffect(()=>{
    snakeTouchedEdge();
    snakeEats();
    snakeCollapse();
  },[snake])
  
  
 


  return (
    <div className="App">
       {gameOver&&<Modal><GameOver/></Modal>}
       <ScoreBoard/>
     <PlayArea>
     <Snake/>
     <Food/>
     </PlayArea>
     <StartBtn/>
     
    </div>
  );
}

export default App;
