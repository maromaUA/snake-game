import { useSelector } from 'react-redux'
import css from './ScoreBoard.module.scss'
import { getScore } from '../../Redux/game/selector'

const ScoreBoard = () => {
    const score = useSelector(getScore)
    return (
        <div className={css.wrapper}>
             <div>Name</div>
             <div>Score:{score} </div>
             <div>Record</div>
        </div>
    )
}

export default ScoreBoard