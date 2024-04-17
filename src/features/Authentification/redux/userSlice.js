import { createSlice } from "@reduxjs/toolkit";
import { fetchToken, singup } from "./thunk/fetchToken";



const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLogin = true;
        state.token = action.payload;
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.isLogin = false;
      })
  },
});
