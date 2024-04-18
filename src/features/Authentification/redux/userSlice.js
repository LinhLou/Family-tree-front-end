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
  reducers:{
    initUser: (state)=>{
      return initialState
    }
  },
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

export const { initUser } = userSlice.actions

export default userSlice.reducer
