import { changeDirection, changeGameStatus } from "../Redux/game/operations";
import { store } from "../Redux/store";


const onKeyDown = e => {
  const direction = store.getState().game.direction;
  const status = store.getState().game.isPlay;
  const gameOver = store.getState().game.gameOver;
    switch(e.code){
      case 'ArrowRight':
        direction!=="left" && store.dispatch(changeDirection("right"))
        break;
      case 'ArrowLeft':
        direction!=="right" && store.dispatch(changeDirection("left"))
        break;
      case 'ArrowUp':
        direction!=="down" && store.dispatch(changeDirection("up"))
        break;
      case 'ArrowDown':
        direction!=="up" && store.dispatch(changeDirection("down"))
        break;
      case 'Space':
       gameOver===false && store.dispatch(changeGameStatus(!status))
       break;
       default:
        break;
    }
  }

  export default onKeyDown