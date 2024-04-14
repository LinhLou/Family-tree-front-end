import { combineReducers } from 'redux';
import loginReducer from './user/loginSlice';

const rootReducer = combineReducers({
  login: loginReducer
})

export default rootReducer