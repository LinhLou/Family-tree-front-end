import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../services/login";

const initialState = {
  isLogin: false,
  token:'',
  profile:{

  }
};
export const fetchToken = createAsyncThunk(
  "user/fetchToken",
  login
)


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


export default userSlice.reducer
