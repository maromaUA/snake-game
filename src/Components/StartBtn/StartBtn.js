import { useDispatch, useSelector } from 'react-redux'
import css from './StartBtn.module.scss'
import { getGameStatus } from '../../Redux/game/selector'
import { changeGameStatus } from '../../Redux/game/operations'



const StartBtn = () => {
    const dispatch = useDispatch()
    const status = useSelector(getGameStatus)

return <button className={css.buttonWrapper} onClick={()=>{
    dispatch(changeGameStatus(!status))
}}>
    Start
</button>

}

export default StartBtn