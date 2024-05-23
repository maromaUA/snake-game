import { addDotSnake } from "../Redux/game/operations"
import { store } from "../Redux/store"
import snakeCollapse from "./snakeCollapse"
import snakeEats from "./snakeEats"
import snakeTouchedEdge from "./snakeTouchedEdge"


const moveSnake = () => {
    
    const snake = store.getState().game.snakeDots
    const direction = store.getState().game.direction
   
      const head = snake[snake.length-1]
  
      switch(direction) {
        case "right":
            store.dispatch(addDotSnake([head[0]+10, head[1]]))
                break;
        case "left":
          store.dispatch(addDotSnake([head[0]-10, head[1]]))
                break;
        case "up":
          store.dispatch(addDotSnake([head[0], head[1]-10]))
                break;
        case "down":
          store.dispatch(addDotSnake([head[0], head[1]+10]))
                break;
      }
      // snakeTouchedEdge()
      // snakeEats()
      // snakeCollapse()

    }

export default moveSnake