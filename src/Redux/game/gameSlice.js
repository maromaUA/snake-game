import { createSlice } from '@reduxjs/toolkit';
import { addDotSnake, changeDirection, changeGameStatus } from './operations';


const gameSlice = createSlice({
    name: 'game',
    initialState: {
      snakeDots: [[0,0], [10,0]],
      food:[200,200],
      speed:100,
      direction:"right",
      isPlay:false,
      isLoading: false,
      error: null,
    }, 
  extraReducers: builder => {
    
    builder.addCase(addDotSnake, (state, {payload})=>{
      console.log("payload", payload);
      state.snakeDots.push(payload)
      state.snakeDots.shift();
     
     
    })
    .addCase(changeGameStatus, (state, {payload})=>{
      state.isPlay = payload;
    })
    .addCase(changeDirection, (state, {payload})=>{
      state.direction = payload;
    })
  }
  })
   
    export const gameReducer = gameSlice.reducer;

    // addDotSnake: (state, {payload}) => {
    //   state.snakeDots.push(payload.direction)
    //   state.snakeDots.shift();
    // }

  
    