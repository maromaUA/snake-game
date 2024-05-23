import { useSelector } from 'react-redux'
import css from './GameOver.module.scss'
import { getScore } from '../../Redux/game/selector'

const GameOver = () => {
    const score = useSelector(getScore)

    return(
        <div className={css.wrapper}>
           <h5>Game Over</h5>
           <p>Your score is {score}</p>
        </div>
    )
    
}

export default GameOver