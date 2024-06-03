import { changeGameOver, changeGameStatus } from "../Redux/game/operations";
import { store } from "../Redux/store"

const snakeTouchedEdge = () => {
const snake = store.getState().game.snakeDots
const head = snake[snake.length-1];
const status = store.getState().game.isPlay;

    if(head[0] >=600 || head[1] >=600 || head[0]<0 || head[1]<0){
      //  store.dispatch(changeGameStatus(false))
        store.dispatch(changeGameOver(true))
    }


}

export default snakeTouchedEdge