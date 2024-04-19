import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import login from "../services/login";
import getUserProfile from "../services/getUserProfile";

const initialState = {
  isLogin: false,
  token:''
};
export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async function (data){
    try {
      const token = await login(data);
      const profile = await getUserProfile(token);
      return profile
    } catch (error) {
      throw new Error(error.message)
    }
    
  }
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
      .addCase(fetchUserProfile.fulfilled, (state,action)=>{
        state.isLogin = true;
        state.token = action.payload;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected,(state)=>{
        state.isLogin = false;
      })
  },
});

export const { initUser } = userSlice.actions

export default userSlice.reducer
