import { addScore, changeFoodCoord, changeGameSpeed, changeGameStatus } from "../Redux/game/operations";
import { store } from "../Redux/store"
import getRandomFood from "./getRandomFood";
import snakeIncrease from "./snakeIncrease";



const snakeEats = () => {
  const snake = store.getState().game.snakeDots;
  const head = snake[snake.length-1];
  const food = store.getState().game.food;
  const speed = store.getState().game.speed;
  if (head[0]==food[0] && head[1]==food[1]){
     store.dispatch(changeFoodCoord(getRandomFood()))
     snakeIncrease()
     store.dispatch(addScore())
     if(speed>26){
      store.dispatch(changeGameSpeed(speed-2.5))
     } 
     else{
      store.dispatch(changeGameSpeed(speed-0.5))
     }
  }

}



export default snakeEats 