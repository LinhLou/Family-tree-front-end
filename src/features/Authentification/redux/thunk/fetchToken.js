import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../../../services/api/user/service';

const user = new UserService('mockApiFail');

export const fetchToken = createAsyncThunk(
  'user/fetchToken',
  async (data) => {
    try {
      const token = await user.loginUser(data);
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export const singup = createAsyncThunk(
  'user/signup',
  async (data)=>{
    try {
      const message = await user.signupUser(data);
      return message
    } catch (error) {
      throw new Error(error.message);
    }
  }
)
