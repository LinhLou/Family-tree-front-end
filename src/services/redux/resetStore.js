import { initUser } from "../../features/Authentification";
import store from './store';

export function resetStore(){
  store.dispatch(initUser());
}