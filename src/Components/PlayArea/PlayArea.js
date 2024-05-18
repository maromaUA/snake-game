import css from './PlayArea.module.scss'

const PlayArea = ({children}) => {
  return(
    <div className={css.mainArea}>
      {children}
    </div>
  )
}

export default PlayArea;