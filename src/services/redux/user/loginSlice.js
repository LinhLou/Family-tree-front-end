import { createSlice } from '@reduxjs/toolkit';
import fetchToken from '../thunk/fetchToken';


const initialState = {
  status: false,
  token: ''
};


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = true;
        state.token = action.payload;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export default loginSlice.reducer;