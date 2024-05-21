import { increaseSnake } from "../Redux/game/operations";
import { store } from "../Redux/store";

const snakeIncrease = () => {
    let snake = [...store.getState().game.snakeDots]
    snake.unshift([])
    store.dispatch(increaseSnake(snake))
}

export default snakeIncrease