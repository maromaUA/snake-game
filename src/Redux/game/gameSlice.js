import { createSlice } from '@reduxjs/toolkit';
import { addDotSnake, addScore, changeDirection, changeFoodCoord, changeGameOver, changeGameSpeed, changeGameStatus, increaseSnake, resetState } from './operations';

const initialState = {
  snakeDots: [[0,0], [10,0]],
      food:[200,200],
      speed:100,
      score:0,
      direction:"right",
      isPlay:false,
      gameOver:false,
      isLoading: false,
      error: null,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
  extraReducers: builder => {
    
    builder.addCase(addDotSnake, (state, {payload})=>{
      state.snakeDots.push(payload)
      state.snakeDots.shift(); 
     
    })
    .addCase(changeGameStatus, (state, {payload})=>{
      state.isPlay = payload;
    })
    .addCase(changeDirection, (state, {payload})=>{
      state.direction = payload;
    })
    .addCase(changeFoodCoord, (state, {payload})=>{
      state.food = [...payload];
    })
    .addCase(increaseSnake, (state, {payload})=>{
      state.snakeDots = [...payload]
    })
    .addCase(changeGameSpeed, (state, {payload})=>{
      state.speed = payload;
    })
    .addCase(changeGameOver, (state, {payload})=>{
      state.gameOver = payload;
    })
    .addCase(addScore, (state)=>{
      state.score = state.score+1;
    })
    .addCase(resetState, ()=>({...initialState}))

  }
  })
   
    export const gameReducer = gameSlice.reducer;

    // addDotSnake: (state, {payload}) => {
    //   state.snakeDots.push(payload.direction)
    //   state.snakeDots.shift();
    // }

  
    