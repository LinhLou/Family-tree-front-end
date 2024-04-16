import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from '../../userService';

const user = new UserService('mockApiFail');

const fetchToken = createAsyncThunk(
  'login/fetchToken',
  async (data) => {
    try {
      const token = await user.loginUser(data);
      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

export default fetchToken;