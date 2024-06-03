import { store } from "../../Redux/store"
import css from "./Food.module.scss"

const Food = () => {
    const coordinates = store.getState().game.food;
  return <div className={css.food} style={{
    left:`${coordinates[0]}px`,
    top:`${coordinates[1]}px`
  }}>

  </div>
}

export default Food