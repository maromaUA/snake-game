import { changeDirection } from "../Redux/game/operations";
import { store } from "../Redux/store";


const onKeyDown = e => {
    switch(e.code){
      case 'ArrowRight':
        store.dispatch(changeDirection("right"))
        break;
      case 'ArrowLeft':
        store.dispatch(changeDirection("left"))
        break;
      case 'ArrowUp':
        store.dispatch(changeDirection("up"))
        break;
      case 'ArrowDown':
        store.dispatch(changeDirection("down"))
        break;
    }
  }

  export default onKeyDown