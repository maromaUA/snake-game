import { useSelector } from 'react-redux'
import css from './GameOver.module.scss'
import { getScore } from '../../Redux/game/selector'
import startNewGame from '../../Functions/startNewGame'

const GameOver = () => {
    const score = useSelector(getScore)

    return(
        <div className={css.wrapper}>
           <h5>Final Score</h5>
           <p className={css.score}>{score}</p>
           <button className={css.restartBtn} onClick={startNewGame}>Restart</button>
        </div>
    )
    
}

export default GameOver