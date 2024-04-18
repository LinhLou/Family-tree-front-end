import { localStorageName } from "../../../data/constant";
const persistedStateMiddleware = ({ getState }) => next => action=>{
  next(action);
  localStorage.setItem(`${localStorageName}`, JSON.stringify(getState()));
}


export default persistedStateMiddleware