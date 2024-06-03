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
            console.log("RIGHT")
                break;
        case "left":
          store.dispatch(addDotSnake([head[0]-10, head[1]]))
          console.log("LEFT")
                break;
        case "up":
          store.dispatch(addDotSnake([head[0], head[1]-10]))
          console.log("UP")
                break;
        case "down":
          store.dispatch(addDotSnake([head[0], head[1]+10]))
          console.log("DOWN")
                break;
      }
      // snakeTouchedEdge()
      // snakeEats()
      // snakeCollapse()

    }

export default moveSnake