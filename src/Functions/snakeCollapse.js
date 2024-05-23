import { changeGameOver, changeGameStatus } from "../Redux/game/operations";
import { store } from "../Redux/store"


const snakeCollapse = () => {
let snake = [...store.getState().game.snakeDots];
let head = snake[snake.length-1];
snake.pop();
snake.forEach(dot=>{
    if(head[0]===dot[0] && head[1] == dot[1]){
      //store.dispatch(changeGameStatus(false))//Game over
      store.dispatch(changeGameOver(true))
    }
})
}

export default snakeCollapse