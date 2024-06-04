import { createSlice } from '@reduxjs/toolkit';
import { registerOperation, logInOperation, logOutOperation, refreshUserOperation } from './operations';

const initialState = {
  user:{name: null, email: null, record:0},
  token:null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
}

const authSlice = createSlice({
    name: 'auth',
   initialState,
   extraReducers:builder =>{
      builder.addCase(registerOperation.fulfilled, (state, {payload})=>{
       
      })
      .addCase(logInOperation.fulfilled, (state, {payload})=>{
        state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      })
      .addCase(logOutOperation.fulfilled, (state)=>{
        state.user = { name: null, email: null, record:0 };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserOperation.pending, (state)=>{
        state.isRefreshing = true;
      })
      .addCase(refreshUserOperation.fulfilled, (state, {payload})=>{
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      })
      .addCase(refreshUserOperation.rejected, (state)=>{
        state.isRefreshing = false;
      })
      
   }})

    export const authReducer = authSlice.reducer;