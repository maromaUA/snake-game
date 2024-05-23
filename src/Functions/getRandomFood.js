import { store } from "../Redux/store";

const getRandomFood = () => {
    const snake = [...store.getState().game.snakeDots]
    const xCoordsSnake = snake.map(dot=>dot[0])
    const yCoordsSnake = snake.map(dot=>dot[1])
    console.log("Xsnake", xCoordsSnake);
    console.log("Ysnake", yCoordsSnake);
    const min = 0;
    const max = 580;
    let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
    let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;


    x = x<10? 0: Math.ceil(x/ 10) * 10;
    y = y<10? 0: Math.ceil(y / 10) * 10;
    
return [x, y]
}

export default getRandomFood