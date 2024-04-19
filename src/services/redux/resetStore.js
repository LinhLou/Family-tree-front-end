import { initUser } from "../../features/Authentification";
import store from './store';
import { localStorageName } from "../../data/constant";

export function resetStore(){
  store.dispatch(initUser());
  localStorage.removeItem(`${localStorageName}`);
}