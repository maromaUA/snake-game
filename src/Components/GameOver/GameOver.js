import { useDispatch, useSelector } from 'react-redux'
import css from './GameOver.module.scss'
import { getScore } from '../../Redux/game/selector'
import startNewGame from '../../Functions/startNewGame'
import { selectRecord } from '../../Redux/auth/selectors'
import { changeRecordOperation } from '../../Redux/auth/operations'

const GameOver = () => {
    const dispatch = useDispatch()
    const score = useSelector(getScore)
    const oldRecord = useSelector(selectRecord)
    if(score>oldRecord){
        dispatch(changeRecordOperation({record:score}))
    }
    return(
        <div className={css.wrapper}>
            {score>oldRecord && <h4>New Record!</h4>}
           <h5>Final Score</h5>
           <p className={css.score}>{score}</p>
           <button className={css.restartBtn} onClick={startNewGame}>Restart</button>
        </div>
    )
    
}

export default GameOver