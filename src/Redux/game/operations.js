import { createAction } from "@reduxjs/toolkit"

export const changeDirection = createAction('game/changeDirection')
export const addDotSnake = createAction('game/addDotSnake')
export const changeGameStatus = createAction('game/changeGameStatus')
export const changeFoodCoord = createAction('game/changeFoodCoord')
export const increaseSnake = createAction('game/increaseSnake')


