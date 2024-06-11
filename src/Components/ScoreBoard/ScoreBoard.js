import { useDispatch, useSelector } from 'react-redux'
import css from './ScoreBoard.module.scss'
import { getScore } from '../../Redux/game/selector'
import { logOutOperation } from '../../Redux/auth/operations'
import { selectUser } from '../../Redux/auth/selectors'

const ScoreBoard = () => {
    const score = useSelector(getScore)
    const user = useSelector(selectUser)
    console.log("user:", user);
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOutOperation())
    }
    return (
        <div className={css.wrapper}>
             <div>{user.name}</div>
             <div>Score: {score} </div>
             <div>Record: {user.record}</div>
             <div className={css.logOut} onClick={handleLogOut}>Logout</div>
        </div>
    )
}

export default ScoreBoard