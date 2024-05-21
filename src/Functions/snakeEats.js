import { changeFoodCoord } from "../Redux/game/operations";
import { store } from "../Redux/store"
import getRandomFood from "./getRandomFood";
import snakeIncrease from "./snakeIncrease";



const snakeEats = () => {
  const snake = store.getState().game.snakeDots;
  const head = snake[snake.length-1];
  const food = store.getState().game.food;
  if (head[0]==food[0] && head[1]==food[1]){
     store.dispatch(changeFoodCoord(getRandomFood()))
     snakeIncrease()
  }

}



export default snakeEats