import { combineReducers } from 'redux';
import { UserReducer } from '../../features/Authentification/index';

const rootReducer = combineReducers({
  user: UserReducer,
})

export default rootReducer