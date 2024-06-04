import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const { REACT_APP_BACKEND_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BACKEND_URL;

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };
  
  export const registerOperation = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
      try {
        const res = await axios.post('/users/register', data);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logInOperation = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
      try {
        console.log(REACT_APP_BACKEND_URL);
        const res = await axios.post('/users/login', data);
        // After successful login, add the token to the HTTP header
        setAuthHeader(res.data.token);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logOutOperation = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        await axios.post('/users/logout');
        // After a successful logout, remove the token from the HTTP header
        clearAuthHeader();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const refreshUserOperation = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      // Reading the token from the state via getState()
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        // If there is a token, add it to the HTTP header and perform the request
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const changeRecordOperation = createAsyncThunk(
    'auth/changeRecord',
    async (data, thunkAPI) => {
      try {
        const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
        if (persistedToken === null) {
          // If there is no token, exit without performing any request
          return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        setAuthHeader(persistedToken);
        console.log("record:", data)
        const res = await axios.patch('/users/changeRecord', data);
    
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );