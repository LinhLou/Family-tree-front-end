import { combineReducers } from 'redux';
import { UserReducer } from '../../features/Authentification';

const rootReducer = combineReducers({
  user: UserReducer,
})

export default rootReducer