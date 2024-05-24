import { changeGameStatus, resetState } from "../Redux/game/operations"
import { store } from "../Redux/store"

const startNewGame = () => {
    store.dispatch(resetState())
    store.dispatch(changeGameStatus(true))
  }
export default startNewGame