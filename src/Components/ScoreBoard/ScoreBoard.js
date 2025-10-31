import { useDispatch, useSelector } from 'react-redux'
import css from './ScoreBoard.module.scss'
import { getScore } from '../../Redux/game/selector'
import { logOutOperation } from '../../Redux/auth/operations'
import { selectGuest, selectUser } from '../../Redux/auth/selectors'
import { logoutAsGuest } from '../../Redux/auth/authSlice'
import { changeGameStatus, resetState } from '../../Redux/game/operations'



const ScoreBoard = () => {
    const score = useSelector(getScore)
    const guest = useSelector(selectGuest)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(logOutOperation())
        dispatch(resetState())
    }
    const handleLogOutAsGuest =() => {
        dispatch(changeGameStatus(false))
        dispatch(logoutAsGuest())
      //  dispatch(changeGameOver(true))
        dispatch(resetState())
    }
    return (
        <div className={css.wrapper}>
             <div>{user.name}</div>
             <div>Score: {score} </div>
             <div>Record: {user.record}</div>
             <div className={css.logOut} onClick={guest ? handleLogOutAsGuest:handleLogOut}>Logout</div>
        </div>
    )
}

export default ScoreBoard