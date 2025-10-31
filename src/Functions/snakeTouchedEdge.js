import { changeGameOver, changeGameStatus } from "../Redux/game/operations";
import { store } from "../Redux/store"

const snakeTouchedEdge = () => {
const snake = store.getState().game.snakeDots
const head = snake[snake.length-1];

    if(head[0] >=600 || head[1] >=600 || head[0]<0 || head[1]<0){

        store.dispatch(changeGameOver(true))
        store.dispatch(changeGameStatus(false))
    }


}

export default snakeTouchedEdge