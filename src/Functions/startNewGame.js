import { resetState } from "../Redux/game/operations"
import { store } from "../Redux/store"

const startNewGame = () => {
    store.dispatch(resetState())
  }
export default startNewGame