import { useSelector } from "react-redux";
import { getSnake } from "../../Redux/game/selector";
import css from './Snake.module.scss'

const Snake = () => {
  
  const snakeArray = useSelector(getSnake)
  console.log("snakeArray", snakeArray)

  const snake = snakeArray.map((dot, i)=>
    { 
    return <div key={i} style={{left:`${dot[0]}px`, top:`${dot[1]}px`}} className={css.snakeDot}>
    </div>
    }
  )

  return (
    <div> {snake}</div>
  )
}

export default Snake;