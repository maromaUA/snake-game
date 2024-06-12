import css from "./Information.module.scss"
const Information = ({onClose}) => {

    return (
        <div className={css.wrapper}>
            <div className={css.text}>
                To control the snake, use the arrow keys. To start or stop the game, you can use the start button or the spacebar. The snake's speed will increase with each piece of food it eats. Good luck!
                
            </div>
            <button className={css.goBtn} onClick={onClose}>Ok</button>
        </div>
    )
}

export default Information